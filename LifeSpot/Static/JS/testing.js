

const saveInput = function() {
    // Сохраняем текущее значение
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();
    // Выводим старое и новое значения
    alert('Last input: ' + this.lastInput + '\n' + 'Current input: ' + currentInput);
    // Сохраняем новое значение вместо старого
    this.lastInput = currentInput;
}