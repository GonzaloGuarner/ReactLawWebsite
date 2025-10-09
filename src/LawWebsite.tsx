import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Linkedin, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import ContactInfo from './components/ui/ContactInfo';
import HeroSection from './components/ui/HeroSection';
import { useDynamicTitle } from './components/hooks/useDynamicTitle';

import profileImage from './assets/images/profile.webp';


// =================================================================
// 1. TYPE INTERFACES 
// =================================================================
interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  linkedin: string;
}

interface PracticeArea {
  title: string;
  description: string;
  image: string;
}

interface SiteConfig {
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
  contact: ContactInfo;
  practiceAreas: PracticeArea[];
}

interface PracticeCardProps {
  practice: PracticeArea;
  index: number;
}

interface ContactFormProps {
  onClose: () => void;
}
interface InputFieldProps {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
}


// =================================================================
// 2. CONFIGURATION DATA 
// =================================================================
const siteConfig: SiteConfig = {
  siteName: "FOOD MESSAGE",
  tagline: "Asesoría legal y regulatoria especializada en el sector alimentario",
  description: "For more than fifteen years, we have provided specialized legal and regulatory services in the fields of food law, advertising, and consumer protection, helping companies comply with Spanish and EU regulations.",
  lawyer: {
    name: "Silvia Bañares Vilella",
    title: "Abogada especializada en derecho alimentario, publicidad y consumo.",
    birthPlace: "",
    admitted: "",
    education: [
      "Abogada en ejercicio por el Ilustre Colegio de Abogados de Barcelona.",
      "Doctora en Derecho Mercantil por la Universidad de Barcelona.",
      "Mediadora inscrita en el Colegio de Abogados de Barcelona."
    ],
    languages: "",
    bio: "Silvia Bañares es abogada experta en derecho alimentario, publicidad y consumo. Es licenciada y doctora en Derecho Mercantil por la Universidad de Barcelona y mediadora inscrita en el Colegio de Abogados de Barcelona. Actualmente ejerce en Barcelona, centrando su actividad en el derecho alimentario y la docencia. Durante más de quince años ha asesorado a empresas alimentarias, instituciones y agencias de publicidad. Ha publicado diversos artículos y libros sobre legislación alimentaria e imparte conferencias y seminarios sobre las últimas novedades en el sector."
  },
  contact: {
    phone: "+34 609 33 90 50",
    email: "sb@icab.cat",
    address: "Barcelona, Spain",
    whatsapp: "34609339050",
    linkedin: "https://www.linkedin.com/in/silviabanaresabogado/"
  },
  practiceAreas: [
    {
      title: "Derecho Alimentario y Regulación de Productos",
      description: "Asesoramiento integral sobre cumplimiento de la normativa española y europea aplicable a alimentos y sus ingredientes: autorizaciones, registros, declaraciones nutricionales y requisitos de seguridad.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop"
    },
    {
      title: "Publicidad y Protección del Consumidor",
      description: "Revisión y asesoría de campañas publicitarias y claims alimentarios para evitar publicidad engañosa y garantizar conformidad con la normativa de consumo y publicidad en la UE.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop"
    },
    {
      title: "Etiquetado y Cumplimiento de Envases",
      description: "Auditorías y redacción de etiquetas y fichas técnicas: información obligatoria (ingredientes, alérgenos, tabla nutricional, origen) y verificación de claims voluntarios y requisitos de envase.",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=300&fit=crop"
    },
    {
      title: "Comunicación y Gestión de Seguridad Alimentaria",
      description: "Asesoramiento en protocolos de comunicación, gestión de crisis, retirada de productos y notificación de alertas a las autoridades competentes para minimizar riesgos reputacionales y legales.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      title: "Defensa en Procedimientos Administrativos",
      description: "Representación y preparación de alegaciones, recursos y defensas frente a sanciones y procedimientos administrativos iniciados por autoridades sanitarias o de consumo.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
    },
    {
      title: "Formación y Actualización Regulatoria",
      description: "Cursos, talleres y boletines para empresas sobre novedades regulatorias, etiquetado, claims y responsabilidades legales en el sector alimentario, adaptados al equipo y productos.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400&h=300&fit=crop"
    }
  ]
};

// =================================================================
// 3. CONTACT FORM COMPONENT 
// =================================================================
const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Added preventDefault for correct form behavior
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-lg w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <InputField name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
          <InputField name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
          <InputField name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} />
          <InputField name="message" placeholder="How can we help?" value={formData.message} onChange={handleInputChange} textarea />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg font-semibold shadow hover:from-green-700 hover:to-green-800 transition-all"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>

  );
};

