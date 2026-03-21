import { useState } from 'react';
import { buildZiweiChart } from '../lib/metaphysics';
import { getLunarData, toLocalInputValue } from '../lib/time';

export default function ZiweiPage() {
  const [value, setValue] = useState(toLocalInputValue(new Date()));
  const chart = buildZiweiChart(getLunarData(new Date(value)));

  return (
    <section className="page-panel">
      <h1>紫微斗数</h1>
      <p className="lead">基础版十二宫模型，后续可以继续补主星、辅星与四化逻辑。</p>
      <label className="field">
        <span>排盘时间</span>
        <input type="datetime-local" value={value} onChange={(event) => setValue(event.target.value)} />
      </label>
      <div className="module-grid compact">
        {chart.map((cell) => (
          <article className={`module-card${cell.isMing ? ' marked' : ''}`} key={cell.name}>
            <h2>{cell.name}{cell.isMing ? ' · 命宫' : ''}</h2>
            <p>宫支：{cell.branch}</p>
            <p>主星：{cell.star}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
