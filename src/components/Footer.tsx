'use client';

import Link from 'next/link';
import { Heart, Mail, MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { personalInfo, companyInfo } from '@/lib/data';

const footerLinks = {
  quickLinks: [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Education', href: '/education' },
  ],
  services: [
    { name: 'Web Development', href: '/services' },
    { name: 'AI Solutions', href: '/services' },
    { name: 'Chatbot Development', href: '/services' },
    { name: 'Hire Me', href: '/hire-me' },
  ],
  company: [
    { name: 'Vision', href: '/vision' },
    { name: 'OnePersonAI', href: '/onepersonai' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {personalInfo.tagline}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Mail className="h-4 w-4" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2 mb-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href={companyInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold gradient-text hover:opacity-80 transition-opacity"
              >
                {companyInfo.name} →
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-8">
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              © {currentYear} {personalInfo.name}. Made with{' '}
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current animate-pulse" />{' '}
              by {personalInfo.name.split(' ')[0]}
            </p>
            <div className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}