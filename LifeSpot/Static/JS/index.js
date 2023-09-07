


let contentFilter = function filterContent() {
    // Сохраняем введённое пользователем значение и приводим его к нижнему регистру
    let inputText = document.getElementsByTagName('input')[0].value.toLowerCase();
    // Находим и сохраняем коллекцию блоков с видео
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i < elements.length; i++) {
        // Помещаем в переменную описание видео
        let videoDescription = elements[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        console.log(videoDescription);

        // Сравниваем описание с вводимым текстом
        if (!videoDescription.includes(inputText)) {
            // Скрываем ненужные элементы
            elements[i].style.display = 'none';
        }
        else {
            // Нужные элементы оставляем видимыми
            elements[i].style.display = 'inline-block';
        }
    }
}

let sessionHendler = function handleSession() {
    let currentDate = Date().toLocaleString();
    let age = prompt("Enter your age");
    if (age >= 18) {
        alert("Glad to see you on LifeSpot! Today " + currentDate);
    }
    else {
        alert("Bye!");
        window.location.href = "http://google.com";
    }
}