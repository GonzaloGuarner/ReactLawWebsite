import { type LucideIcon } from 'lucide-react';

export interface SiteConfig {
  siteName: string;
  tagline: string;
  description: string;
  lawyer: {
    name: string;
    title: string;
    birthPlace: string;
    admitted: string;
    education: string[];
    languages: string;
    bio: string;
  };
  navigation:NavLink[];
  hero: HeroProps;
  contact: ContactInfo;
  practiceAreas: PracticeArea[];
  floatingActions?: FloatingButtonAction[]; 
}

export interface NavBarProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  navigation: NavLink[];
  scrollToSection: (href: string) => void;
}


export interface NavLink {
  name: string;
  href: string;
  subLinks?: { name: string; href: string }[];
}

export interface HeroProps {
  title: string;
  tagline: string;
  ctaText: string;
  backgroundImage: string;
}

export interface PracticeCardProps {
  practice: PracticeArea;
  index: number;
}

export interface PracticeArea {
  title: string;
  description: string;
  image: string;
}

export interface ContactFormProps {
  onClose: () => void;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  linkedin: string;
}

export interface InputFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
}

export interface FloatingButtonAction {
  key: string;
  href: string;
  Icon: LucideIcon;
  label: string;
  className?: string;
  target?: string; 
  rel?: string;
}