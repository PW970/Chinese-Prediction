import { useState } from 'react';

const results = [
  { title: '圣杯', meaning: '一正一反，表示可行、神明应允。' },
  { title: '笑杯', meaning: '双反朝天，表示问题不明确或时机未到。' },
  { title: '阴杯', meaning: '双覆向下，表示暂不宜行，建议缓一步。' }
] as const;

export default function ShengbeiPage() {
  const [result, setResult] = useState<(typeof results)[number] | null>(null);

  return (
    <section className="page-panel">
      <h1>圣杯</h1>
      <p className="lead">模拟掷筊结果，适合简单的是非判断。</p>
      <button className="button-link" onClick={() => setResult(results[Math.floor(Math.random() * results.length)])} type="button">掷筊</button>
      {result && (
        <article className="result-card">
          <p className="hero-number">{result.title}</p>
          <p>{result.meaning}</p>
        </article>
      )}
    </section>
  );
}
