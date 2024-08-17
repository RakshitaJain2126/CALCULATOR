function clearInput() {
    document.querySelector('.calculate-numbers').value = '0';
}

function deleteLastCharacter() {
    const input = document.querySelector('.calculate-numbers');
    input.value = input.value.slice(0, -1);
}

function appendNumber(number) {
    const input = document.querySelector('.calculate-numbers');
    if (input.value === '0') {
        input.value = number;
    } else {
        input.value += number;
    }
}

function appendOperator(operator) {
    const input = document.querySelector('.calculate-numbers');
    input.value += operator;
}
function appendDecimal() {
    const input = document.querySelector('.calculate-numbers');
    if (!input.value.includes('.')) {
        input.value += '.';
    }
}

function calculate() {
    const input = document.querySelector('.calculate-numbers');
    const result = eval(input.value);
    input.value = result;
}
