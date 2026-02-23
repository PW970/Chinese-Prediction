// 1. 引入刚才下载的工具库
const { Solar, Lunar } = require('lunar-javascript');

/**
 * 获取当前时间的农历月、日、时辰序号
 * @returns {object} { month, day, hourIndex }
 */
function getCurrentLunarData() {
    // 获取当前系统的公历时间
    const date = new Date();

    // 1. 公历转农历
    const solar = Solar.fromDate(date);
    const lunar = Lunar.fromSolar(solar);

    // 2. 获取农历月份和日期 (比如正月初五，返回就是 1 和 5)
    const month = lunar.getMonth();
    const day = lunar.getDay();

    // 3. 获取时辰序号 (1-12)
    // 这里的逻辑是：13:00-14:59是未时，序号是8
    const hourIndex = lunar.getTimeZhiIndex() + 1;

    return {
        month: month,
        day: day,
        hourIndex: hourIndex,
        dateString: lunar.toString() // 顺便拿个字符串，比如“二〇二六年正月初六”
    };
}

// 导出这个功能，让 calculator.js 能用到它
module.exports = { getCurrentLunarData };
