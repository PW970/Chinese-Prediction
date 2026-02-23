const hexagrams = require('../data/hexagrams.json');
// 1. 引入我们的时间工具
const { getCurrentLunarData } = require('../utils/timeHelper');

function startQuickCalculate() {
    // 2. 自动获取当前农历时间
    const timeData = getCurrentLunarData();
    const { month, day, hourIndex } = timeData;

    // 3. 核心公式计算
    let index = (month + day + hourIndex - 2) % 6;
    let result = hexagrams[index];

    // 4. 打印结果
    console.log(`--- 数字化道场：小六壬自动测算 ---`);
    console.log(`当前时间：${timeData.dateString} (${month}月${day}日)`);
    console.log(`当前卦象：【${result.name}】`);
    console.log(`吉凶判断：${result.meaning}`);
    console.log(`断辞诗曰：${result.poem}`);
    console.log(`--------------------------------`);
}

// 执行！
startQuickCalculate();
