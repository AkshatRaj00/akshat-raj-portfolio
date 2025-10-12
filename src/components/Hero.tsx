'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Download, ArrowRight, Sparkles } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { personalInfo } from '@/lib/data';

const roles = [
  "AI Engineer",
  "Full-Stack Developer",
  "Machine Learning Expert",
  "Innovator",
  "Problem Solver",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeIn">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium animate-pulse-slow">
              <Sparkles className="h-4 w-4" />
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text block mt-2">
                  {personalInfo.name}
                </span>
              </h1>
              
              {/* Animated Role */}
              <div className="flex items-center space-x-2 text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                <span>I'm a</span>
                <span 
                  className={`gradient-text-blue transition-opacity duration-500 ${
                    isTyping ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {roles[currentRole]}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {personalInfo.tagline}. Building the future of AI at{' '}
              <Link 
                href="/onepersonai" 
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                OnePersonAI
              </Link>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Connect with me:
              </p>
              <SocialLinks size="md" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Lines of Code
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Technologies
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fadeIn">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
              
              {/* Profile Image */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl animate-bounce-slow">
                <div className="text-2xl">🚀</div>
              </div>
              
              <div className="absolute bottom-10 -left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="text-2xl">💡</div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl animate-bounce-slow" style={{ animationDelay: '2s' }}>
                <div className="text-2xl">🎯</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
            <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}