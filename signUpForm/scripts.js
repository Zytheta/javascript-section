// Global Variables

const password = document.getElementById('password');
const passwordCheck = document.getElementById('password-check');
const passwordSign = document.getElementById('password-sign');

// Functions

// Function to validate password complexity and length
function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const passwordCheck = document.getElementById('password-check').value;
    const passwordField = document.getElementById('password');
    const passwordCheckField = document.getElementById('password-check');
    const passwordSign = document.getElementById('password-sign'); // Assuming a message element for password mismatch
  
    const isValidLengthAndComplexity = (password.length >= 7 && /[0-9]/.test(password));
  
    if (!isValidLengthAndComplexity || password !== passwordCheck) {
      passwordField.classList.add('invalid-input');
      passwordCheckField.classList.add('invalid-input');
      passwordSign.textContent = "Password mismatch or doesn't meet requirements.";
      return false;
    } else {
      passwordField.classList.remove('invalid-input');
      passwordCheckField.classList.remove('invalid-input');
      passwordSign.textContent = "Acceptable password."; // Clear any previous error message
      return true;
    }
}

function createAccount(e) {
    e.preventDefault(); // Prevents default form submission
  
    // Form Input
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const password = document.getElementById('password').value;
    const passwordCheck = document.getElementById('password-check').value;
  
      // Password verification
    const passwordsMatch = checkPasswordMatch();
    console.log(passwordsMatch);

    // Password verification
    const submitButton = document.getElementById('submit');
    if (passwordsMatch === false) {
        alert('Invalid password.');
        return; // Stops further execution
      }

    // User data
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      passwordCheck: passwordCheck
    };
  
    // Send userData to httpbin.org/post for inspection
    fetch('https://httpbin.org/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('POST request successful:', data);
      alert('POST request sent! Check console for details.');
    })
    .catch(error => {
      console.error('There was a problem with the POST request:', error);
    });
}

// DOM Events

document.getElementById('submit').addEventListener('click', createAccount);

password.addEventListener('input', checkPasswordMatch);
passwordCheck.addEventListener('input', checkPasswordMatch);

// Data Management
