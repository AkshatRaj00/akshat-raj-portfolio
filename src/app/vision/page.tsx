import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Target, Heart, Zap, Globe, Users, Brain } from 'lucide-react';
import { vision, companyInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Future Vision',
  description: 'My vision for the future of AI and OnePersonAI - Building intelligent systems that empower humanity.',
};

export default function VisionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            <span>The Future Awaits</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {vision.title}
          </h1>
          
          <p className="text-2xl md:text-3xl font-semibold text-purple-100 italic max-w-4xl mx-auto">
            "{vision.subtitle}"
          </p>
        </div>
      </section>

      {/* Main Vision Statement */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                My Vision for <span className="gradient-text">The Future</span>
              </h2>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {vision.description.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 animate-fadeIn"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Building */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="h-4 w-4" />
              <span>What I'm Building</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              The Building Blocks of Tomorrow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vision.building.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg card-hover animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  {index === 0 && <Heart className="h-8 w-8 text-white" />}
                  {index === 1 && <Zap className="h-8 w-8 text-white" />}
                  {index === 2 && <Brain className="h-8 w-8 text-white" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Term Vision */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
              The Long Vision
            </h2>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 md:p-12 rounded-xl text-center">
              <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed">
                {vision.longVision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Empathy
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Technology that understands human emotions and needs
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Purpose
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building solutions that create meaningful impact
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Accessibility
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Making AI available to everyone on Earth
              </p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Community
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Growing together through shared knowledge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="section-padding bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Sparkles className="h-16 w-16 mx-auto text-white/80" />
            <blockquote className="text-3xl md:text-4xl font-bold leading-relaxed">
              "{vision.quote}"
            </blockquote>
            <div className="text-xl text-purple-100">
              - Akshat Raj
            </div>
          </div>
        </div>
      </section>

      {/* Join the Journey */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Join Me on This Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Whether you're a fellow developer, entrepreneur, or just someone passionate about 
              the future of AI, let's connect and build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/onepersonai"
                className="btn-primary inline-flex items-center justify-center"
              >
                Learn About OnePersonAI
              </Link>
              <Link
                href="/contact"
                className="btn-outline inline-flex items-center justify-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}