import { getHourIndex, getShiChenName, type LunarData } from './time';

export type Pillar = {
  label: string;
  stem: string;
  branch: string;
};

const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'] as const;
const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'] as const;
const ELEMENTS: Record<string, '木' | '火' | '土' | '金' | '水'> = {
  甲: '木', 乙: '木', 丙: '火', 丁: '火', 戊: '土', 己: '土', 庚: '金', 辛: '金', 壬: '水', 癸: '水',
  子: '水', 丑: '土', 寅: '木', 卯: '木', 辰: '土', 巳: '火', 午: '火', 未: '土', 申: '金', 酉: '金', 戌: '土', 亥: '水'
};
const MONTH_BRANCHES = ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'] as const;
const MONTH_STEM_START: Record<string, string> = { 甲: '丙', 己: '丙', 乙: '戊', 庚: '戊', 丙: '庚', 辛: '庚', 丁: '壬', 壬: '壬', 戊: '甲', 癸: '甲' };
const HOUR_STEM_START: Record<string, string> = { 甲: '甲', 己: '甲', 乙: '丙', 庚: '丙', 丙: '戊', 辛: '戊', 丁: '庚', 壬: '庚', 戊: '壬', 癸: '壬' };
const QIMEN_STARS = ['天蓬', '天任', '天冲', '天辅', '天英', '天芮', '天柱', '天心', '天禽'];
const QIMEN_DOORS = ['休门', '生门', '伤门', '杜门', '景门', '死门', '惊门', '开门'];
const QIMEN_GODS = ['值符', '腾蛇', '太阴', '六合', '白虎', '玄武', '九地', '九天'];
const PALACE_NAMES = ['坎一宫', '坤二宫', '震三宫', '巽四宫', '中五宫', '乾六宫', '兑七宫', '艮八宫', '离九宫'];
const ZIWEI_PALACES = ['命宫', '兄弟', '夫妻', '子女', '财帛', '疾厄', '迁移', '交友', '官禄', '田宅', '福德', '父母'];
const ZIWEI_STARS = ['紫微', '天机', '太阳', '武曲', '天同', '廉贞', '天府', '太阴', '贪狼', '巨门', '天相', '天梁'];

function mod(value: number, divisor: number) {
  return ((value % divisor) + divisor) % divisor;
}

function ganzhiFromIndex(index: number) {
  return `${STEMS[mod(index, 10)]}${BRANCHES[mod(index, 12)]}`;
}

function parseGanzhiPair(pair: string): Pillar {
  return { label: pair, stem: pair[0], branch: pair[1] };
}

function getMonthPillar(lunarData: LunarData) {
  const yearStem = lunarData.yearName[0];
  const firstStem = MONTH_STEM_START[yearStem];
  const stemIndex = mod(STEMS.indexOf(firstStem as (typeof STEMS)[number]) + lunarData.month - 1, 10);
  const branch = MONTH_BRANCHES[lunarData.month - 1];
  return { label: `${STEMS[stemIndex]}${branch}`, stem: STEMS[stemIndex], branch };
}

function getDayPillar(date: Date) {
  const diffDays = Math.floor((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(1984, 1, 2)) / 86400000);
  return parseGanzhiPair(ganzhiFromIndex(mod(diffDays, 60)));
}

function getHourPillar(date: Date, dayStem: string) {
  const firstStem = HOUR_STEM_START[dayStem];
  const hourIndex = getHourIndex(date.getHours());
  const stemIndex = mod(STEMS.indexOf(firstStem as (typeof STEMS)[number]) + hourIndex - 1, 10);
  const branch = BRANCHES[mod(hourIndex - 1, 12)];
  return { label: `${STEMS[stemIndex]}${branch}`, stem: STEMS[stemIndex], branch };
}

export function computeBazi(date: Date, lunarData: LunarData) {
  const year = parseGanzhiPair(lunarData.yearName);
  const month = getMonthPillar(lunarData);
  const day = getDayPillar(date);
  const hour = getHourPillar(date, day.stem);
  const pillars = [year, month, day, hour];
  const fiveElements = { 木: 0, 火: 0, 土: 0, 金: 0, 水: 0 } as Record<'木' | '火' | '土' | '金' | '水', number>;
  pillars.forEach((pillar) => {
    fiveElements[ELEMENTS[pillar.stem]] += 1;
    fiveElements[ELEMENTS[pillar.branch]] += 1;
  });
  return { pillars, fiveElements, shichen: getShiChenName(date.getHours()) };
}

export function buildQimenChart(lunarData: LunarData) {
  const base = lunarData.month + lunarData.day + lunarData.hourIndex;
  return PALACE_NAMES.map((palace, index) => ({
    palace,
    star: QIMEN_STARS[mod(base + index, QIMEN_STARS.length)],
    door: index === 4 ? '中宫' : QIMEN_DOORS[mod(base + index, QIMEN_DOORS.length)],
    god: index === 4 ? '值使' : QIMEN_GODS[mod(base + index, QIMEN_GODS.length)],
    heavenlyStem: STEMS[mod(base + index, STEMS.length)],
    earthlyBranch: BRANCHES[mod(base + index, BRANCHES.length)]
  }));
}

export function buildZiweiChart(lunarData: LunarData) {
  const mingIndex = mod(14 - lunarData.month + lunarData.hourIndex, 12);
  const starStart = mod(lunarData.month + lunarData.day + lunarData.hourIndex, 12);
  return ZIWEI_PALACES.map((name, index) => {
    const palaceIndex = mod(mingIndex + index, 12);
    return { name, branch: BRANCHES[palaceIndex], star: ZIWEI_STARS[mod(starStart + index, ZIWEI_STARS.length)], isMing: index === 0 };
  });
}
