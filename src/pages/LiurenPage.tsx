import { useState } from 'react';
import { calculateLiuren, hexagrams } from '../lib/liuren';
import { getLunarData, toLocalInputValue } from '../lib/time';

export default function LiurenPage() {
  const [value, setValue] = useState(toLocalInputValue(new Date()));
  const lunarData = getLunarData(new Date(value));
  const result = calculateLiuren(lunarData.month, lunarData.day, lunarData.hourIndex, hexagrams);

  return (
    <section className="page-panel">
      <h1>小六壬</h1>
      <p className="lead">以统一时间输入驱动农历换算、时辰判断与实时起卦。</p>
      <label className="field">
        <span>测算时间</span>
        <input type="datetime-local" value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
      <article className="result-card highlight">
        <p className="hero-number">{result.name}</p>
        <p>{result.meaning}</p>
        <p>{result.poem}</p>
        <div className="meta-list">
          <span>公历：{lunarData.solarString}</span>
          <span>农历：{lunarData.dateString}{lunarData.isLeapMonth ? '（闰月）' : ''}</span>
          <span>时辰：{lunarData.shichen}</span>
        </div>
      </article>
    </section>
  );
}
