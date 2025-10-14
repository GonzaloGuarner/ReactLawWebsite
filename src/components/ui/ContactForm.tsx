import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react'; 
import type { ContactFormProps } from '../../types/types';
import InputField from './InputField';


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

  useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };
  document.addEventListener('keydown', handleEscape);
  return () => document.removeEventListener('keydown', handleEscape);
}, [onClose]);

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
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold shadow hover:bg-primary_focus transition-all"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>

  );
};
export default ContactForm;
