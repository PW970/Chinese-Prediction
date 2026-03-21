import { Link } from 'react-router-dom';

const modules = [
  { path: '/liuren', title: '小六壬', description: '实时起卦与基础断辞。' },
  { path: '/qimen', title: '奇门遁甲', description: '时家奇门基础九宫盘。' },
  { path: '/ziwei', title: '紫微斗数', description: '十二宫位与基础星曜展示。' },
  { path: '/bazi', title: '八字排盘', description: '四柱与五行概览。' },
  { path: '/lot', title: '抽签', description: '随机签文与释义。' },
  { path: '/shengbei', title: '圣杯', description: '掷筊结果模拟。' },
  { path: '/dream', title: '解梦', description: '关键词梦象检索。' },
  { path: '/fengshui', title: '风水', description: '方位与空间建议。' }
];

export default function HomePage() {
  return (
    <section className="page-panel">
      <p className="eyebrow">Modern Stack</p>
      <h1>术数模块总览</h1>
      <p className="lead">新版项目使用 React、TypeScript 与 Vite 统一组织页面、算法和交互。这里是所有模块的新入口。</p>
      <div className="module-grid">
        {modules.map((module) => (
          <article className="module-card" key={module.path}>
            <h2>{module.title}</h2>
            <p>{module.description}</p>
            <Link className="button-link" to={module.path}>进入模块</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
