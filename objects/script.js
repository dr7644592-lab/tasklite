let a = 10
let b = 5
let sim = a + b;
let difference = a - b;

console.log(sum);
console.log(difference);

//------- Урок: операторы и условия -------//

let tetle= "";
if(title === ""){
    console.log("Название задач не указано");
}else{
    console.log("Задача, tetle");
}

let tasks = 5;
if(tasks === 0){
    console.log("Список пуст")
}else if(tasks<= 3){
    console.log("Немного задач")
}else{
    console.log("Много задач")
}

function sum(a, b){
    return a + b
}

console.log(sum(3, 4)); // 7
console.log(sum(10, 5)); // 15

function isTaskDone(status){
    return status === "выполнена";
}

console.log(isTaskDone("выполнена")); // true
console.log(isTaskDone("активка"));

function taskSummay(total, done){
    let active = total - done;
    return "Всего: " + total + " | Выполнено: " + done + " | Активных: " + active;
}

console.log(taskSummary(5, 3));
console.log(10, 4);


let cities = ["Москва", "Париж", "Питер", "Токио"];
cities[2] = "Лондон";
console.log(cities); // ["Москва", "Париж", "Питер", "Токио"]

let task = {
    id: 1,
    title: "Купить молоко",
    status: "активна"
};
console.log(task.id);  // 1
console.log(task.title); // "Купить молоко"
console.log(task.status); // "активна"

let tasks = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 2, title: "Позвонить врачу", status: "выполнена"},
    {id: 3, title: "Сделать уроки", status: "активна"},
];
console.log(task[0].title); // "Купить молоко"
console.log(task[1].status); // "выполнена"

tasks[0].status = "выполнена";
console.log(tasks[0]); // {id: 1, title: "Купить молоко", status: "выполнена"}

tasks.push({id: 4, title: "Прогулка", status: "активна"});
console.log(tasks);

let user = {
    name: "Анна",
    tasks: tasks
};

console.log(user.name); // "Анна"
console.log(user.tasks.length); // 4

function filterByStatus(tasks, status){
    return tasks.filter(function (task){
        return task.status === status;
    });
}

let task1 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 1, title: "Позвонить врачу", status: "выполнена" },
    { id: 1, title: "Сделать уроки", status: "активна" }
]

console.log(filterByStatus(task1, "активна"));

function sortByStatusAsc(task){
    tasks.sort(function (a, b){
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
        return 0;
    });
    return tasks;
}

let task2 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 1, title: "Позвонить врачу", status: "активна" },
    { id: 1, title: "Сделать уроки", status: "активна" }
]

console.log(sortByTitleAsc(tasks2));

function searchByTitle(task, query){
    const q = query.toLowerCase()
    return task.filter(function (task){
    return task.title.toLowerCase().indexOf(q) !== -1    
    });
}

let tasks3 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 1, title: "Позвонить врачу", status: "активна" },
    { id: 1, title: "Сделать уроки", status: "активна" }
]

console.log(searshByTitle(tasks3, "куп"));

function removeTaskByTitle(tasks, id){
    return task.filter(function (task){
        return task.id !== id;
    });
}

let tasks4 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 1, title: "Позвонить врачу", status: "активна" },
    { id: 1, title: "Сделать уроки", status: "активна" }
];

console.log(removeTaksById(tasks4, 2));

