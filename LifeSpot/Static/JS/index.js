
function userInput() {

    return document.getElementsByTagName('input')[0].value.toLowerCase();
}

function filterContent(userInpu) {
    // Сохраняем введённое пользователем значение и приводим его к нижнему регистру
    
    // Находим и сохраняем коллекцию блоков с видео
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i < elements.length; i++) {
        // Помещаем в переменную описание видео
        let videoDescription = elements[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        console.log(videoDescription);

        // Сравниваем описание с вводимым текстом
        if (!videoDescription.includes(userInpu())) {
            // Скрываем ненужные элементы
            elements[i].style.display = 'none';
        }
        else {
            // Нужные элементы оставляем видимыми
            elements[i].style.display = 'inline-block';
        }
    }
}

// Обработка сессии (объявлено через declaration)
function handleSession() {
    // создадим объект Map для хранения сессии
    let session = new Map();
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)

    // Запросим возраст пользователя и тоже сохраним
    session.set("age", prompt("Enter your age"))

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

    // Теперь мы возвращаем объект сессии
    return session;
}

// Логирование сессии (объявлено через expression)
let sessionLog = function logSession(session) {
    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}