'use client';

import { useState } from 'react';
import { Code2, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { services } from '@/lib/data';
import emailjs from '@emailjs/browser';

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Submitting request...' });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget || 'Not specified',
          timeline: formData.timeline || 'Not specified',
          description: formData.description,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus({ 
        type: 'success', 
        message: '✅ Request submitted! I will get back to you within 24 hours.' 
      });

      setFormData({ name: '', email: '', service: '', budget: '', timeline: '', description: '' });
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);

    } catch (error) {
      console.error('Service request error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to submit. Please email at akshatgyan2004@gmail.com' 
      });
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container-custom text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium">
            <Code2 className="h-4 w-4" />
            <span>What I Offer</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            My <span className="gradient-text">Services</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From AI solutions to full-stack development, I offer comprehensive services to bring your ideas to life.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-xl shadow-lg card-hover animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">
                  {service.icon === 'Code2' ? '💻' : 
                   service.icon === 'MessageSquare' ? '💬' : 
                   service.icon === 'Brain' ? '🧠' : 
                   service.icon === 'TrendingUp' ? '📈' : 
                   service.icon === 'Layers' ? '🎨' : '📊'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Request a Service
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Fill out the form below and I'll get back to you within 24 hours
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select budget</option>
                      <option value="<$1000">Less than $1,000</option>
                      <option value="$1000-$5000">$1,000 - $5,000</option>
                      <option value="$5000-$10000">$5,000 - $10,000</option>
                      <option value=">$10000">More than $10,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="1 month">1 month</option>
                      <option value="2-3 months">2-3 months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="textarea-field"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                </div>

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
                    {status.type === 'success' && <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />}
                    {status.type === 'error' && <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />}
                    {status.type === 'loading' && <Loader2 className="h-5 w-5 flex-shrink-0 mt-0.5 animate-spin" />}
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.type === 'loading' ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose Me?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quick turnaround without compromising quality
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Quality Focused
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Clean code, best practices, and modern standards
              </p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Clear Communication
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Regular updates and transparent collaboration
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
