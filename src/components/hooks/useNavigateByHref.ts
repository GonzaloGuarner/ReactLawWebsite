import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigateByHref = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (href?: string) => {
    if (!href) return;

    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0 });
      return;
    }

    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/', { state: { scrollTo: href } });
      }
      return;
    }

    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener');
    }
  };
};
