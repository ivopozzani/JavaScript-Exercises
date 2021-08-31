// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.insertAdjacentElement('afterbegin', div);
// make an unordered list
const divWrap = document.querySelector('.wrapper');
const uL = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

li1.innerText = 'one';
li2.innerText = 'two';
li3.innerText = 'tree';

// put that list into the above wrapper
divWrap.insertAdjacentElement('afterbegin', uL);
uL.insertAdjacentElement('afterbegin', li1);
uL.insertAdjacentElement('beforeend', li2);
uL.append(li3);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://source.unsplash.com/random/300x300';

// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
// Append that image to the wrapper
divWrap.append(img);

// with HTML string, make a div, with two paragraphs inside of it
const divString = `
<div>
  <p>hi1</p>
  <p>hi2</p>
</div>
`;
// put this div before the unordered list from above
divWrap.insertAdjacentHTML('afterbegin', divString);
// add a class to the second paragraph called warning
const p2 = document.querySelector('.wrapper div');
p2.lastElementChild.classList.add('warning');
// remove the first paragraph
p2.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const newHTML = `
  <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
      <button class='del' type='button'>Deletar</button>
  </div>  
  `;
  const finishedHTML = document.createRange().createContextualFragment(newHTML);
  return finishedHTML;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const div2 = document.createElement('div');
div2.classList.add('cards');

// make 4 player cards using generatePlayerCard
const card1 = generatePlayerCard('Joana', 25, 1.43);
const card2 = generatePlayerCard('Marcio', 30, 1.8);
const card3 = generatePlayerCard('Mauro', 34, 1.9);
const card4 = generatePlayerCard('Robs', 19, 1.76);

// append those cards to the div
div2.append(card1, card2, card3, card4);

// put the div into the DOM just before the wrapper element
divWrap.insertAdjacentElement('beforebegin', div2);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const delButton = div2.querySelectorAll('.del');

function deleteButton(event) {
  const buttonClicked = event.currentTarget;
  buttonClicked.closest('.playerCard').remove();
}

delButton.forEach((Button) => Button.addEventListener('click', deleteButton));
// delButton.forEach(function (button) {
//   button.addEventListener('click', function (event) {
//     const addOnClick = event.currentTarget;
//     const newHTML = `<p>Hi I've Been Added!!</p>`;
//     addOnClick.closest('.playerCard').insertAdjacentHTML('beforeend', newHTML);
//   });

// });

// select all the buttons!
// make out delete function
// loop over them and attach a listener
