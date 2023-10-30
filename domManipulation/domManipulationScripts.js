const container = document.querySelector('#container');

const content = document.createElement('div');                     
content.classList.add('content');
content.textContent = "This is the glorious text-content";
container.appendChild(content);

const p = document.createElement('p');
p.classList.add('redP');
p.style.color = 'red';
p.textContent = "Hey I'm red!";
content.appendChild(p);

const h3 = document.createElement('h3');
h3.classList.add('blueH3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue H3!";
p.appendChild(h3);

const colorBox = document.createElement('div');
colorBox.style.backgroundColor = 'pink';
colorBox.style.border = '10px solid black';
colorBox.style.color = 'black';
const colorBoxH1 = document.createElement('h1');
colorBoxH1.textContent = "I'm in a div.";
const colorBoxP = document.createElement('p');
colorBoxP.textContent = "ME TOO!";
h3.appendChild(colorBox);
colorBox.appendChild(colorBoxH1);
colorBoxH1.appendChild(colorBoxP);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("The smelliest fart");
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});  

const button = document.querySelector('#button');
button.addEventListener('click', () => {
  alert("I told you not to click!");
});

function alertFunction() {
    alert("I'm calling the police!");
}
//warning.onclick = alertFunction;  
warning.addEventListener('click', alertFunction);

