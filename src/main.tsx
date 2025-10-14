import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import LawWebsite from './LawWebsite';
import PublicationsPage from './components/pages/publications';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LawWebsite />} />
          <Route path="/publications" element={<PublicationsPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);