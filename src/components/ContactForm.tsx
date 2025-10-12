'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // EmailJS Integration with your credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_lkya0ob';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'EipYaN4nPhYUxoZYQ';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Akshat Raj',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you within 24 hours.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try emailing directly at akshatgyan2004@gmail.com',
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="john@example.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="Project Inquiry"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-900 dark:text-white mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="textarea-field"
          placeholder="Tell me about your project..."
        />
      </div>

      {/* Status Messages */}
      {status.type !== 'idle' && (
        <div
          className={`p-4 rounded-lg flex items-start space-x-3 ${
            status.type === 'success'
              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
              : status.type === 'error'
              ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
              : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
          }`}
        >
          {status.type === 'success' && (
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
          )}
          {status.type === 'error' && (
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          )}
          {status.type === 'loading' && (
            <Loader2 className="h-5 w-5 flex-shrink-0 mt-0.5 animate-spin" />
          )}
          <p className="text-sm font-medium">{status.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.type === 'loading'}
        className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {status.type === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      {/* Privacy Note */}
      <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
        Your information is safe and will never be shared with third parties.
      </p>
    </form>
  );
}