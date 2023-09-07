
function inputParseFunction() {

    return document.getElementsByTagName('input')[0].value.toLowerCase();
}

function filterContent() {
    // ��������� �������� ������������� �������� � �������� ��� � ������� ��������
    
    // ������� � ��������� ��������� ������ � �����
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i < elements.length; i++) {
        // �������� � ���������� �������� �����
        let videoDescription = elements[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        //console.log(videoDescription);

        // ���������� �������� � �������� �������
        if (!videoDescription.includes(inputParseFunction())) {
            // �������� �������� ��������
            elements[i].style.display = 'none';
        }
        else {
            // ������ �������� ��������� ��������
            elements[i].style.display = 'inline-block';
        }
    }
}


// �������� ������ Map ��� �������� ������
let session = new Map();

function checkAge() {
    // �������� ������� ������������ � ��������
    session.set("age", prompt("Enter your age"));
    // �������� �� ������� � ���������� ������
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
   
    // �������� ����� ������ ������
    session.set("startDate", new Date().toLocaleString())
    // �������� UserAgent
    session.set("userAgent", window.navigator.userAgent); 
}

// ����������� ������ (��������� ����� expression)
let sessionLog = function logSession() {
    // ����� � �������
    for (let result of session) {
        console.log(result)
    }
}

