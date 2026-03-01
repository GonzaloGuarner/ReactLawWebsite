import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    const scrollState = (state as { scrollTo?: string } | null)?.scrollTo;

    if (scrollState) {
      // Small delay to allow the page to render before scrolling
      const timer = setTimeout(() => {
        const el = document.querySelector(scrollState);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    // Normal page change — scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;