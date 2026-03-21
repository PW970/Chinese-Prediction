import { useDeferredValue, useState } from 'react';
import { dreamDictionary } from '../lib/fortune';

export default function DreamPage() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const match = dreamDictionary.find((item) => deferredQuery.trim() && deferredQuery.includes(item.keyword));

  return (
    <section className="page-panel">
      <h1>解梦</h1>
      <p className="lead">用关键词做梦象检索，保留轻量但可扩展的词库结构。</p>
      <label className="field">
        <span>梦境关键词</span>
        <input placeholder="例如：水、火、蛇、考试" value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>
      <article className="result-card">
        {match ? (
          <>
            <p className="hero-number">{match.title}</p>
            <p>{match.meaning}</p>
          </>
        ) : (
          <p>输入关键词后会在词库中即时检索，没命中时可以换更核心的意象词。</p>
        )}
      </article>
    </section>
  );
}
