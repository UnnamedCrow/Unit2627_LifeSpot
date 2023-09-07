function getReview() {

    let review = {};

    // получаем имя пользователя
    review["userName"] = prompt("Enter your name");
    // получаем отзыв пользователя
    review["userReview"] = prompt("Enter your review");
    // сохраним дату добавления отзыва
    review["Date"] = new Date().toLocaleString();

    // запишем отзыв
    writeReview(review);
}

function writeReview(userReview) {
    document.getElementsByClassName("reviews")[0].innerHTML +=  '<div class="review-text">' +
                                                                `<p> <b>${userReview["userName"]} </b>     ${userReview["Date"]}</p>` +
                                                                `<p> ${userReview["userReview"]}</p>` + 
                                                                '</div>';
}