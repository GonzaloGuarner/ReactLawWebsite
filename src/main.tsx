import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './components/pages/homePage';
import PublicationsPage from './components/pages/publications';
import DerechoAlimentarioPage from './components/pages/derechoAlimentario';
import DerechoMercantilPage from './components/pages/derechoMercantil';
import DerechoConsumoPage from './components/pages/derechoConsumo';
import ScrollToTop from './components/utils/ScrollToTop';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/derecho-alimentario" element={<DerechoAlimentarioPage />} />
          <Route path="/derecho-mercantil" element={<DerechoMercantilPage />} />
          <Route path="/derecho-consumo" element={<DerechoConsumoPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);