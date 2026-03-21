import { buildQimenChart } from '../../shared/metaphysics.js';
import { getLunarData, toLocalInputValue } from '../../shared/timeHelper.js';

const dateInput = document.getElementById('datetimeInput');
const castBtn = document.getElementById('castBtn');
const result = document.getElementById('result');
const grid = document.getElementById('grid');

function render() {
  const date = dateInput.value ? new Date(dateInput.value) : new Date();
  const lunarData = getLunarData(date);
  const chart = buildQimenChart(lunarData);
  result.innerHTML = `<p>公历：${lunarData.solarString}</p><p>农历：${lunarData.dateString}</p><p>时辰：${lunarData.shichen}</p>`;
  grid.innerHTML = chart.map((cell) => `<article class="card"><h3>${cell.palace}</h3><p>九星：${cell.star}</p><p>八门：${cell.door}</p><p>八神：${cell.god}</p><p>天干：${cell.heavenlyStem}</p><p>地支：${cell.earthlyBranch}</p></article>`).join('');
}

dateInput.value = toLocalInputValue(new Date());
castBtn.addEventListener('click', render);
