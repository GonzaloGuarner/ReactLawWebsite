// src/components/ui/ContactInfo.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

type Props = {
  phone?: string;
  email?: string;
  address?: string;
  whatsapp?: string;
  compact?: boolean;
  layout?: 'grid' | 'stack';
  className?: string;
};

const normalizePhone = (raw?: string) =>
  raw ? raw.replace(/[^\d+]/g, '') : '';

const ContactInfo: React.FC<Props> = ({
  phone,
  email,
  address,
  whatsapp,
  compact = false,
  layout = 'grid',
  className = '',
}) => {
  const { t } = useTranslation();

  const telHref = phone ? `tel:${normalizePhone(phone)}` : undefined;
  const mailHref = email ? `mailto:${email}` : undefined;
  const whatsHref = whatsapp
    ? `https://api.whatsapp.com/send?phone=${normalizePhone(whatsapp)}`
    : undefined;

  const baseTextColor = compact ? 'text-gray-400' : 'text-gray-600';
  const baseTitleColor = compact ? 'text-gray-300' : 'text-gray-800';

  const items = [
    phone && (
      <div key="phone" className="flex items-start space-x-3">
        <Phone size={22} className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
        <div>
          {!compact && (
            <h4 className={`font-semibold ${baseTitleColor} mb-1`}>{t('contact.phone')}</h4>
          )}
          <a href={telHref} className={`${baseTextColor} hover:text-primary transition-colors`}>
            {phone}
          </a>
        </div>
      </div>
    ),
    email && (
      <div key="email" className="flex items-start space-x-3">
        <Mail size={22} className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
        <div>
          {!compact && (
            <h4 className={`font-semibold ${baseTitleColor} mb-1`}>{t('contact.email')}</h4>
          )}
          <a href={mailHref} className={`${baseTextColor} hover:text-primary transition-colors break-all`}>
            {email}
          </a>
        </div>
      </div>
    ),
    address && (
      <div key="address" className="flex items-start space-x-3">
        <MapPin size={22} className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
        <div>
          {!compact && (
            <h4 className={`font-semibold ${baseTitleColor} mb-1`}>{t('contact.address')}</h4>
          )}
          <p className={`${baseTextColor}`}>{address}</p>
        </div>
      </div>
    ),
    whatsapp && (
      <div key="whatsapp" className="flex items-start space-x-3">
        <MessageCircle size={22} className="text-primary mt-1 flex-shrink-0" aria-hidden="true" />
        <div>
          {!compact && (
            <h4 className={`font-semibold ${baseTitleColor} mb-1`}>{t('contact.whatsapp')}</h4>
          )}
          <a
            href={whatsHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseTextColor} hover:text-primary transition-colors`}
          >
            {t('contact.whatsappLabel')}
          </a>
        </div>
      </div>
    ),
  ].filter(Boolean);

  if (layout === 'grid') {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10 ${className}`}>
        {items}
      </div>
    );
  }

  return <div className={`flex flex-col space-y-4 ${className}`}>{items}</div>;
};

export default ContactInfo;