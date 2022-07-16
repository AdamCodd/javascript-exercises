let content = document.querySelector('.content');
let para = document.createElement('p');
let h3 = document.createElement('h3');
let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

para.style.color = 'red';
para.textContent = "Hey I'm red";

h3.style.color = 'blue';
h3.textContent = "I'm a blue h3";

div.style.cssText = "border: black; background-color: pink;";
h1.textContent = "I'm in a div";
para2.textContent = "ME TOO!"

content.appendChild(para);
content.appendChild(h3);
div.appendChild(h1);
div.appendChild(para2);
content.appendChild(div);
