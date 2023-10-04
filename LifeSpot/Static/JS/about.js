/*
* �������� ���������������� ����
* � �������� ����� � ������
* 
* */
function getReview() {
    // �������� ������
    let review = {}

    // �������� �������� �����
    review["userName"] = prompt("��� ��� ����� ?")
    if (review["userName"] == null) {
        return
    }

    // �������� ����� ������
    review["comment"] = prompt("�������� ���� �����")
    if (review["comment"] == null) {
        return
    }

    // �������� ������� �����
    review["date"] = new Date().toLocaleString()

    let enableLike = confirm("������, ���� ���� ����������� ����� �������?");

    if (enableLike) {
        let comment = Object.create(review);
        comment.rate = 0;
        // ������� �� ��������
        writeReview(comment);
    }
    else {
        // ������� �� ��������
        writeReview(review);
    }



}
/*
* ������� ����� �� ��������
    * 
* */
const writeReview = review => {
    let commentRate = '';
    if (review.hasOwnProperty('rate')) {
        commentRate += '        <b style="color:chocolate">�������:</b>    ' + review.rate;
    }
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']} ${commentRate}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}
