/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */
// Создадим функцию-конструктор для создания комментария
function Comment() {

    // Запросим имя автора
    this.author = prompt("Enter your name");
    if (this.author == null) {
        this.empty = true;
        return;
    }

    // Запросим текст коментария
    this.text = prompt("Enter your comment");
    if (this.text == null) {
        this.empty = true;
        return;
    }

    // Сохраним дату ввода
    this.date = new Date().toLocaleString();
}

function getReview() {

    let comment = new Comment();

    // Проверяем ввёл ли пользователь данные
    if (comment.empty) {
        return;
    }
    let enableLike = confirm("Do you want to have some likes?");

    if (enableLike) {
        let review = Object.create(comment);
        review.rate = 0;
        // Добавим на страницу
        writeReview(review);
    }
    else {
        // Добавим на страницу
        writeReview(comment);
    }



}
/*
* Запишем отзыв на страницу
    * 
* */
const writeReview = review => {
    // Генерируем Id для кнопки

    let likeId = Math.random();
    let dislikeId = Math.random();
    let commentRate = '';
    if (review.hasOwnProperty('rate')) {
        commentRate += '<i>' + review.rate + ' <button id="' + likeId + '"style= "border:none" onclick= "addLike(this.id)">' + ' ❤️</button> <button id="' + dislikeId +'" style = "border: none" onclick="disLike(this.id)"> 💔 </button></i>';
    }
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['author']}</b>  ${review['date']} ${commentRate}</i></p>` +
        `<p>${review['text']}</p>` +
        '</div>';
}

 // Функция добавления лайка
function addLike(id) {

    // Поиск нужного элемента по id
    let element = document.getElementById(id).parentNode;

    // Получаем текст из элемента
    let array = element.innerHTML.split(' ');

    // Получим значение счётчика из массива
    let counter = parseInt(array[0], 10);

    counter += 1;
    
    array[0] = `${counter}`;

    element.innerHTML = array.join(' ');

}
// Функция дизлайка
function disLike(id) {

    // Поиск нужного элемента по id
    let element = document.getElementById(id).parentNode;

    // Получаем текст из элемента
    let array = element.innerHTML.split(' ');

    // Получим значение счётчика из массива
    let counter = parseInt(array[0], 10);

    counter -= 1;

    array[0] = `${counter}`;

    element.innerHTML = array.join(' ');

}