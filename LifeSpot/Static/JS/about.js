function getReview() {

    let review = {};

    // �������� ��� ������������
    review["userName"] = prompt("Enter your name");
    // �������� ����� ������������
    review["userReview"] = prompt("Enter your review");
    // �������� ���� ���������� ������
    review["Date"] = new Date().toLocaleString();

    // ������� �����
    writeReview(review);
}

function writeReview(userReview) {
    document.getElementsByClassName("reviews")[0].innerHTML +=  '<div class="review-text">' +
                                                                `<p> <b>${userReview["userName"]} </b>     ${userReview["Date"]}</p>` +
                                                                `<p> ${userReview["userReview"]}</p>` + 
                                                                '</div>';
}