import './styles/main.scss';
import scoreArray from './modules/element.js';

const displayBody = document.querySelector('.display_body');

displayBody.innerHTML = '';
scoreArray.forEach((score) => {
  displayBody.innerHTML += `<li>Name: ${score}</li>`
});
