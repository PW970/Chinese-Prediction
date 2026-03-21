import { useState } from 'react';
import { lots } from '../lib/fortune';

export default function LotPage() {
  const [lot, setLot] = useState<(typeof lots)[number] | null>(null);

  return (
    <section className="page-panel">
      <h1>抽签</h1>
      <p className="lead">随机抽取签文，用于事务趋势参考。</p>
      <button className="button-link" onClick={() => setLot(lots[Math.floor(Math.random() * lots.length)])} type="button">抽一签</button>
      {lot && (
        <article className="result-card highlight">
          <p className="hero-number">{lot.title}</p>
          <p>{lot.poem}</p>
          <p>{lot.meaning}</p>
        </article>
      )}
    </section>
  );
}
