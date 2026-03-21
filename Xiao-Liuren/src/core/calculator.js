const SHI_CHEN = [
  { name: '子时', start: 23, end: 0, index: 1 },
  { name: '丑时', start: 1, end: 2, index: 2 },
  { name: '寅时', start: 3, end: 4, index: 3 },
  { name: '卯时', start: 5, end: 6, index: 4 },
  { name: '辰时', start: 7, end: 8, index: 5 },
  { name: '巳时', start: 9, end: 10, index: 6 },
  { name: '午时', start: 11, end: 12, index: 7 },
  { name: '未时', start: 13, end: 14, index: 8 },
  { name: '申时', start: 15, end: 16, index: 9 },
  { name: '酉时', start: 17, end: 18, index: 10 },
  { name: '戌时', start: 19, end: 20, index: 11 },
  { name: '亥时', start: 21, end: 22, index: 12 }
];

function getHourIndex(hour) {
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
    throw new Error('hour 必须是 0 到 23 之间的整数');
  }

  if (hour === 23 || hour === 0) {
    return 1;
  }

  return Math.floor((hour + 1) / 2) + 1;
}

function getShiChenName(hour) {
  return SHI_CHEN.find((item) => item.index === getHourIndex(hour))?.name ?? '';
}

function calculateLiuren(month, day, hourIndex, hexagrams) {
  if (!Array.isArray(hexagrams) || hexagrams.length !== 6) {
    throw new Error('hexagrams 必须是包含 6 项的数组');
  }

  const values = { month, day, hourIndex };
  for (const [key, value] of Object.entries(values)) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error(`${key} 必须是正整数`);
    }
  }

  const index = ((month + day + hourIndex - 2) % 6 + 6) % 6;
  return {
    ...hexagrams[index],
    index,
    month,
    day,
    hourIndex
  };
}

export { SHI_CHEN, calculateLiuren, getHourIndex, getShiChenName };
