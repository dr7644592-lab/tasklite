const columns = document.querySelectorAll('.column');
let boardData = JSON.parse(localStorage.getItem('kanbanData')) || {
  todo: [],
  'in-progress': [],
  done: [],
};

function saveBoard() {
  localStorage.setItem('kanbanData', JSON.stringify(boardData));
}

// ---------- Вспомогательные функции (оставлены как есть) ----------
function normalizePriority(value) {
  const v = String(value || '').trim().toLowerCase();
  if (['высокий', 'выс', 'в', 'high', 'h'].includes(v)) return 'high';
  if (['средний', 'сред', 'с', 'medium', 'med', 'm'].includes(v)) return 'medium';
  if (['низкий', 'низ', 'н', 'low', 'l'].includes(v)) return 'low';
  return 'medium';
}

function priorityLabel(level) {
  return level === 'high' ? 'Высокий приоритет'
       : level === 'low'  ? 'Низкий приоритет'
       : 'Средний приоритет';
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getClosestTask(tasks) {
  let closestTask = null;
  let closestTime = Infinity;
  const today = new Date();
  for (const task of tasks) {
    const status = String(task.status || '').trim().toLowerCase();
    if (status !== 'done') {
      const deadlineDate = new Date(task.deadline);
      const diff = deadlineDate - today;
      if (diff >= 0 && diff < closestTime) {
        closestTime = diff;
        closestTask = task;
      }
    }
  }
  if (!closestTask) return 'Нет активных задач';
  return closestTask.title;
}

function getWinner(votes) {
  const map = {};
  for (const vote of votes) {
    const name = String(vote || '').trim().toLowerCase();
    if (!name) continue;
    if (!map[name]) map[name] = 0;
    map[name]++;
  }
  let max = 0;
  let winner = null;
  let isTie = false;
  for (const name in map) {
    if (map[name] > max) {
      max = map[name];
      winner = name;
      isTie = false;
    } else if (map[name] === max) {
      isTie = true;
    }
  }
  if (isTie) return 'Ничья';
  return winner;
}

function getValidTags(input) {
  const result = [];
  const seen = {};
  const parts = String(input || '').split(',');
  for (let part of parts) {
    const tag = part.trim().toLowerCase();
    if (!tag) continue;
    if (!seen[tag]) {
      seen[tag] = true;
      result.push(tag);
    }
  }
  return result;
}

function renderTags(input) {
  const seen = {};
  const list = [];
  const parts = String(input || '').split(',');
  for (let part of parts) {
    const tag = part.trim().toLowerCase();
    if (!tag) continue;
    if (!seen[tag]) {
      seen[tag] = true;
      list.push(tag);
    }
  }
  let html = '<ul>';
  for (const tag of list) {
    const safeTag = escapeHtml(tag);
    html += '<li>' + safeTag + '</li>';
  }
  html += '</ul>';
  return html;
}

function searchMessages(messages, query) {
  const result = [];
  const normalizedQuery = String(query || '').trim().toLowerCase();
  if (!normalizedQuery) return result;
  for (const item of messages) {
    const text = String(item.text || '');
    const normalizedText = text.toLowerCase();
    if (normalizedText.includes(normalizedQuery)) {
      const safeText = escapeHtml(text);
      result.push(safeText);
    }
  }
  return result;
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

columns.forEach(column => {
  const taskList = column.querySelector('.task-list');

  taskList.addEventListener('dragover', e => {
    e.preventDefault();
    column.classList.add('drag-over');
  });

  taskList.addEventListener('dragleave', () => {
    column.classList.remove('drag-over');
  });

  taskList.addEventListener('drop', (e) => {
    e.preventDefault();
    column.classList.remove('drag-over');

    const targetStatus = column.dataset.status;
    if (!draggedItem) return;

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
      el.className = 'task kanban';
      el.draggable = true;
      el.dataset.index = index;
      el.innerHTML = `
        <h3 class="task__title">${escapeHtml(task.title)}</h3>
        ${task.desc ? `<p class="task__desc">${escapeHtml(task.desc)}</p>` : ''}
        <footer class="task__footer">
          <span class="task__label ${task.priority}">${priorityLabel(task.priority)}</span>
          <time class="task__date">${escapeHtml(task.deadline)}</time>
        </footer>
      `;
      addDragEvents(el);
      taskList.appendChild(el);
    });

    updateCount(column);
  });
}

function updateCount(column) {
  const countEl = column.querySelector('.column__count');
  const status = column.dataset.status;
  countEl.textContent = boardData[status].length;
}

// ---------- Добавление новой задачи ----------
document.querySelectorAll('.add-task').forEach(btn => {
  btn.addEventListener('click', () => {
    const column = btn.closest('.column');
    const status = column.dataset.status;

    const title = prompt('Введите название задачи:') || '';
    const desc = prompt('Описание (по желанию):') || '';
    const priorityInput = prompt('Приоритет (Высокий / Средний / Низкий):') || 'Средний';
    const deadline = prompt('Срок (например: до 12.11):') || '';

    const cleanTitle = title.trim();
    const cleanDesc = desc.trim();
    const cleanDeadline = deadline.trim();
    if (cleanTitle === '') return;

    const level = normalizePriority(priorityInput);

    const newTask = {
      title: cleanTitle,
      desc: cleanDesc,
      priority: level,
      deadline: cleanDeadline
    };

    boardData[status].push(newTask);
    saveBoard();
    renderBoard();
  });
});

// ---------- Первичный рендер ----------
renderBoard();

