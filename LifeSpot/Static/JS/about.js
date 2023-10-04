/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */
function getReview() {
    // Создадим объект
    let review = {}

    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?")
    if (review["userName"] == null) {
        return
    }

    // Сохраним текст отзыва
    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }

    // Сохраним текущее время
    review["date"] = new Date().toLocaleString()

    let enableLike = confirm("Хочешь, чтоб твой комментарий могли оценить?");

    if (enableLike) {
        let comment = Object.create(review);
        comment.rate = 0;
        // Добавим на страницу
        writeReview(comment);
    }
    else {
        // Добавим на страницу
        writeReview(review);
    }



}
/*
* Запишем отзыв на страницу
    * 
* */
const writeReview = review => {
    let commentRate = '';
    if (review.hasOwnProperty('rate')) {
        commentRate += '        <b style="color:chocolate">Рейтинг:</b>    ' + review.rate;
    }
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']} ${commentRate}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}
