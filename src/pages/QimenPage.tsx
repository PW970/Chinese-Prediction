import { useState } from 'react';
import { buildQimenChart } from '../lib/metaphysics';
import { getLunarData, toLocalInputValue } from '../lib/time';

export default function QimenPage() {
  const [value, setValue] = useState(toLocalInputValue(new Date()));
  const lunarData = getLunarData(new Date(value));
  const chart = buildQimenChart(lunarData);

  return (
    <section className="page-panel">
      <h1>奇门遁甲</h1>
      <p className="lead">当前为时家奇门基础盘，用于承载九宫、九星、八门、八神和干支排布。</p>
      <label className="field">
        <span>排盘时间</span>
        <input type="datetime-local" value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
      <div className="module-grid compact">
        {chart.map((cell) => (
          <article className="module-card" key={cell.palace}>
            <h2>{cell.palace}</h2>
            <p>九星：{cell.star}</p>
            <p>八门：{cell.door}</p>
            <p>八神：{cell.god}</p>
            <p>天干：{cell.heavenlyStem}</p>
            <p>地支：{cell.earthlyBranch}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