const InputField: React.FC<InputFieldProps> = ({ textarea, ...props }) =>
  textarea ? (
    <textarea
      rows={4}
      {...props}
      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
    />
  ) : (
    <input
      type="text"
      {...props}
      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
    />
  );

// =================================================================
// 4. PRACTICE CARD COMPONENT 
// =================================================================
const PracticeCard: React.FC<PracticeCardProps> = ({ practice, index }) => (
  <div
    className={`relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
      // Adjusted column span to prevent a gap in a 4-column grid (lg:grid-cols-4 in LawWebsite)
      // If you intended a different layout, this might need re-adjustment.
      index === 0 || index === 5 ? 'lg:col-span-2' : ''
      }`}
  >
    <img
      src={practice.image}
      alt={practice.title}
      loading="lazy"
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3 className="text-xl font-bold mb-2">{practice.title}</h3>
      <p className="text-sm opacity-90 mb-2">{practice.description}</p>
      <button className="mt-3 text-white border border-white px-4 py-1 text-sm rounded hover:bg-white hover:text-gray-800 transition-colors">
        Go to the section →
      </button>
    </div>
  </div>
);

// =================================================================
// 5. MAIN COMPONENT 
// =================================================================
const LawWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useDynamicTitle(siteConfig.siteName);




  const navigation = [
    { name: 'Profile', href: '#profile' },
    { name: 'Practices', href: '#practices' },
    { name: 'Food Law', href: '#food-law' },
    { name: 'Commerce Law', href: '#commerce-law' },
    { name: 'Contact', href: '#contact' }
  ];

  // FIX: Parameter 'href' explicitly typed as string
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Metadata */}
      <Helmet>
        <html lang="es" />
        <title>{siteConfig.siteName} | {siteConfig.tagline}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="author" content={siteConfig.lawyer.name} />
        <meta property="og:title" content={siteConfig.siteName} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={profileImage} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <link rel="icon" type="image/webp" href={profileImage} />
      </Helmet>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? 'backdrop-blur-md bg-white/90 shadow-md py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`font-serif font-bold cursor-pointer transition-all duration-300 ${isScrolled ? 'text-base' : 'text-lg'} text-gray-800`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              {siteConfig.siteName}
            </div>

            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-gray-800 hover:text-green-600 px-3 py-2 text-sm font-serif font-semibold transition-colors">
                  {item.name}
                </button>
              ))}
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-gray-100 py-4">
              {navigation.map((item) => (
                <button key={item.name} onClick={() => scrollToSection(item.href)} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection
        title={siteConfig.siteName}
        tagline={siteConfig.tagline}
        ctaText="Schedule a Consultation"
        backgroundImage="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=1200"
      />
      <section className="pt-20 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Welcome
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              {siteConfig.description}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing practical, transparent, and timely advice. Our goal is to offer clear solutions and realistic cost estimates, ensuring our clients understand every step of the process.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" data-title="Profile" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Text Column */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                {siteConfig.lawyer.name}
                <br />
                <span className="text-2xl text-gray-600">{siteConfig.lawyer.title}</span>
              </h2>

              <div className="space-y-6 text-gray-700">
                <p>{siteConfig.lawyer.birthPlace}</p>
                <p>{siteConfig.lawyer.admitted}</p>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 border-l-4 border-green-600 pl-4">
                    Educación
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {siteConfig.lawyer.education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 border-l-4 border-green-600 pl-4">
                    Lenguas (Remove)
                  </h3>
                  <p>{siteConfig.lawyer.languages}</p>
                </div>
              </div>
            </div>

            {/* Image + Bio Column */}
            <div className="text-center">
              <img
                src={profileImage}
                alt="Silvia Bañares Vilella"
                loading="lazy"
                className="w-50 h-60 object-contain rounded-[5%] mx-auto mb-6 border-[6px] border-green-600 shadow-md bg-white"
              />
              <p className="text-gray-600 leading-relaxed text-sm max-w-md mx-auto">
                {siteConfig.lawyer.bio}
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Practice Areas */}
      <section id="practices" data-title="Practice Areas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Servicios
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.practiceAreas.map((practice, index) => (
              <PracticeCard key={index} practice={practice} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" data-title="Contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Contact Us
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
                className="bg-green-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-800 transition-colors"
              >
                Send Us a Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-40">
        <a
          href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}`}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
      </div>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  );
};

export default LawWebsite;