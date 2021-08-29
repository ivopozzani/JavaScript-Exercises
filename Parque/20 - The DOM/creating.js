const newEl = document.querySelector('.items');

const myDiv = document.createElement('h2');
myDiv.textContent = 'Novo titulo';
myDiv.classList.add('fromJs');

console.log(myDiv);
newEl.insertAdjacentElement('afterbegin', myDiv);

const myUl = document.createElement('ul');
const myLi1 = document.createElement('li');
const myLi2 = document.createElement('li');
const myLi3 = document.createElement('li');
const myLi4 = document.createElement('li');
const myLi5 = document.createElement('li');

myUl.classList.add('list');
myLi1.textContent = 'one';
myLi2.textContent = 'two';
myLi3.textContent = 'three';
myLi4.textContent = 'four';
myLi5.textContent = 'five';

document.body.insertAdjacentElement('afterbegin', myUl);

const list = document.querySelector('.list');
list.insertAdjacentElement('beforeend', myLi2);
myLi2.insertAdjacentElement('beforebegin', myLi1);

list.insertAdjacentElement('beforeend', myLi3);
myLi3.appendChild(myLi4);
myLi4.append(myLi5);
