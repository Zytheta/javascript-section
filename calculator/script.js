// Global variables

// Global DOM Addresses

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');

const operatorBox1 = document.getElementById('operator-box1');
const operatorBox2 = document.getElementById('operator-box2');

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
const neg = document.getElementById('neg');

// Functions

function addValue(number) { // Adds value to input1
    if (input1.value === '0') {
        input1.value = '';
    }
    input1.value += number.toString();
}

function checkNumber() { // Checking to see if there is more than one decimal or negative symbol
    const value = input1.value;
    const decimalCount = (value.match(/[.]/g) || []).length;
    const negCount = (value.match(/[-]/g) || []).length;

    if (decimalCount > 1 || negCount > 1) {
        if (decimalCount > 1) {
            alert("You can use one decimal in this calculator.");
            input1.value = value.slice(0, -1); // Removes decimal or negative symbol
        } else {
            alert("You can only use one negative symbol in this calculator.  Use an operator after putting in a number.")
            input1.value = value.slice(0, -1); // Removes decimal or negative symbol
        }
    }
}

function negEvent(event) { // Adds a negative symbol in front of the number
    const input1Value = input1.value

    if (event.type === 'click' ||
    (event.type === 'keydown' && event.key === '-')) {
        if (input1Value.charAt(0) === '-') {
            input1.value = input1Value.substring(1); // Removes the - if there is one
        } else {
            input1.value = '-' + input1Value;
        }
    }
}

function focusInput() { // Clears and focuses input1
    input1.value = '';
    input1.focus();
}

function checkZero() {
    if (input1.value === "") {
        input1.value = 0;
        console.log("No number entered.");
    }
    console.log(`${input1.value}`);
}

function equalsEvent(event) { 
    let sumTotal = 0;
    let product = 1;
    let num1 = null;
    let num2 = null;
    
    if (event.type === 'click' || 
    (event.type === 'keydown' && (event.key === 'Enter' || event.key === '='))) {
        if (input2.textContent === "") {
            checkZero();
            num1 = parseFloat(input1.value);
            input2.textContent = `${num1}`;
            if (operatorBox1.textContent === '=') {
                input3.textContent = `${num1}`;
                operatorBox2.textContent = '=';
                focusInput();
                return
                }
            operatorBox1.textContent = '=';
            focusInput();
            return
            }
        if (input2.textContent !== "" && operatorBox1.textContent === '=') {
            input3.textContent = input2.textContent;
            operatorBox2.textContent = operatorBox1.textContent;
            checkZero();
            num1 = parseFloat(input1.value);
            input2.textContent = `${num1}`;
            operatorBox1.textContent = '=';
            focusInput();
            return
            }
        if (operatorBox1.textContent === '+') {
            checkZero();
            num1 = parseFloat(input1.value);
            num2 = parseFloat(input2.textContent);
            console.log(`Num1 is ${num1} and Num2 is ${num2}.`)
            sumTotal = num1 + num2;
            input3.textContent = `${num2} + ${num1}`;
            operatorBox2.textContent = '=';
            input2.textContent = `${sumTotal}`;
            operatorBox1.textContent = '=';
            focusInput();
            return
        }
        if (operatorBox1.textContent === '-') {
            checkZero();            
            num1 = parseFloat(input1.value);
            num2 = parseFloat(input2.textContent);
            console.log(`Num1 is ${num2} and Num2 is ${num1}.`);
            sumTotal = num2 - num1;
            input3.textContent = `${num2} - ${num1}`;
            operatorBox2.textContent = '=';
            input2.textContent = `${sumTotal}`;
            operatorBox1.textContent = '=';
            focusInput();
            return
        }
        if (operatorBox1.textContent === '*') {
            checkZero();
            num1 = parseFloat(input1.value);
            num2 = parseFloat(input2.textContent);
            console.log(`Num1 is ${num2} and Num2 is ${num1}.`);
            if (num1 === 0 || num2 === 0) {
                product = 0;
                input3.textContent = `${num2} * ${num1}`;
                operatorBox2.textContent = '=';
                input2.textContent = `${product}`;
                operatorBox1.textContent = '=';
                focusInput();
                return    
            } else {
                product = num1 * num2;
                input3.textContent = `${num2} * ${num1}`;
                operatorBox2.textContent = '=';
                input2.textContent = `${product}`;
                operatorBox1.textContent = '=';
                focusInput();
                return    
            }
        }
        if (operatorBox1.textContent === '\u00F7') {
            checkZero();
            num1 = parseFloat(input1.value);
            num2 = parseFloat(input2.textContent);
            console.log(`Num1 is ${num2} and Num2 is ${num1}.`);
            if (num1 === 0 || num2 === 0) {
                product = 'Undefined';
                input3.textContent = `${num2} \u00F7 ${num1}`;
                operatorBox2.textContent = '=';
                input2.textContent = `${product}`;
                operatorBox1.textContent = '=';
                focusInput();
                return    
            } else {
                product = num2 / num1;
                input3.textContent = `${num2} \u00F7 ${num1}`;
                operatorBox2.textContent = '=';
                input2.textContent = `${product}`;
                operatorBox1.textContent = '=';
                focusInput();
                return    
            }
        }
    } else if (event.type === 'click' || (event.type === 'keydown' && event.key === '+')) {
        if (operatorBox1.textContent === '+') {
            checkZero();
            num1 = parseFloat(input1.value);
            console.log(num1);
            num2 = parseFloat(input2.textContent);
            console.log(`Num1 is ${num1} and Num2 is ${num2}.`);
            sumTotal = num2 + num1;
            input3.textContent = `${num2} + ${num1}`;
            operatorBox2.textContent = '=';
            input2.textContent = `${sumTotal}`;
            operatorBox1.textContent = '=';
            focusInput();
            return
        }
            else {
                return    
            }
    } else if (event.type === 'click') {
        if (operatorBox1.textContent === '-') {
            checkZero();            
            num1 = parseFloat(input1.value);
            num2 = parseFloat(input2.textContent);
            console.log(`Num1 is ${num2} and Num2 is ${num1}.`);
            sumTotal = num2 - num1;
            input3.textContent = `${num2} - ${num1}`;
            operatorBox2.textContent = '=';
            input2.textContent = `${sumTotal}`;
            operatorBox1.textContent = '=';
            focusInput();
            return
        }
    } else if (event .type === 'click' || (event.type === 'keydown' && event.key === '*')) {
        if (operatorBox1.textContent === '*') {
            checkZero();
            num1 = parseFloat(input1.value);
            num2 = parseFloat(input2.textContent);
            console.log(`Num1 is ${num2} and Num2 is ${num1}.`);
            if (num1 === 0 || num2 === 0) {
                product = 0;
                input3.textContent = `${num2} * ${num1}`;
                operatorBox2.textContent = '=';
                input2.textContent = `${product}`;
                operatorBox1.textContent = '=';
                focusInput();
                return    
            } else {
                product = num1 * num2;
                input3.textContent = `${num2} * ${num1}`;
                operatorBox2.textContent = '=';
                input2.textContent = `${product}`;
                operatorBox1.textContent = '=';
                focusInput();
                return    
            }
        }
    } else if (event .type === 'click' || (event.type === 'keydown' && event.key === '/')) {
        if (operatorBox1.textContent === '\u00F7') {
            checkZero();
            num1 = parseFloat(input1.value);
            num2 = parseFloat(input2.textContent);
            console.log(`Num1 is ${num2} and Num2 is ${num1}.`);
            if (num1 === 0 || num2 === 0) {
                product = 'Undefined';
                input3.textContent = `${num2} \u00F7 ${num1}`;
                operatorBox2.textContent = '=';
                input2.textContent = `${product}`;
                operatorBox1.textContent = '=';
                focusInput();
                return    
            } else {
                product = num2 / num1;
                input3.textContent = `${num2} \u00F7 ${num1}`;
                operatorBox2.textContent = '=';
                input2.textContent = `${product}`;
                operatorBox1.textContent = '=';
                focusInput();
                return    
            }
        }
    }
}

