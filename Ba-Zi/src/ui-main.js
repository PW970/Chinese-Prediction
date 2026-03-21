import { computeBazi } from '../../shared/metaphysics.js';
import { getLunarData, toLocalInputValue } from '../../shared/timeHelper.js';

const dateInput = document.getElementById('datetimeInput');
const castBtn = document.getElementById('castBtn');
const pillars = document.getElementById('pillars');
const result = document.getElementById('result');

function render() {
  const date = dateInput.value ? new Date(dateInput.value) : new Date();
  const lunarData = getLunarData(date);
  const bazi = computeBazi(date, lunarData);
  const labels = ['年柱', '月柱', '日柱', '时柱'];
  pillars.innerHTML = bazi.pillars.map((pillar, index) => `<article class="card"><h3>${labels[index]}</h3><p class="big">${pillar.label}</p></article>`).join('');
  result.innerHTML = `<p>农历：${lunarData.dateString}</p><p>时辰：${bazi.shichen}</p><p>五行：木 ${bazi.fiveElements['木']} / 火 ${bazi.fiveElements['火']} / 土 ${bazi.fiveElements['土']} / 金 ${bazi.fiveElements['金']} / 水 ${bazi.fiveElements['水']}</p>`;
}

dateInput.value = toLocalInputValue(new Date());
castBtn.addEventListener('click', render);
