import url from './url.js';

const displayBody = document.querySelector('.display_body');

export default async function fetchDATA() {
  const response = await fetch(url);
  const data = await response.json();
  displayBody.innerHTML = data.result.map((res) => `<li>${res.user}: ${res.score}</li>`).join('');
}