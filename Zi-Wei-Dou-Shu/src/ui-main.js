import { buildZiweiChart } from '../../shared/metaphysics.js';
import { getLunarData, toLocalInputValue } from '../../shared/timeHelper.js';

const dateInput = document.getElementById('datetimeInput');
const castBtn = document.getElementById('castBtn');
const result = document.getElementById('result');

function render() {
  const date = dateInput.value ? new Date(dateInput.value) : new Date();
  const chart = buildZiweiChart(getLunarData(date));
  result.innerHTML = chart.map((cell) => `<article class="card"><h3>${cell.name}${cell.isMing ? ' · 命宫' : ''}</h3><p>宫支：${cell.branch}</p><p>主星：${cell.star}</p></article>`).join('');
}

dateInput.value = toLocalInputValue(new Date());
castBtn.addEventListener('click', render);
