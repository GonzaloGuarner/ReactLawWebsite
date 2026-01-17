// src/config/siteConfig.ts
import type { SiteConfig } from '../types/types';
import { Mail, MessageCircle, Phone } from 'lucide-react';


const contact = {
  phone: "+34 937 595 171",
  email: "info@food-message.com",
  address: "Barcelona, Spain",
  whatsapp: "34606785052",
  linkedin: "https://www.linkedin.com/in/silviabanaresabogado/"
};

const siteConfig: SiteConfig = {
  siteName: "FOOD MESSAGE",
  tagline: "Asesoría legal y regulatoria especializada en el sector alimentario",
  description: "Food Message es un proyecto liderado por Silvia Bañares, abogada especializada en derecho alimentario, publicidad y consumo, con más de veinticinco años de experiencia asesorando a empresas, organizaciones y agencias del sector alimentario en el ámbito legal y regulatorio.",

  navigation: [
    { name: 'Perfil', href: '#profile' },
    {
      name: 'Servicios',
      href: '#practices',
      subLinks: [
        { name: 'Derecho Alimentario', href: '/derecho-alimentario' },
        { name: 'Derecho Mercantil', href: '/derecho-mercantil' },
        { name: 'Derecho de Consumo', href: '/derecho-consumo' }
      ]
    },
    { name: 'Publicaciones', href: '/publications' },
    { name: 'Contacto', href: '#contact' }
  ],

  lawyer: {
    name: "Silvia Bañares Vilella",
    title: "Abogada especializada en derecho alimentario, mercantil y del consumo.",
    birthPlace: "",
    admitted: "",
    education: [
      "Abogada en ejercicio por el Ilustre Colegio de Abogados de Barcelona (ICAB).",
      "Doctora en Derecho Mercantil por la Universidad de Barcelona.",
      "Miembro del Ilustre Colegio de Abogados de Barcelona (ICAB).",
      "Associació Catalana Ciències de l'Alimentació (ACCA).",
      "Asociación Iberoamericana para el Derecho Alimentario (AIBADA).",
      "Centro Europeo para el Derecho del Consumo."
    ],
    languages: "",
    bio: "Silvia Bañares es abogada experta en derecho alimentario, publicidad y consumo. Es licenciada y doctora en Derecho Mercantil por la Universidad de Barcelona y mediadora inscrita en el Colegio de Abogados de Barcelona. Actualmente ejerce en Barcelona, centrando su actividad en el derecho alimentario y la docencia. Durante más de veinticinco años ha asesorado a empresas alimentarias, instituciones y agencias de publicidad. Ha publicado diversos artículos y libros sobre legislación alimentaria e imparte conferencias y seminarios sobre las últimas novedades en el sector."
  },

  hero: {
    title: "FOOD MESSAGE",
    tagline: "Asesoría legal y regulatoria especializada en el sector alimentario",
    ctaText: "Programe una consulta",
    backgroundImage: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1200"
  },

  contact,

  practiceAreas: [
    {
      title: "Derecho Alimentario",
      description: "Cumplimiento de la normativa alimentaria española y europea: etiquetado, seguridad, autorizaciones y declaraciones nutricionales.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop",
      href: '/derecho-alimentario'
    },
    {
      title: "Derecho Mercantil",
      description: "Asesoramiento jurídico para sociedades, contratos comerciales, y resolución de conflictos empresariales.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
      href: '/derecho-mercantil'
    },
    {
      title: "Derecho de Consumo",
      description: "Defensa y cumplimiento de la normativa de consumo, cláusulas abusivas, publicidad y derechos del consumidor.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
      href: '/derecho-consumo'
    }
  ],

  floatingActions: [
    {
      key: 'whatsapp',
      href: `https://api.whatsapp.com/send/?phone=${contact.whatsapp}`,
      Icon: MessageCircle,
      label: 'Chat on WhatsApp',
      className: 'bg-green-500 hover:bg-green-600'
    },
    {
      key: 'email',
      href: `mailto:${contact.email}`,
      Icon: Mail,
      label: 'Send an Email',
      className: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      key: 'phone',
      href: `tel:${contact.phone}`,
      Icon: Phone,
      label: 'Call Us Now',
      className: 'bg-red-500 hover:bg-red-600'
    }
  ]
};

export default siteConfig;