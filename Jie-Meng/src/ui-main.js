import { dreamDictionary } from '../../shared/fortune.js';

const dreamInput = document.getElementById('dreamInput');
const searchBtn = document.getElementById('searchBtn');
const result = document.getElementById('result');

searchBtn.addEventListener('click', () => {
  const keyword = dreamInput.value.trim();
  const found = dreamDictionary.find((item) => keyword && keyword.includes(item.keyword));
  result.innerHTML = found
    ? `<p class="big">${found.title}</p><p>${found.meaning}</p>`
    : '<p>未命中词库，可以尝试输入更核心的意象。</p>';
});