function sumEvent(event) {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === '+')) {
        if (operatorBox1.textContent === "=") {
            operatorBox1.textContent = '+';
            equalsEvent(event);
        } else if (operatorBox1.textContent === "") {
            operatorBox1.textContent = "+";
            input2.textContent = parseFloat(input1.value);
            focusInput();
            return
            } 
    }
}

function subtractEvent(event) {
    if (event.type === 'click') {
        if (operatorBox1.textContent === '') {
            operatorBox1.textContent = '-';
            input2.textContent = parseFloat(input1.value);
            focusInput();
            return
        } else if (operatorBox1.textContent === "=") {
            operatorBox1.textContent = '-';
            equalsEvent(event);
        }
    }
}

function multiplyEvent(event) {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === '*')) {
        if (operatorBox1.textContent === '') {
            operatorBox1.textContent = "*";
            input2.textContent = parseFloat(input1.value);
            focusInput();
            return
        } else if (operatorBox1.textContent === "=") {
            operatorBox1.textContent = '*';
            equalsEvent(event);
        }
    }
}

function divideEvent(event) {
    if (event.type === 'click' || (event.type === 'keydown' && event.key === '/')) {
        if (operatorBox1.textContent === '') {
            operatorBox1.textContent = "\u00F7";
            input2.textContent = parseFloat(input1.value);
            focusInput();
            return
        } else if (operatorBox1.textContent === "=") {
            operatorBox1.textContent = '\u00F7';
            equalsEvent(event);
        }
    }
}

// Listener Events

window.onload = function() { // Focuses input on load
    input1.focus();
}

document.getElementById('input1').addEventListener('keydown', function(e) { // Limits manual typing into the input 
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    '.', 'Enter', 'Backspace', 'F5']

    if (event.ctrlKey) {
        // Allow Ctrl key combinations (Ctrl + V, Ctrl + other actions)
        return;
    }
    if (event.key.startsWith('Arrow')) {
        // Allow arrow keys
        return;
    }
    if (!allowedKeys.includes(event.key)) {
        event.preventDefault();
    }
    checkNumber();
    if (input1.value === '0') {
        input1.value = '';
    }
});

allClear.addEventListener('click', function(e) { // Clears input field
    input1.value = '';
    input2.textContent = '';
    operatorBox1.textContent = '';
    input3.textContent = '';
    operatorBox2.textContent = '';
    input1.focus();
});

document.addEventListener('keydown', equalsEvent);
equals.addEventListener('click', equalsEvent);

document.addEventListener('keydown', sumEvent);
sum.addEventListener('click', sumEvent);

document.addEventListener('keydown', negEvent);
neg.addEventListener('click', negEvent);

subtract.addEventListener('click', subtractEvent);

document.addEventListener('keydown', multiplyEvent);
multiply.addEventListener('click', multiplyEvent);

document.addEventListener('keydown', divideEvent);
divide.addEventListener('click', divideEvent);
