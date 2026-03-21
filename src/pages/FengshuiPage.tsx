import { useState } from 'react';
import { fengShuiAdvice, roomAdvice } from '../lib/fortune';

const directions = Object.keys(fengShuiAdvice) as Array<keyof typeof fengShuiAdvice>;
const rooms = Object.keys(roomAdvice) as Array<keyof typeof roomAdvice>;

export default function FengshuiPage() {
  const [direction, setDirection] = useState<keyof typeof fengShuiAdvice>(directions[0]);
  const [room, setRoom] = useState<keyof typeof roomAdvice>(rooms[0]);

  return (
    <section className="page-panel">
      <h1>风水</h1>
      <p className="lead">从方位和空间场景两个维度给出空间布置建议。</p>
      <div className="two-col">
        <label className="field">
          <span>方位</span>
          <select value={direction} onChange={(event) => setDirection(event.target.value as keyof typeof fengShuiAdvice)}>
            {directions.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label className="field">
          <span>空间场景</span>
          <select value={room} onChange={(event) => setRoom(event.target.value as keyof typeof roomAdvice)}>
            {rooms.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <article className="result-card highlight">
        <p className="hero-number">{room} · {direction}</p>
        <p>{fengShuiAdvice[direction]}</p>
        <p>{roomAdvice[room]}</p>
      </article>
    </section>
  );
}
