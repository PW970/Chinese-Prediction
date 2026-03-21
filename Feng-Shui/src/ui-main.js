import { fengShuiAdvice, roomAdvice } from '../../shared/fortune.js';

const directionSelect = document.getElementById('directionSelect');
const roomSelect = document.getElementById('roomSelect');
const analyzeBtn = document.getElementById('analyzeBtn');
const result = document.getElementById('result');

directionSelect.innerHTML = Object.keys(fengShuiAdvice).map((key) => `<option value="${key}">${key}</option>`).join('');
roomSelect.innerHTML = Object.keys(roomAdvice).map((key) => `<option value="${key}">${key}</option>`).join('');

analyzeBtn.addEventListener('click', () => {
  const direction = directionSelect.value;
  const room = roomSelect.value;
  result.innerHTML = `<p class="big">${room} · ${direction}</p><p>${fengShuiAdvice[direction]}</p><p>${roomAdvice[room]}</p>`;
});
