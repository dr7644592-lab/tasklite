const hours = now.getHours();
const minutes = now.getMinutes;
const seconds = now.getSeconds;
console.log(`${hours}:${minutes}:${seconds}`);

console.log(now.toLocaleDateString());

// Определение дня недели и времени суток

const now = new Date();

const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
];

const dayName = Days[now.getDay()];

const hours = now.getHours();
let timeOfDay;
if(hours >= 0 && hours < 6){
    timeOfDay = "Ночь";
}else if(hours < 12 ){
    timeOfDay = "Утро";    
}else if(hourse < 18){
    timeOfDay = "День";
}else{
    timeOfDay = "Вечер";
}

console.log(`Сегодня ${dayName}, сейчас ${timeOfDay}`);