const throwBtn = document.getElementById('throwBtn');
const result = document.getElementById('result');
const results = [
  { title: '圣杯', meaning: '一正一反，表示可行、神明应允。' },
  { title: '笑杯', meaning: '双反朝天，表示问题不明确或时机未到。' },
  { title: '阴杯', meaning: '双覆向下，表示暂不宜行，建议缓一步。' }
];

throwBtn.addEventListener('click', () => {
  const item = results[Math.floor(Math.random() * results.length)];
  result.innerHTML = `<p class="big">${item.title}</p><p>${item.meaning}</p>`;
});
