import { lots } from '../../shared/fortune.js';

const drawBtn = document.getElementById('drawBtn');
const result = document.getElementById('result');

drawBtn.addEventListener('click', () => {
  const lot = lots[Math.floor(Math.random() * lots.length)];
  result.innerHTML = `<p class="big">${lot.title}</p><p>${lot.poem}</p><p>${lot.meaning}</p>`;
});
