


let contentFilter = function filterContent() {
    // ��������� �������� ������������� �������� � �������� ��� � ������� ��������
    let inputText = document.getElementsByTagName('input')[0].value.toLowerCase();
    // ������� � ��������� ��������� ������ � �����
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i < elements.length; i++) {
        // �������� � ���������� �������� �����
        let videoDescription = elements[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        console.log(videoDescription);

        // ���������� �������� � �������� �������
        if (!videoDescription.includes(inputText)) {
            // �������� �������� ��������
            elements[i].style.display = 'none';
        }
        else {
            // ������ �������� ��������� ��������
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