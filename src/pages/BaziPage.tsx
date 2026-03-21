import { useState } from 'react';
import { computeBazi } from '../lib/metaphysics';
import { getLunarData, toLocalInputValue } from '../lib/time';

const labels = ['年柱', '月柱', '日柱', '时柱'];

export default function BaziPage() {
  const [value, setValue] = useState(toLocalInputValue(new Date()));
  const lunarData = getLunarData(new Date(value));
  const result = computeBazi(new Date(value), lunarData);

  return (
    <section className="page-panel">
      <h1>八字排盘</h1>
      <p className="lead">基于四柱与五行概览的基础版排盘入口。</p>
      <label className="field">
        <span>排盘时间</span>
        <input type="datetime-local" value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
      <div className="pillar-grid">
        {result.pillars.map((pillar, index) => (
          <article className="result-card" key={labels[index]}>
            <p className="meta-label">{labels[index]}</p>
            <p className="hero-number">{pillar.label}</p>
          </article>
        ))}
      </div>
      <article className="result-card">
        <div className="meta-list">
          <span>农历：{lunarData.dateString}</span>
          <span>时辰：{result.shichen}</span>
          <span>五行：木 {result.fiveElements['木']} / 火 {result.fiveElements['火']} / 土 {result.fiveElements['土']} / 金 {result.fiveElements['金']} / 水 {result.fiveElements['水']}</span>
        </div>
      </article>
    </section>
  );
}
