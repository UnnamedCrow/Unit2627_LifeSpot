

/*
* ���������� ������ ������ ����� ��� ������ ������������ �� ��������
* 
* */
function handleSession(logger, checker) {


    // �������� ������ ������, ���� ����� ���� - ���������
    if (window.sessionStorage.getItem("startDate") == null) {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    }

    // ��������� userAgent, ���� ����� ���� - ���������
    if (window.sessionStorage.getItem("userAgen") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }

    // ��������� �������, ���� ����� ���� ��������� � ���������
    if (window.sessionStorage.getItem("userAge") == null) {
        let inputAge = prompt("����� ���� �������");
        window.sessionStorage.setItem("userAge", inputAge);
        checker(true);
    }
    else {
        checker(false);
    }
    logger();
}

/*
* �������� �������� ������������
* 
* */
let checker = function (newVisit) {


    if (window.sessionStorage.getItem("userAge") >= 18) {

        // ���� ������������ ��� ������� �� ����, ����������� ��� �� ����������
        if (newVisit) {
            alert("������������ �� LifeSpot! " + '\n' + "������� �����: " + new Date().toLocaleString());
        }

    }
    else {
        alert("���� ���������� �� ������������� ��� ��� ������ 18 ���. ��L ������ ��������������");
        window.location.href = "http://www.google.com"
    }
}


/*
* ����� ������ ������ � �������
* 
* */
let logger = function () {
    console.log('������ ������: ' + window.sessionStorage.getItem("startDate"));
    console.log('������ �������: ' + window.sessionStorage.getItem("userAgent"));
    console.log('������� ������������: ' + window.sessionStorage.getItem("userAge"));
}

/*
* ������� ��� ��������� ��������
* ����� ���������� ��������� �������� oninput �� index.html
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




