import { getLunarData, toLocalInputValue } from '../../shared/timeHelper.js';
import { calculateLiuren } from './core/calculator.js';
import { hexagrams } from './data/hexagrams.js';

const dateInput = document.getElementById('datetimeInput');
const castBtn = document.getElementById('castBtn');
const nowBtn = document.getElementById('nowBtn');
const resultArea = document.getElementById('resultArea');

function renderResult() {
  const selectedDate = dateInput.value ? new Date(dateInput.value) : new Date();
  const lunarData = getLunarData(selectedDate);
  const result = calculateLiuren(lunarData.month, lunarData.day, lunarData.hourIndex, hexagrams);
  resultArea.innerHTML = `
    <p class="big">${result.name}</p>
    <p>${result.meaning}</p>
    <p>${result.poem}</p>
    <p>公历：${lunarData.solarString}</p>
    <p>农历：${lunarData.dateString}${lunarData.isLeapMonth ? '（闰月）' : ''}</p>
    <p>时辰：${lunarData.shichen}</p>
    <p>公式：${lunarData.month} + ${lunarData.day} + ${lunarData.hourIndex} - 2，取模得第 ${result.index + 1} 位</p>
  `;
}

dateInput.value = toLocalInputValue(new Date());
castBtn.addEventListener('click', renderResult);
nowBtn.addEventListener('click', () => {
  dateInput.value = toLocalInputValue(new Date());
});
