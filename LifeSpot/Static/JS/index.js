

/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */
function handleSession(logger, checker) {


    // Проверка начала сессии, если новый вход - сохраняем
    if (window.sessionStorage.getItem("startDate") == null) {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    }

    // Проверяем userAgent, если новый вход - сохраняем
    if (window.sessionStorage.getItem("userAgen") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }

    // Проверяем возраст, если новый вход сохраняем и проверяем
    if (window.sessionStorage.getItem("userAge") == null) {
        let inputAge = prompt("Введи свой возраст");
        window.sessionStorage.setItem("userAge", inputAge);
        checker(true);
    }
    else {
        checker(false);
    }
    logger();
}

/*
* Проверка возраста пользователя
* 
* */
let checker = function (newVisit) {


    if (window.sessionStorage.getItem("userAge") >= 18) {

        // Если пользователь уже заходил на сайт, приветствие ему не показываем
        if (newVisit) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        }

    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. ВыL будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}


/*
* Вывод данных сессии в консоль
* 
* */
let logger = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"));
    console.log('Данные клиента: ' + window.sessionStorage.getItem("userAgent"));
    console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"));
}

/*
* Функция для фильтраци контента
* Будет вызываться благодаря атрибуту oninput на index.html
* 
* */

function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}




