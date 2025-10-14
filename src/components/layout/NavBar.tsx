// src/components/layout/NavBar.tsx
import React, { useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { NavBarProps } from '../../types/types';
import logo from '../../assets/images/food-message-icon.png';

const NavBar: React.FC<NavBarProps> = ({
  isScrolled,
  isMenuOpen,
  setIsMenuOpen,
  navigation,
  scrollToSection, // optional in your types, will be used when present for anchors
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Dropdown open index for desktop; mobile uses simple expand toggle
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(null);
  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const openDropdown = (i: number) => {
    clearTimer();
    setOpenIndex(i);
  };

  const closeDropdownWithDelay = (delay = 120) => {
    clearTimer();
    timerRef.current = window.setTimeout(() => setOpenIndex(null), delay);
  };

  const handleClick = (href: string) => {
    if (!href) return;
    // Route paths
    if (href.startsWith('/')) {
      navigate(href);
      setIsMenuOpen(false);
      return;
    }
    // Anchor on same site
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        // safe selector: anchors start with '#'
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // ask homepage to scroll after navigation
        navigate('/', { state: { scrollTo: href } });
      }
      setIsMenuOpen(false);
      return;
    }
    // external url
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener');
      setIsMenuOpen(false);
      return;
    }
    // fallback: attempt to treat as selector if it starts with valid selector chars
    try {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } catch {
      // ignore invalid selector (no more crashing)
    }
    setIsMenuOpen(false);
  };


  const link = 'text-black px-3 py-2 text-sm font-serif font-semibold';
  const dropdown = 'absolute mt-1 min-w-[14rem] bg-white border shadow z-50 p-2';
  const dropdownItem = 'block w-full text-left px-3 py-2 text-sm text-gray-700 whitespace-normal break-words';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'backdrop-blur-md bg-white/90 shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <img src={logo} alt="Logo" className={`h-12 w-12 transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`} />
        <span className={`font-serif font-bold transition-all duration-300 ${isScrolled ? 'text-base' : 'text-lg'} text-primary`}>FOOD MESSAGE</span>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item, i) => {
            const subs = (item as any).subLinks; // uses subLinks from your existing siteConfig
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => (subs ? openDropdown(i) : undefined)}
                onMouseLeave={() => (subs ? closeDropdownWithDelay() : undefined)}
              >
                <button
                  onClick={() => (handleClick(item.href))}
                  onFocus={() => (subs ? openDropdown(i) : undefined)}
                  onBlur={() => (subs ? closeDropdownWithDelay() : undefined)}
                  className={`${link} hover:text-primary hover:bg-primary_transparent`}
                  aria-haspopup={subs ? 'true' : undefined}
                  aria-expanded={openIndex === i ? 'true' : 'false'}
                >
                  {item.name}
                </button>

                {subs && openIndex === i && (
                  <div
                    // keep open while hovering dropdown
                    onMouseEnter={() => openDropdown(i)}
                    onMouseLeave={() => closeDropdownWithDelay()}
                    onFocus={() => openDropdown(i)}
                    onBlur={() => closeDropdownWithDelay()}
                    className={dropdown}
                  >
                    {subs.map((s: { name: string; href: string }) => (
                      <button
                        key={s.name}
                        onClick={() => handleClick(s.href)}
                        className={`${dropdownItem}  hover:text-primary hover:bg-primary_transparent`}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 py-4">
          {navigation.map((item, i) => {
            const subs = (item as any).subLinks;
            const expanded = mobileExpanded === i;
            return (
              <div key={item.name} className="border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => (subs ? setMobileExpanded(expanded ? null : i) : handleClick(item.href))}
                    className="w-full text-left px-4 py-3 text-gray-800"
                  >
                    {item.name}
                  </button>
                  {subs && (
                    <button
                      onClick={() => setMobileExpanded(expanded ? null : i)}
                      className="px-4 py-3 text-gray-600"
                      aria-label={expanded ? 'Collapse' : 'Expand'}
                    >
                      {expanded ? '−' : '+'}
                    </button>
                  )}
                </div>

                {subs && expanded && (
                  <div className="pl-6 pb-3">
                    {subs.map((s: { name: string; href: string }) => (
                      <button
                        key={s.name}
                        onClick={() => handleClick(s.href)}
                        className="block w-full text-left px-2 py-2 text-gray-700"
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
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
