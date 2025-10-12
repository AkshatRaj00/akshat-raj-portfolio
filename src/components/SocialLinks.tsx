'use client';

import { 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  MessageCircle, 
  MessageSquare, 
  BarChart3, 
  BookOpen, 
  Code2, 
  Rocket 
} from 'lucide-react';
import { socialLinks } from '@/lib/data';

const iconMap: { [key: string]: any } = {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  MessageCircle,
  MessageSquare,
  BarChart3,
  BookOpen,
  Code2,
  Rocket,
};

interface SocialLinksProps {
  showLabels?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SocialLinks({ 
  showLabels = false, 
  size = 'md',
  className = '' 
}: SocialLinksProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = iconMap[social.icon];
        
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg group relative`}
            aria-label={social.name}
            title={social.name}
          >
            <Icon className={iconSizes[size]} />
            
            {/* Tooltip */}
            {!showLabels && (
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {social.name}
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></span>
              </span>
            )}
          </a>
        );
      })}
      
      {showLabels && (
        <div className="w-full mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={`${social.name}-label`}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <Icon className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {social.name}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {social.username}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}