// src/config/useSiteConfig.ts
import { useTranslation } from 'react-i18next';
import type { SiteConfig } from '../types/types';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import practiceImage1 from '../assets/images/food-message-logo.png';

const contact = {
  phone: '+34 609 33 90 50',
  email: 'info@food-message.com',
  address: 'Barcelona, Spain',
  whatsapp: '34609339050',
  linkedin: 'https://www.linkedin.com/in/silviabanaresabogado/',
};

export function useSiteConfig(): SiteConfig {
  const { t } = useTranslation();

  const practiceImages = [
    'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop',
  ];

  const practiceHrefs = ['/derecho-alimentario', '/derecho-mercantil', '/derecho-consumo'];

  const practiceAreas = (t('practices.areas', { returnObjects: true }) as Array<{ title: string; description: string }>).map(
    (area, i) => ({
      title: area.title,
      description: area.description,
      image: practiceImages[i],
      href: practiceHrefs[i],
    })
  );

  return {
    siteName: 'FOOD MESSAGE',
    tagline: t('hero.tagline'),
    description: t('welcome.description'),

    navigation: [
      { name: t('nav.profile'), href: '#profile' },
      {
        name: t('nav.services'),
        href: '#practices',
        subLinks: [
          { name: t('nav.derechoAlimentario'), href: '/derecho-alimentario' },
          { name: t('nav.derechoMercantil'), href: '/derecho-mercantil' },
          { name: t('nav.derechoConsumo'), href: '/derecho-consumo' },
        ],
      },
      { name: t('nav.publications'), href: '/publications' },
      { name: t('nav.contact'), href: '#contact' },
    ],

    lawyer: {
      name: 'Silvia Bañares Vilella',
      title: t('profile.lawyerTitle'),
      birthPlace: '',
      admitted: '',
      education: t('profile.education', { returnObjects: true }) as string[],
      languages: '',
      bio: t('profile.bio'),
    },

    hero: {
      title: 'FOOD MESSAGE',
      tagline: t('hero.tagline'),
      ctaText: t('hero.cta'),
      ctaHref: '#contact',
      backgroundImage:
        'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1200',
    },

    contact,

    practiceAreas,

    floatingActions: [
      {
        key: 'whatsapp',
        href: `https://api.whatsapp.com/send/?phone=${contact.whatsapp}`,
        Icon: MessageCircle,
        label: 'Chat on WhatsApp',
        className: 'bg-green-500 hover:bg-green-600',
      },
      {
        key: 'email',
        href: `mailto:${contact.email}`,
        Icon: Mail,
        label: 'Send an Email',
        className: 'bg-blue-600 hover:bg-blue-700',
      },
      {
        key: 'phone',
        href: `tel:${contact.phone}`,
        Icon: Phone,
        label: 'Call Us Now',
        className: 'bg-red-500 hover:bg-red-600',
      },
    ],
  };
}