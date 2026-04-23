// Ожидаем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {

// практика //
let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;

console.log(sum);
console.log(difference);

// операторы и условия //

let titleEx = "";
if(titleEx === ""){
    console.log("Название задач не указано");
}else{
    console.log("Задача, " + titleEx);
}

let tasksCount = 5;
if(tasksCount === 0){
    console.log("Список пуст")
}else if(tasksCount <= 3){
    console.log("Немного задач")
}else{
    console.log("Много задач")
}

function sumFn(a, b){
    return a + b
}

console.log(sumFn(3, 4)); // 7
console.log(sumFn(10, 5)); // 15

function isTaskDone(status){
    return status === "выполнена";
}

console.log(isTaskDone("выполнена")); // true
console.log(isTaskDone("активка"));

function taskSummary(total, done){
    let active = total - done;
    return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active;
}

console.log(taskSummary(5, 3));
console.log(taskSummary(10, 4));

let cities = ["Москва", "Париж", "Питер", "Токио"];
cities[2] = "Лондон";
console.log(cities);

let taskExample = {
    id: 1,
    title: "Купить молоко",
    status: "активна"
};
console.log(taskExample.id);
console.log(taskExample.title);
console.log(taskExample.status);

let tasksArr = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 2, title: "Позвонить врачу", status: "выполнена"},
    {id: 3, title: "Сделать уроки", status: "активна"},
];
console.log(tasksArr[0].title);
console.log(tasksArr[1].status);

tasksArr[0].status = "выполнена";
console.log(tasksArr[0]);

tasksArr.push({id: 4, title: "Прогулка", status: "активна"});
console.log(tasksArr);

let user = {
    name: "Анна",
    tasks: tasksArr
};

console.log(user.name);
console.log(user.tasks.length);

function filterByStatus(tasks, status){
    return tasks.filter(function (task){
        return task.status === status;
    });
}

let task1 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 2, title: "Позвонить врачу", status: "выполнена" },
    { id: 3, title: "Сделать уроки", status: "активна" }
]

console.log(filterByStatus(task1, "активна"));

function sortByTitleAsc(tasks){
    tasks.sort(function (a, b){
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
        return 0;
    });
    return tasks;
}

let tasks2 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 2, title: "Позвонить врачу", status: "активна" },
    { id: 3, title: "Сделать уроки", status: "активна" }
]

console.log(sortByTitleAsc(tasks2));

function searchByTitle(tasks, query){
    const q = query.toLowerCase()
    return tasks.filter(function (task){
        return task.title.toLowerCase().indexOf(q) !== -1    
    });
}

let tasks3 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 2, title: "Позвонить врачу", status: "активна" },
    { id: 3, title: "Сделать уроки", status: "активна" }
]

console.log(searchByTitle(tasks3, "куп"));

function removeTaskById(tasks, id){
    return tasks.filter(function (task){
        return task.id !== id;
    });
}

let tasks4 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 2, title: "Позвонить врачу", status: "активна" },
    { id: 3, title: "Сделать уроки", status: "активна" }
];

console.log(removeTaskById(tasks4, 2));

function toggleTaskStatus(tasks, id){
    return tasks.map(function (task){
        if(task.id === id){
            const newStatus = task.status === "выполнена" ? "активна" : "выполнена";

            return{
                id: task.id,
                title: task.title,
                status: newStatus,
            };
        }
        return task;
    });
}

let tasks5 = [
    { id: 1, title: "Купить молоко", status: "активна"},
    { id: 2, title: "Позвонить врачу", status: "выполнена"}
];
console.log(toggleTaskStatus(tasks5, 1));

let demoTasks = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 2, title: "Сходить в спорт зал", status: "Выполнена"},
    {id: 3, title: "Позвонить другу", status: "активна"},
    {id: 4, title: "Прочитать книгу", status: "выполнена"},
    {id: 5, title: "Сделать проект", status: "активна"}
];

for(let i = 0; i < demoTasks.length; i++){
    console.log(demoTasks[i].id + ":", demoTasks[i].title);
}

