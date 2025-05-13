
import React, { useState } from 'react';
import { Button } from './ui/button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    setSubmitError(null);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="neo-input w-full"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="neo-input w-full"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block font-bold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="neo-input w-full resize-none"
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="neo-button bg-neon-green disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      
      {submitMessage && (
        <div className="bg-pastel-green border-2 border-black p-4 mt-4">
          {submitMessage}
        </div>
      )}
      
      {submitError && (
        <div className="bg-pastel-pink border-2 border-black p-4 mt-4 text-red-600">
          {submitError}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
