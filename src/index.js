import './styles/main.scss';
import fetchDATA from './modules/element.js';
import url from './modules/url.js';

const reflesh = document.querySelector('.reflesh');

reflesh.addEventListener('click', fetchDATA);

const addForm = document.querySelector('.add_form');
const nameValue = document.querySelector('#name');
const scoreValue = document.querySelector('#score');

const postDATA = async (data) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = { user: `${nameValue.value}`, score: `${scoreValue.value}` };
  postDATA(data).then(() => {
    fetchDATA();
    e.target.reset();
  });
});
