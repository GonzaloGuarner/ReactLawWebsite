import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, Linkedin, MessageCircle } from 'lucide-react';

// Configuration object for easy editing
const siteConfig = {
  siteName: "FOOD MESSAGE LAW OFFICE",
  tagline: "Just Eat It",
  description: "For more than thirty years we provide services of unparalleled quality in the areas of corporate, commercial contract, food and real estate law in Greece.",
  lawyer: {
    name: "Silvia Bañares Vilella",
    title: "Dr. jur., Attorney at Law",
    birthPlace: "Born in Piraeus, Greece",
    admitted: "Admitted to the Athens Bar in 1982",
    education: [
      "LL.B., Faculty of Law, Athens, Greece",
      "PhD., Faculty of Law, Frankfurt am Main, Germany"
    ],
    languages: "Fluent in Greek, English and German",
    bio: "In 1988 I settled in Cologne, Germany providing legal advice and representation services to German and other foreign companies for their operations in Greece. In 1990 I founded the European Economic Interest Group CHALDOUPIS & PARTNER EWIV for the purpose of promoting and coordinating services in the field of German, Greek and European law. Through this scheme, for more than fifteen years I have been performing legal support mainly to Greek export businesses in Germany. In 1994 I moved the center of my operations back to Athens. In 1997 I expanded my activities to Cyprus and Serbia. My practice has long been focused on corporate services, commercial contracts, business litigation, and real estate transactions. Over the time, I developed a particular expertise in the area of food law by acting as legal advisor to domestic and foreign companies in the food production and distribution sector. I am (co)author of numerous publications especially in regard to commercial contract and food law, the correspondent of European Food and Feed Law Review (EFFL) in Greece, as well as a founding member of Food Lawyers Network Worldwide (FLN)."
  },
  contact: {
    phone: "+30 697 189 3139",
    email: "charis.chald@icloud.com",
    address: "Athens, Greece",
    whatsapp: "306971893139",
    linkedin: "https://www.linkedin.com/in/charis-a-chaldoupis-205580279/",
    skype: "https://join.skype.com/invite/o1bz4nis3klf"
  },
  practiceAreas: [
    {
      title: "Corporate & Commercial",
      description: "Greece, Cyprus, Serbia",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=300&fit=crop",
      details: "Comprehensive corporate law services including company formation, mergers & acquisitions, and commercial contracts."
    },
    {
      title: "Product Regulatory Compliance",
      description: "Greece, Cyprus",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
      details: "Ensuring products meet regulatory standards and compliance requirements across multiple jurisdictions."
    },
    {
      title: "Business Litigation",
      description: "Greece",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=300&fit=crop",
      details: "Representing businesses in commercial disputes, contract litigation, and regulatory matters."
    },
    {
      title: "Food Law Special",
      description: "Greece, Cyprus",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      details: "Specialized expertise in food law, regulations, and compliance for food industry companies."
    },
    {
      title: "Commerce Law",
      description: "Greece",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
      details: "International commerce law, trade regulations, and cross-border business transactions."
    },
    {
      title: "Real Estate Acquisition & Inheritance",
      description: "Greece",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400&h=300&fit=crop",
      details: "Property acquisition, inheritance law, and real estate transaction services."
    }
  ]
};

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Contact Us</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="*Sender's Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input
            type="tel"
            name="phone"
            placeholder="*Sender's Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            placeholder="*Sender's Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="*Request"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-green-700 text-white py-3 rounded-md font-semibold hover:bg-green-800 transition-colors"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

const PracticeCard = ({ practice, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
        index === 0 || index === 5 ? 'md:col-span-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={practice.image}
        alt={practice.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{practice.title}</h3>
        <p className="text-sm opacity-90 mb-2">{practice.description}</p>
        {isHovered && (
          <p className="text-xs opacity-80 mt-2 transform transition-all duration-300">
            {practice.details}
          </p>
        )}
        <button className="mt-3 text-white border border-white px-4 py-1 text-sm rounded hover:bg-white hover:text-gray-800 transition-colors">
          Go to the section →
        </button>
      </div>
    </div>
  );
};

const LawWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const navigation = [
    { name: 'Profile', href: '#profile' },
    { name: 'Practices', href: '#practices' },
    { name: 'Food Law', href: '#food-law' },
    { name: 'Commerce Law', href: '#commerce-law' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-50 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-lg text-gray-800 cursor-pointer" onClick={() => scrollToSection('#top')}>
              {siteConfig.siteName}
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-800 hover:text-green-600 px-3 py-2 text-sm font-semibold transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-100 py-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Welcome!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              {siteConfig.description}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We truly believe in uncompromised commitment to serve the client: we quickly respond to client demands, ensure cost transparency, deliver clear-cut estimations and solution-oriented advices. Each mandate given to us is implemented in a trustworthy manner and with fruitful outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                {siteConfig.lawyer.name}
                <br />
                <span className="text-2xl text-gray-600">{siteConfig.lawyer.title}</span>
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>{siteConfig.lawyer.birthPlace}</p>
                <p>{siteConfig.lawyer.admitted}</p>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
                  {siteConfig.lawyer.education.map((edu, index) => (
                    <p key={index}>{edu}</p>
                  ))}
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Languages</h3>
                  <p>{siteConfig.lawyer.languages}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
                alt="Silvia Bañares Vilella"
                className="w-48 h-60 object-cover rounded-lg mx-auto mb-6"
              />
              <p className="text-gray-700 leading-relaxed">
                {siteConfig.lawyer.bio.substring(0, 300)}...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practices" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Our Practice Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.practiceAreas.map((area, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-sm opacity-90">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="*Sender's Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="*Sender's Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="*Sender's Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <textarea
                name="message"
                rows="4"
                placeholder="*Request"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-800 transition-colors"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FOODMESSAGE</h3>
              <p className="text-sm text-gray-300">
                2023-2025<br />
                all rights reserved
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>{siteConfig.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>{siteConfig.contact.email}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>{siteConfig.contact.address}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}`}
                  className="bg-green-500 p-2 rounded-full hover:bg-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href={siteConfig.contact.linkedin}
                  className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-40">
        <a
          href={`https://api.whatsapp.com/send/?phone=${siteConfig.contact.whatsapp}&text=Hello, I would like to inquire about legal services.`}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Send Email"
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default LawWebs