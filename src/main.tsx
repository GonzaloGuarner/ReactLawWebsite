import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import LawWebsite from './LawWebsite';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LawWebsite />
    </HelmetProvider>
  </StrictMode>
);
