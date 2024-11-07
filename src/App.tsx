import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Features from './pages/Features';
import UseCases from './pages/UseCases';
import Privacy from './pages/Privacy';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="features" element={<Features />} />
          <Route path="usecases" element={<UseCases />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </>
  );
}