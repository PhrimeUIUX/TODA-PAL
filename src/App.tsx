import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhyPpcToda from './pages/WhyPpcToda';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/why-ppc-toda" element={<WhyPpcToda />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
