import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './errors/NotFoundPage/NotFoundPage';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import WhyPpcToda from './pages/WhyPpcToda/WhyPpcToda';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/why-ppc-toda" element={<WhyPpcToda />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