for (let task of demoTasks) {
    console.log(task.id + ":", task.title);
}

let i = 0;
let totalDemo = 0;
let doneDemo = 0;
let activeDemo = 0;

while(i < demoTasks.length){
    totalDemo++;
    if(demoTasks[i].status === "выполнена" || demoTasks[i].status === "Выполнена"){
        doneDemo++;
    }else{
        activeDemo++;
    }
    i++;
}

console.log("Всего:", totalDemo, "| Выполнено:", doneDemo, "| Активных:", activeDemo);

for(let task of demoTasks){
    if(task.status === "активна"){
        console.log("Активная задача:", task.title);
    }
}

demoTasks.forEach(task => {
    console.log("#" + task.id + " " + task.title + " (" + task.status + ")");
});

let searchTitle = "Купить молоко";
let found = null;
for(let task of demoTasks){
    if(task.title === searchTitle){
        found = task;
        break;
    }
}
if(found){
    console.log("Найдена задача", found);
}else{
    console.log("Задача не найдена");
}

let activeTasks =[];
for(let task of demoTasks){
    if(task.status === "активна"){
        activeTasks.push(task);
    }
}
console.log("Активные задачи:", activeTasks);

//  ОСНОВНОЕ ПРИЛОЖЕНИЕ! //
console.log('Запуск основного приложения');

// Загружаем данные из localStorage
let tasksApp = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTask() {
    localStorage.setItem('tasks', JSON.stringify(tasksApp));
}

// Создаём контейнер .tasks, если его нет //
let container = document.querySelector('.tasks');
if (!container) {
    container = document.createElement('div');
    container.className = 'tasks';
    const footer = document.querySelector('.footer-controls');
    if (footer) {
        footer.before(container);
    } else {
        document.querySelector('main.container').append(container);
    }
}

// Удаляем статичный пример задачи //
const staticTask = document.querySelector('.task');
if (staticTask && staticTask.closest('.tasks') === null) {
    staticTask.remove();
}

// Получаем элементы DOM //
const inputField = document.querySelector('.form-add_input');
const addButton = document.querySelector('.form-add_button');
const form = document.querySelector('.form-add');
const searchInput = document.querySelector('.toolbar_search');
const sortSelect = document.querySelector('.toolbar_sort');
const tabButtons = document.querySelectorAll('.tabs_item');
const clearButton = document.querySelector('.footer-controls_clear');

// Проверка, что элементы найдены
console.log('inputField:', inputField);
console.log('addButton:', addButton);
console.log('searchInput:', searchInput);
console.log('sortSelect:', sortSelect);
console.log('tabButtons:', tabButtons.length);
console.log('clearButton:', clearButton);

let sortOrder = 'new';      // old | new | az | za
let currentFilter = 'all';  // all | active | done

// Форматирование даты //
function formatDate(date) {
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    const h = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${d}.${m}.${y}, ${h}:${min}`;
}

// Рендер одной карточки //
function renderTask(taskData) {
    const task = document.createElement('div');
    task.classList.add('task');

    const content = document.createElement('div');
    content.classList.add('task_content');
    task.append(content);

    const title = document.createElement('div');
    title.classList.add('task_title');
    title.textContent = taskData.text || taskData.title;

    const meta = document.createElement('div');
    meta.classList.add('task_meta');
    meta.textContent = taskData.date || '';

    content.append(title, meta);

    const actions = document.createElement('div');
    actions.classList.add('task_actions');
    task.append(actions);

    // Кнопка редактирования
    const editBtn = document.createElement('button');
    editBtn.classList.add('task_action', 'task_action--edit');
    editBtn.title = 'Редактировать';
    editBtn.innerHTML = `<svg class="task__icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#6f64a3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`;
    editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newText = prompt('Изменить задачу:', taskData.text || taskData.title);
        if (newText && newText.trim() !== '') {
            taskData.text = newText.trim();
            if (taskData.title !== undefined) taskData.title = newText.trim();
            renderAll();
            saveTask();
        }
    });

    // Кнопка удаления //
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('task_action', 'task_action--delete');
    deleteBtn.title = 'Удалить';
    deleteBtn.innerHTML = `<svg class="task__icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#cb6e6e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>`;
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = tasksApp.findIndex(t => t.id === taskData.id);
        if (index !== -1) {
            tasksApp.splice(index, 1);
            renderAll();
            saveTask();
        }
    });

    actions.append(editBtn, deleteBtn);

    if (taskData.done) {
        task.classList.add('task--done');
    }

    task.addEventListener('click', (e) => {
        if (e.target.closest('.task_actions')) return;
        taskData.done = !taskData.done;
        renderAll();
        saveTask();
    });

    return task;
}

