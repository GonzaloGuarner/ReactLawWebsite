// hooks/useNavHandler.ts
import { useNavigate, useLocation } from 'react-router-dom';

export const useNavHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (href: string) => {
    if (!href) return;
    if (href.startsWith('/')) return navigate(href);
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else navigate('/', { state: { scrollTo: href } });
      return;
    }
    if (href.startsWith('http')) window.open(href, '_blank', 'noopener');
  };
};
