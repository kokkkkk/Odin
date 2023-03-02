const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const p = document.createElement('p');
p.style.color = 'red';       
p.textContent = "Hey I'm red!";

const h3 = document.createElement('h3');
h3.style.color = 'blue';       
h3.textContent =  "I'm a blue h3!";

const div2 = document.createElement('div');
div2.setAttribute('style', 'border-style: solid; background: pink;');   

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const p2= document.createElement('p');  
p2.textContent = "ME TOO!";

div2.appendChild(h1);
div2.appendChild(p2);


container.appendChild(content)
container.appendChild(p)
container.appendChild(h3)
container.appendChild(div2)