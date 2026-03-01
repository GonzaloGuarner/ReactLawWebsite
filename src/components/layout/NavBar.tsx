// src/components/layout/NavBar.tsx
import React, { useState, useRef } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { NavBarProps, NavLink } from '../../types/types';
import logo from '../../assets/images/food-message-icon.png';
import { useNavHandler } from '../hooks/useNavHandler';

const useHoverDelay = (closeDelay = 150) => {
  const timerRef = useRef<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = (i: number) => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    setOpenIndex(i);
  };

  const close = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setOpenIndex(null), closeDelay);
  };

  return { openIndex, open, close };
};

const Dropdown: React.FC<{ items: NavLink[]; onClick: (href: string) => void }> = ({ items, onClick }) => (
  <div className="absolute mt-1 min-w-[14rem] bg-white border shadow z-50 p-2">
    {items.map((sub) => (
      <button
        key={sub.name}
        onClick={() => onClick(sub.href)}
        className="block w-full text-left px-3 py-2 text-gray-700 whitespace-normal break-words hover:text-primary hover:bg-primary_transparent"
      >
        {sub.name}
      </button>
    ))}
  </div>
);

const MobileSubLinks: React.FC<{ items: NavLink[]; onClick: (href: string) => void }> = ({ items, onClick }) => (
  <div className="pl-6 pb-3">
    {items.map((sub) => (
      <button
        key={sub.name}
        onClick={() => onClick(sub.href)}
        className="block w-full text-left px-2 py-2 text-gray-700 break-words"
      >
        {sub.name}
      </button>
    ))}
  </div>
);

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'es';

  const toggle = () => {
    const next = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(next);
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 text-sm font-semibold text-gray-600 hover:text-primary hover:border-primary transition-colors"
      aria-label="Toggle language"
      title={currentLang === 'es' ? 'Switch to English' : 'Cambiar a español'}
    >
      <Globe size={15} />
      <span>{currentLang === 'es' ? 'EN' : 'ES'}</span>
    </button>
  );
};

const NavBar: React.FC<NavBarProps> = ({ isScrolled, isMenuOpen, setIsMenuOpen, navigation }) => {
  const { openIndex, open, close } = useHoverDelay();
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const handleNavigation = useNavHandler();

  const handleClick = (href: string) => {
    handleNavigation(href);
    setIsMenuOpen(false);
    setMobileExpanded(null);
  };

  const linkClasses =
    'text-black px-3 py-2 text-sm font-sans font-semibold hover:text-primary hover:bg-primary_transparent';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'backdrop-blur-md bg-white/90 shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <button
          onClick={() => handleClick('/')}
          className="flex items-center gap-2 focus:outline-none rounded"
          aria-label="Go to homepage"
        >
          <img
            src={logo}
            alt="Food Message Logo"
            className={`h-12 w-12 transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}
          />
          <span
            className={`font-serif font-bold transition-all duration-300 ${
              isScrolled ? 'text-base' : 'text-lg'
            } text-primary`}
          >
            FOOD MESSAGE
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navigation.map((item, i) => {
            const hasSub = !!item.subLinks?.length;
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => hasSub && open(i)}
                onMouseLeave={() => hasSub && close()}
              >
                <button
                  onClick={() => handleClick(item.href)}
                  className={linkClasses}
                  aria-haspopup={hasSub ? 'true' : undefined}
                  aria-expanded={openIndex === i ? 'true' : 'false'}
                >
                  {item.name}
                </button>
                {hasSub && openIndex === i && (
                  <Dropdown items={item.subLinks!} onClick={handleClick} />
                )}
              </div>
            );
          })}

          <div className="ml-2">
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 py-4">
          {navigation.map((item, i) => {
            const hasSub = !!item.subLinks?.length;
            const expanded = mobileExpanded === i;
            return (
              <div key={item.name} className="border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => {
                      if (hasSub) {
                        setMobileExpanded(expanded ? null : i);
                      } else {
                        handleClick(item.href);
                      }
                    }}
                    className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-200"
                  >
                    {item.name}
                  </button>
                  {hasSub && (
                    <button
                      onClick={() => setMobileExpanded(expanded ? null : i)}
                      className="px-4 py-3 text-gray-600"
                      aria-label={expanded ? 'Collapse submenu' : 'Expand submenu'}
                    >
                      {expanded ? '−' : '+'}
                    </button>
                  )}
                </div>
                {hasSub && expanded && (
                  <MobileSubLinks items={item.subLinks!} onClick={handleClick} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default NavBar;