const div = document.querySelector('#main');

const h = document.querySelector('h2');
console.dir(h);
console.log(h.textContent);
h.textContent = 'Mudei o texto pelo JavaScript';
console.log(h.textContent);

const hidden = document.querySelector('div span');
console.log(hidden);
console.log(hidden.innerHTML);
console.log(hidden.outerHTML);
console.log(hidden.textContent);

const add = document.querySelector('.sub-items p');
console.log(add);
add.textContent += ' texto tbm inserido';
add.insertAdjacentText('beforeend', ' Texto Inserido');

// Totally wrong way to work with classes
// add.classList += 'nova-classe';
// add.className += ' new-class';
// add.classList = 'deleted';

const pic = document.querySelector('.pic');
// pic.classList.add('rodar', 'filtrar');
console.log(pic);
console.log(pic.classList);

document.addEventListener('click', function () {
  pic.classList.toggle('rodar');
});
