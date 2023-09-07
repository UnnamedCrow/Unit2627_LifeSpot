
function inputParseFunction() {

    return document.getElementsByTagName('input')[0].value.toLowerCase();
}

function filterContent() {
    // Сохраняем введённое пользователем значение и приводим его к нижнему регистру
    
    // Находим и сохраняем коллекцию блоков с видео
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i < elements.length; i++) {
        // Помещаем в переменную описание видео
        let videoDescription = elements[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        //console.log(videoDescription);

        // Сравниваем описание с вводимым текстом
        if (!videoDescription.includes(inputParseFunction())) {
            // Скрываем ненужные элементы
            elements[i].style.display = 'none';
        }
        else {
            // Нужные элементы оставляем видимыми
            elements[i].style.display = 'inline-block';
        }
    }
}


// создадим объект Map для хранения сессии
let session = new Map();

function checkAge() {
    // Запросим возраст пользователя и сохраним
    session.set("age", prompt("Enter your age"));
    // Проверка на возраст и сохранение сессии
    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("Glad to see you in LifeSpot! " + '\n' + "Current time: " + startDate);
        session.set("startDate", startDate)
    }
    else {
        alert("Get out!");
        window.location.href = "http://www.google.com"
    }
}
function handleSession() {
   
    // Сохраним время начала сессии
    session.set("startDate", new Date().toLocaleString())
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent); 
}

// Логирование сессии (объявлено через expression)
let sessionLog = function logSession() {
    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}

