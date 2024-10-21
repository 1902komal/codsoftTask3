
let display = document.getElementById('display');
let calculation = '';

function clearDisplay() {
    display.value = '';
    calculation = '';
}

function deleteChar() {
    calculation = calculation.slice(0, -1);
    display.value = calculation;
}

function calculate(value) {
    if (value === '=') {
        try {
            const result = eval(calculation);
            display.value = result;
            calculation = result.toString();
        } catch (error) {
            display.value = 'Error';
            calculation = '';
        }
    } else {
        calculation += value;
        display.value = calculation;
    }
}