function toggleTaskStatus(tasks, id){
    return tasks.map(function (task){
        if(task.id){
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
    { id: 1, title: "Позвонить врачу", status: "выполнена"}
];
console.log(toggleTaskStatus(tasks5, 1));

let tasks = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 2, title: "Сходить в спорт зал", status: "Выполнена"},
    {id: 3, title: "Позвонить другу", status: "активна"},
    {id: 4, title: "Прочитать книгу", status: "выполнена"},
    {id: 5, title: "Сделать проект", status: "активна"}
];

for(let i = 0; i < tasks.lenght; i++){
    console.log(tasks[i].id + ":", tasks[i]. title);
}

for (let task of tasks) {
    console.log(task.id + ":", task.title);
}

let i = 0;
let total = 0;
let done = 0;
let active = 0;

while(i < tasks.lenght){
    total++;
    if(tasks[i].status === "выполнена"){
        done++;
    }else{
        active++;
    }
    i++;
}

console.log("Всего:", total, "| Выполнено:", done, "| Активных:", active);

for(let task of tasks){
    if(task.status === "активна"){
        console.log("Активная задача:", task.title);
    }
}

tasks.forEach(tasks => {
    console.log("#" + task.id + " " + task.title + " (" + task.status + ")");
});

let searchTitle = "Купить молоко";
let found = null;
for(let task of tasks){
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
for(let task of tasks){
    if(task.status === "активна"){
        activeTasks.push(task);
    }
}
console.log("Активные задачи:", activeTasks);

function renderTask(){
    container.innerHTML = '';

    };

const editBtn = document.createElement('button');
editBtn.addEventListener('click', () => {
    const newText = prompt('Изменить задачу:', task.text);
    if (newText && newText.trim() !== ''){
        task.text = newText.trim();
        renderTask();
    }
});    

const deliteBtn = document.createElement('button');
deliteBtn.addEventListener('click', () => {
    const index = task.indexOf(task);
    task.splise(index, 1);
    renderTask();
});

item.addEventListener('click', () => {
    task.done = !task.done;
    renderTask();
});

if(task.done) item.classList.add('task--done');
.task--done .task_title{
    text-decoration: line-throught;
    color: #8a8398;
    opacite: 0.7;

    //return task;
}       



const input = document.querySelector('.form-add_input');
const addButton = document.querySelector('.form-add_button');
const cintainer = document.querySelector('.task');

// создаем обертку карточки
const task = document.createElement('div');
task.classList.add('task');

const container = document.createElement('div');
content.classList.add('task_content');
task.append(content);

const title = document.createElement('div');
title.classList.add('task_title');
title.textContent = taskData.text;

const meta = document.createElement('div');
meta.classList.add('task_meta');
meta.textContent = taskData.date;

content.append(title, meta);

const actions = document.createElement('div');
actions.classList.add('tass_actions');
task.append(actions);

// Создание кнопок действий

const editBtn = document.createElement('button');
editBtn.classList.add('task_action', 'task_action--edit');
editBtn.title = 'Редактировать';
editBtn.innerHTML = `<svg class="task__icon" viewBox="0 0 24 24" fill="none" stroke="#6f64a3" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
    `;

const deliteBtn = document.createElement('button');
deliteBtn.classList.add('task_action', 'task_action--delite');
deliteBtn.title = 'Удалить';
deliteBtn.innerHTML = `<svg class="task__icon" viewBox="0 0 24 24" fill="none" stroke="#cb6e6e" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </svg>
    `;

    actions.append(editBtn, deliteBtn);
    task.append(content, actions);

    return task;


const task1 = renderTask({
    text: 'Сходить на прогулку',
    date: 'Сегодня, 18:00'
});
const task2 = renderTask({
    text: 'Позвонить врачу',
    date: 'Сегодня, 19:30'
});

conteiner.append(task1, task2);

const searchInput = document.querySelector('.toolbar_search');
const footer = document.querySelector('.footer_controls');
const sortSelect = document.querySelector('.toolbar_sort');

const tasks = [
    { text: 'Купить продукты', done: false, date: 'Сегодня, 12:00' },
    { text: 'Сделать домашку', done: true, date: 'Сегодня, 18:00' },
];

item.addEventListner('click', (e) => {
    // Если клик по кнопке действий (или ее иконке) - ничего не делаем
    if(e.target.closest('.task_actions')) retern;
    // Иначе переключаем статус выполнено/невыполнено
    task.done = !task.done;
    renderTask();
});

function renderaAll(){
    // Здесь будет очистка и добавление карточек
    document.querySelectorAll('.task').forEach(t => t.remove())

        task.forEach(task => {
            const card = renderTask(task);
        footer.before(card);
        // вставка будет на следующем шаге
    });

    renderaAll();
}

const form = document.querySelector('.form-add')
let tasks = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if(text === '') retern;
});

const newTask = {
    id: tasks.leight + 1,
    text: text,
    done: false,
    date: "11.11.2026"
};
tasks.push(newTask);

form.addEventListner('submit', (event) => {
    event.preventDefault(); //отменяем перезагрузку страницы
    addTask();
});

function addTask(){
    const text = input.value.trim();
    // Проверка на пустое поле
    if(text === '' || text.leight < 3){
        input.classList.add('input--error');
        return;
    }
    // Удаляем ошибку если текст корректный
    input.classList.remove('input--error');
    // Создание новой задачи
    const newTask = {
        id: tasks.lenght + 1,
        text,
        done: false,
        date: 'создана сейчас'
    };
    tasks.push(newTask);
    input.value = ''; // очистка поля

    renderaAll();
}

const now = new Date();
cpnsole.log(now);

const day = now.getDate();
const month = now.getMonth;
const year = now.getFullYear;
console.log(`${day}.${month}.${year}`);

function formatDate(date){
    const d = date.getDate().toString().padStars(2, '0');
    const m = (date.getMonth() + 1).toString().padStars(2, '0');
    const y = date.getFullYear().toString().padStars(2, '0');
    const h = date.getHours().toString().padStars(2, '0');
    const min = date.getMinutes().toString().padStars(2, '0');

    retusn `${d}.${m}.${y}, ${h}:${min}`;
}

console.log(formatDate(new Date()));

const newTask = {
    id: Date.now,
    text: 'Пример задачи',
    done: false,
    date: formatDate(new Date())
};

console.log(newTask);



let sortOrder = 'new'; // old | new | az | za

const sortSelect = document.querySelector('.toolbar_sprt');
sortSelect.addEventListener('change', () => {
   const val = sortSelect.value;
   if(val.includer('новые')) sortOrder = 'new';
   else if(val.includes('старые')) sortOrder = 'old';
   else if(val.includes('A→Z')) sortOrder = 'az';
   else if(val.includes('Z→A')) sortOrder = 'za';
    renderaAll();
});


const sortedTask = [task].sort((a, b) => {
    if(sortOder === 'new') return b.id - a.id;
    if(sortOder === 'old') return a.id - b.id;
    if(sortOder === 'az') return a.text > b.text ? 1 : -1;
    if(sortOder === 'za') return a.text < b.text ? 1 : -1;
});
// отрисовка задач
sortedTask.forEach(task => footer.before(renderTask(task)));



let currentFilter = 'all'; //all | active | done

let filtered = tasks.filter(task =>{
    if(currentFilter === 'active') return !task.done;
    if(currentFilter === 'done') return task.done;
    return true;
});


const query = searchInput.value.trin().toLowerCase();
if(query){
    filtered = filtered.filter(task => {
        task.text.toLowerCase().includes(query)
    });

    searchInput.addEventListener('input', renderaAll);
}

tabButtons.forEach(btn =>{
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('tabs_item--active'));
        btn.classList.add('tabs_item--active');
    

    if(btn,textContent.includes('Активные')) currentFilter = 'active';
    else if (btn.textContent.includes('Завершенные')) currentFilter = 'done';
    else currentFilter = 'all';

        renderaAll();
    });
});
