

const saveInput = function() {
    // ��������� ������� ��������
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();
    // ������� ������ � ����� ��������
    alert('Last input: ' + this.lastInput + '\n' + 'Current input: ' + currentInput);
    // ��������� ����� �������� ������ �������
    this.lastInput = currentInput;
}