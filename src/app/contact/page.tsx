import { Metadata } from 'next';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Get in touch with me for projects, collaborations, or just to say hi!',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container-custom text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            <MessageSquare className="h-4 w-4" />
            <span>Get In Touch</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-fadeIn">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-start space-x-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {personalInfo.email}
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                    <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Location
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>

                  {/* Phone (if you want to add) */}
                  {personalInfo.phone && personalInfo.phone !== '+91 XXXXXXXXXX' && (
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="flex items-start space-x-4 p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl hover:shadow-lg transition-all group"
                    >
                      <div className="w-12 h-12 bg-green-600 dark:bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          Phone
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {personalInfo.phone}
                        </p>
                      </div>
                    </a>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="animate-fadeIn" style={{ animationDelay: '150ms' }}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Connect on Social Media
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Follow me on social platforms for updates and insights
                </p>
                <SocialLinks showLabels={false} size="lg" />
              </div>

              {/* Quick Response Time */}
              <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl animate-fadeIn" style={{ animationDelay: '300ms' }}>
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                      Quick Response
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      I aim to respond to all inquiries within 24 hours. For urgent matters, 
                      please mention "URGENT" in the subject line.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Send Me a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  What's your typical response time?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I typically respond to all inquiries within 24 hours on business days. 
                  For urgent matters, I'll try to respond even sooner.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Do you take on freelance projects?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! I'm open to freelance opportunities that align with my skills in AI/ML 
                  and full-stack development. Check out my <a href="/services" className="text-blue-600 dark:text-blue-400 hover:underline">services page</a> for more details.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Are you available for consultations?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Absolutely! I offer technical consultations for AI/ML projects, system architecture, 
                  and technology stack decisions. Let's discuss your needs.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Can we schedule a call?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes! After initial contact through email or the form above, we can schedule a 
                  call to discuss your project in detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Let's turn your ideas into reality. I'm here to help you build something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/hire-me"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Hire Me Now
            </a>
            <a
              href="/projects"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}