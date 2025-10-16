import React, { useState } from 'react';
import ContactForm from '../ui/ContactForm';
import ContactInfo from '../ui/ContactInfo';
import siteConfig from '../../config/siteConfig';

const ContactSection: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section id="contact" data-title="Contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Contacto
          </h2>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="mb-8">
            <ContactInfo
              phone={siteConfig.contact.phone}
              email={siteConfig.contact.email}
              address={siteConfig.contact.address}
              whatsapp={siteConfig.contact.whatsapp}
              layout="grid"
            />
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary_focus transition-colors"
            >
              Escríbenos un mensaje!
            </button>
          </div>
        </div>
      </div>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </section>
  );
};

export default ContactSection;
