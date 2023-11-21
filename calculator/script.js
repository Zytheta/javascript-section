// Global variables

// DOM Manipulations

const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const button0 = document.getElementById('0');

const allClear = document.getElementById('all-clear');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const subtract = document.getElementById('subtract');
const sum = document.getElementById('sum');
const equals = document.getElementById('equals');

// Functions

function addValue(number) { // Adds value to input
    const input1 = document.getElementById('input1');
    if (input1.value === '0') {
        input1.value = '';
    }
    input1.value += number.toString();
}

function checkNumber() { // Checking to see if there is more than one decimal
    const input1 = document.getElementById('input1');
    const value = input1.value;
    const decimalCount = (value.match(/\./g) || []).length;

    if (decimalCount > 1) {
        alert("You can use one decimal in this calculator.");
        input1.value = value.slice(0, -1); // Removes decimal
    }
}

function equalsEvent(event) { // Moves the values down an input level
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    if (event.type === 'click' || 
    (event.type === 'keydown' && (event.key === 'Enter' || event.key === '='))) {
        input3.textContent = input2.textContent;
        input2.textContent = input1.value;
        input1.value = '';
    }
}

function sumEvent(event) {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    let num1 = 0;
    let num2 = 0;

    if (event.type === 'click' || 
    (event.type === 'keydown' && event.key === '+')) {
        if (input1.value === '') {
            input1.value = '0';
            } if (input2.textContent !== 0) {
                num2 = parseFloat(input1.value);
                input3.textContent = `${num2} + ${num1}`
                input2.textContent = `${num2} + ${num1}`
            } else {
                num1 = parseFloat(input1.value);
                console.log(`The first part of the sum is ${num1}.`)
                input2.textContent = `${num2} + ${num1}`
            }
    }
}

// Listener Events

window.onload = function() { // Focuses input on load
    const input1 = document.getElementById('input1');
    input1.focus();
}

document.getElementById('input1').addEventListener('keydown', function(e) {  // Limits manual typing into the input
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    '.', 'Enter', 'Backspace', 'F5']

    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
    }
    if (input1.value === '0') {
        input1.value = '';
    }
});

allClear.addEventListener('click', function(e) { // Clears input field
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');

    input1.value = '';
    input2.textContent = '';
    input3.textContent = '';
    input1.focus();
});

/*document.addEventListener('keydown', equalsEvent);
equals.addEventListener('click', equalsEvent);
*/

document.addEventListener('keydown', sumEvent);
sum.addEventListener('click', sumEvent);