// Обновление счётчиков //
function updateCounters() {
    const total = tasksApp.length;
    const activeCount = tasksApp.filter(t => !t.done).length;
    const doneCount = tasksApp.filter(t => t.done).length;

    if (clearButton) {
        clearButton.disabled = doneCount === 0;
    }

    const counters = document.querySelector('.footer-controls_counters');
    if (counters) {
        counters.innerHTML = `
            <span>Всего: ${total}</span>
            <span>Активных: ${activeCount}</span>
            <span>Выполненных: ${doneCount}</span>
        `;
    }
}

// Полная перерисовка списка //
function renderAll() {
    if (!container) return;
    container.innerHTML = '';

    // Фильтрация //
    let filtered = tasksApp.filter(task => {
        if (currentFilter === 'active') return !task.done;
        if (currentFilter === 'done') return task.done;
        return true;
    });

    // Поиск //
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (query) {
        filtered = filtered.filter(task =>
            (task.text || task.title).toLowerCase().includes(query)
        );
    }

    // Сортировка //
    const sorted = [...filtered].sort((a, b) => {
        if (sortOrder === 'new') return b.id - a.id;
        if (sortOrder === 'old') return a.id - b.id;
        if (sortOrder === 'az') return (a.text || a.title).localeCompare(b.text || b.title);
        if (sortOrder === 'za') return (b.text || b.title).localeCompare(a.text || a.title);
        return 0;
    });

    sorted.forEach(task => {
        const card = renderTask(task);
        container.append(card);
    });

    updateCounters();
}

// Добавление новой задачи //
function addTask() {
    const text = inputField.value.trim();
    if (text === '' || text.length < 3) {
        inputField.classList.add('input--error');
        return;
    }
    inputField.classList.remove('input--error');

    const newTask = {
        id: Date.now(),
        text: text,
        title: text,
        done: false,
        date: formatDate(new Date())
    };
    tasksApp.push(newTask);
    inputField.value = '';
    renderAll();
    saveTask();
}

// Обработчики событий //
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask();
    });
}

if (addButton) {
    addButton.addEventListener('click', addTask);
}

if (sortSelect) {
    sortSelect.addEventListener('change', () => {
        const val = sortSelect.value;
        if (val.includes('новые')) sortOrder = 'new';
        else if (val.includes('старые')) sortOrder = 'old';
        else if (val.includes('A→Z')) sortOrder = 'az';
        else if (val.includes('Z→A')) sortOrder = 'za';
        renderAll();
    });
}

if (searchInput) {
    searchInput.addEventListener('input', renderAll);
}

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('tabs_item--active'));
        btn.classList.add('tabs_item--active');

        const text = btn.textContent;
        if (text.includes('Активные')) currentFilter = 'active';
        else if (text.includes('Завершенные')) currentFilter = 'done';
        else currentFilter = 'all';

        renderAll();
    });
});

if (clearButton) {
    clearButton.addEventListener('click', () => {
        tasksApp = tasksApp.filter(task => !task.done);
        saveTask();
        renderAll();
    });
}

// Дополнительные функции //
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getClosestTask(tasksArr) {
  let closestTask = null;
  let closestTime = Infinity;
  const today = new Date();
  for (const task of tasksArr) {
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

// Первичный рендер //
renderAll();

});