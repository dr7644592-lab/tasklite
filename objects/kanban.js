// ---------- Инициализация данных ----------
const columns = document.querySelectorAll('.column');
let boardData = JSON.parse(localStorage.getItem('kanbanData')) || {
  todo: [],
  'in-progress': [],
  done: []
};

// ---------- Сохранение ----------
function saveBoard() {
  localStorage.setItem('kanbanData', JSON.stringify(boardData));
}

// ---------- Приоритеты ----------
function normalizePriority(value) {
  const v = String(value || '').trim().toLowerCase();
  if (['высокий', 'выс', 'в', 'high', 'h'].includes(v)) return 'high';
  if (['средний', 'сред', 'с', 'medium', 'med', 'm'].includes(v)) return 'medium';
  if (['низкий', 'низ', 'н', 'low', 'l'].includes(v)) return 'low';
  return 'medium';
}

function priorityLabel(level) {
  return level === 'high' ? 'Высокий'
       : level === 'low'  ? 'Низкий'
       : 'Средний';
}

// ---------- Обновление счётчика колонки ----------
function updateCount(column) {
  const countEl = column.querySelector('.column__count');
  const status = column.dataset.status;
  countEl.textContent = boardData[status].length;
}

// ---------- Drag & Drop ----------
let draggedItem = null;
let sourceStatus = null;

function addDragEvents(el) {
  el.addEventListener('dragstart', (e) => {
    draggedItem = el;
    sourceStatus = el.closest('.column').dataset.status;
    el.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
  });

  el.addEventListener('dragend', () => {
    if (draggedItem) draggedItem.classList.remove('dragging');
    draggedItem = null;
  });
}

// Настройка колонок как drop-зон
columns.forEach(column => {
  const taskList = column.querySelector('.task-list');

  taskList.addEventListener('dragover', (e) => {
    e.preventDefault();
    column.classList.add('drag-over');
  });

  taskList.addEventListener('dragleave', () => {
    column.classList.remove('drag-over');
  });

  taskList.addEventListener('drop', (e) => {
    e.preventDefault();
    column.classList.remove('drag-over');

    if (!draggedItem) return;
    const targetStatus = column.dataset.status;
    const index = +draggedItem.dataset.index;

    const movedTask = boardData[sourceStatus][index];
    boardData[sourceStatus].splice(index, 1);
    boardData[targetStatus].push(movedTask);

    saveBoard();
    renderBoard();
  });
});

// ---------- Отрисовка доски ----------
function renderBoard() {
  columns.forEach(column => {
    const status = column.dataset.status;
    const taskList = column.querySelector('.task-list');
    taskList.innerHTML = '';

    boardData[status].forEach((task, index) => {
      const el = document.createElement('article');
      el.className = 'task';
      el.draggable = true;
      el.dataset.index = index;
      el.innerHTML = `
        <div class="task__header">
          <h3 class="task__title">${escapeHtml(task.title)}</h3>
          <button class="task__delete" type="button" aria-label="Удалить задачу">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cb6e6e" stroke-width="2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6" /><path d="M14 11v6" />
              <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </div>
        ${task.desc ? `<p class="task__desc">${escapeHtml(task.desc)}</p>` : ''}
        <footer class="task__footer">
          <span class="task__label ${task.priority}">${priorityLabel(task.priority)}</span>
          ${task.deadline ? `<time class="task__date">${escapeHtml(task.deadline)}</time>` : ''}
        </footer>
      `;
      
      // Кнопка удаления
      const deleteBtn = el.querySelector('.task__delete');
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const columnStatus = el.closest('.column').dataset.status;
        const taskIndex = boardData[columnStatus].findIndex(t => 
          t.title === task.title && t.priority === task.priority
        );
        if (taskIndex !== -1) {
          boardData[columnStatus].splice(taskIndex, 1);
          saveBoard();
          renderBoard();
        }
      });

      addDragEvents(el);
      taskList.appendChild(el);
    });

    updateCount(column);
  });
}

// Экранирование HTML
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ---------- Добавление задачи ----------
document.querySelectorAll('.add-task').forEach(btn => {
  btn.addEventListener('click', () => {
    const column = btn.closest('.column');
    const status = column.dataset.status;

    const title = prompt('Введите название задачи:')?.trim();
    if (!title) return;

    const priorityInput = prompt('Приоритет (Низкий / Средний / Высокий):', 'Средний');
    const priority = normalizePriority(priorityInput);

    const desc = prompt('Описание (можно пропустить):')?.trim() || '';
    const deadline = prompt('Срок (например: до 12.11):')?.trim() || '';

    const newTask = { title, desc, priority, deadline };
    boardData[status].push(newTask);
    saveBoard();
    renderBoard();
  });
});

document.addEventListener('submit', e => e.preventDefault());

// ---------- Добавляем демо-задачу "пробежка" при первом запуске ----------
const totalTasks = boardData.todo.length + boardData['in-progress'].length + boardData.done.length;
if (totalTasks === 0) {
  boardData.todo.push({
    title: 'пробежка',
    desc: '',
    priority: 'medium',
    deadline: ''
  });
  saveBoard();
}

// ---------- Стартовый рендер ----------
renderBoard();