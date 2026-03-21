const SHI_CHEN = [
  { name: '子时', index: 1 },
  { name: '丑时', index: 2 },
  { name: '寅时', index: 3 },
  { name: '卯时', index: 4 },
  { name: '辰时', index: 5 },
  { name: '巳时', index: 6 },
  { name: '午时', index: 7 },
  { name: '未时', index: 8 },
  { name: '申时', index: 9 },
  { name: '酉时', index: 10 },
  { name: '戌时', index: 11 },
  { name: '亥时', index: 12 }
];

const LUNAR_MONTH_MAP = {
  正月: 1,
  二月: 2,
  三月: 3,
  四月: 4,
  五月: 5,
  六月: 6,
  七月: 7,
  八月: 8,
  九月: 9,
  十月: 10,
  冬月: 11,
  腊月: 12
};

const lunarFormatter = new Intl.DateTimeFormat('zh-CN-u-ca-chinese', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

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

function getLunarParts(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new Error('请输入有效的日期');
  }

  const parts = lunarFormatter.formatToParts(date);
  const monthLabel = parts.find((part) => part.type === 'month')?.value;
  const dayLabel = parts.find((part) => part.type === 'day')?.value;
  const yearName = parts.find((part) => part.type === 'yearName')?.value;
  const relatedYear = parts.find((part) => part.type === 'relatedYear')?.value;
  const isLeapMonth = monthLabel?.startsWith('闰') ?? false;
  const normalizedMonthLabel = monthLabel?.replace(/^闰/, '');
  const month = normalizedMonthLabel ? LUNAR_MONTH_MAP[normalizedMonthLabel] : undefined;
  const day = dayLabel ? Number.parseInt(dayLabel, 10) : NaN;

  if (!month || !day) {
    throw new Error('无法解析农历日期');
  }

  return {
    month,
    day,
    monthLabel,
    yearName,
    relatedYear,
    isLeapMonth
  };
}

function getLunarData(date = new Date()) {
  const lunarParts = getLunarParts(date);
  const hour = date.getHours();

  return {
    ...lunarParts,
    hour,
    hourIndex: getHourIndex(hour),
    shichen: getShiChenName(hour),
    dateString: lunarFormatter.format(date),
    solarString: new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(date)
  };
}

function toLocalInputValue(date = new Date()) {
  const pad = (value) => String(value).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export { SHI_CHEN, getHourIndex, getLunarData, getShiChenName, toLocalInputValue };
