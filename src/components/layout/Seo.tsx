// src/components/layout/Seo.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import siteConfig from '../../config/siteConfig';
import profileImage from '../../assets/images/profile.webp';

interface SeoProps {
  title?: string;
  description?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  if (typeof window === 'undefined') return '';
  const origin = window.location.origin;
  const absoluteImageUrl = origin ? `${origin}${profileImage}` : profileImage;
    return (
  <Helmet>
    <html lang="es" />
    <title>{title ? `${title} | ${siteConfig.siteName}` : siteConfig.siteName}</title>
    <meta name="description" content={description || siteConfig.description} />
    <meta name="author" content={siteConfig.lawyer.name} />
    <meta property="og:title" content={title || siteConfig.siteName} />
    <meta property="og:description" content={description || siteConfig.description} />
    <meta property="og:image" content={absoluteImageUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_ES" />
    <link rel="icon" type="image/webp" href={profileImage} />
  </Helmet>
    )
  };

export default Seo;
