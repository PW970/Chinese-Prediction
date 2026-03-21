import { Route, Routes } from 'react-router-dom';
import AppShell from './components/AppShell';
import HomePage from './pages/HomePage';
import LiurenPage from './pages/LiurenPage';
import QimenPage from './pages/QimenPage';
import ZiweiPage from './pages/ZiweiPage';
import BaziPage from './pages/BaziPage';
import LotPage from './pages/LotPage';
import ShengbeiPage from './pages/ShengbeiPage';
import DreamPage from './pages/DreamPage';
import FengshuiPage from './pages/FengshuiPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="/liuren" element={<LiurenPage />} />
        <Route path="/qimen" element={<QimenPage />} />
        <Route path="/ziwei" element={<ZiweiPage />} />
        <Route path="/bazi" element={<BaziPage />} />
        <Route path="/lot" element={<LotPage />} />
        <Route path="/shengbei" element={<ShengbeiPage />} />
        <Route path="/dream" element={<DreamPage />} />
        <Route path="/fengshui" element={<FengshuiPage />} />
      </Route>
    </Routes>
  );
}
