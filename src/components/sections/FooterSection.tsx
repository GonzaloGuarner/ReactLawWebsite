import React from 'react';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';
import ContactInfo from '../ui/ContactInfo';
import siteConfig from '../../config/siteConfig';

const FooterSection: React.FC = () => {
  return (
    <footer className="!bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-xl font-bold tracking-wide text-white mb-4">
              FOODMESSAGE
            </h3>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contacto
            </h4>
            <ContactInfo
              phone={siteConfig.contact.phone}
              email={siteConfig.contact.email}
              compact
              layout="stack"
            />
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}`}
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href={siteConfig.contact.linkedin}
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
