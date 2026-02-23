/**
 * UI 交互核心逻辑
 * 处理起卦动效与数据渲染
 */
import { calculateLiuren, getHourIndex } from './core/calculator.js';
import { hexagrams } from './data/hexagrams.js';

// 获取 DOM 元素
const castBtn = document.getElementById('castBtn');
const resultArea = document.getElementById('resultArea');
const hexName = document.getElementById('hexName');
const hexMeaning = document.getElementById('hexMeaning');
const hexPoem = document.getElementById('hexPoem');

/**
 * 核心起卦交互
 */
function handleCast() {
    // 1. 交互动效：点击时先让结果区域消失（如果是第二次测算）
    resultArea.classList.remove('active');
    castBtn.innerText = "推演中...";
    castBtn.disabled = true;

    // 2. 获取当前时间参数
    // 注意：此处为演示使用了公历，项目完善后可在此处接入 timeHelper 的农历转换
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hourIndex = getHourIndex(now.getHours());

    // 3. 执行核心算法
    const result = calculateLiuren(month, day, hourIndex, hexagrams);

    // 4. 模拟推演过程（延迟 800ms 显示结果，增加仪式感）
    setTimeout(() => {
        // 填充内容
        hexName.innerText = result.name;
        hexMeaning.innerText = result.meaning;
        hexPoem.innerText = result.poem;

        // 激活 CSS 动画
        resultArea.classList.add('active');

        // 恢复按钮状态
        castBtn.innerText = "重新起卦";
        castBtn.disabled = false;
    }, 800);
}

// 绑定点击事件
castBtn.addEventListener('click', handleCast);
