// Js does not hoist functions that are declared as variables. That means if call a functions before that is declared it will work!

// const { doc } = require('prettier');

// hoisted
function doctorize(firstName) {
  return `Dr. ${firstName}`;
}

// not hoisted
const doctorize2 = function (lastName) {
  return `Olá, ${lastName}`;
};

const inchToCM = (inches) => inches * 2.54;

const add = (a, b = 3) => a + b;

// IIFE
// Immediatelly Invoked Function Expression
(function () {
  console.log('Rodando a função');
  return 'Nice';
})();

// Methods!!!
const wes = {
  name: 'Westopher Bos',
  sayHi() {
    console.log('Olá método funcionando');
  },
  yellHi() {
    console.log('Short Hand FUncionando agora');
  },
  wisperHi: () => {
    console.log('arow funciton funcionando');
  },
};

// CallBack Functions

const botao = document.querySelector('.button');

botao.addEventListener('click', wes.yellHi);
