import { Link, NavLink, Outlet } from 'react-router-dom';

const modules = [
  { path: '/', label: '总览', end: true },
  { path: '/liuren', label: '小六壬' },
  { path: '/qimen', label: '奇门遁甲' },
  { path: '/ziwei', label: '紫微斗数' },
  { path: '/bazi', label: '八字排盘' },
  { path: '/lot', label: '抽签' },
  { path: '/shengbei', label: '圣杯' },
  { path: '/dream', label: '解梦' },
  { path: '/fengshui', label: '风水' }
];

export default function AppShell() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <p className="eyebrow">Chinese Prediction</p>
        <Link className="brand" to="/">东方推演平台</Link>
        <p className="sidebar-copy">用现代前端工程组织传统术数模块，统一导航、统一状态、统一样式语言。</p>
        <nav className="nav-list">
          {modules.map((item) => (
            <NavLink
              key={item.path}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              end={item.end}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
