import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Download, ArrowRight, Sparkles, Target, Heart, Zap } from 'lucide-react';
import { personalInfo, companyInfo, experience, stats } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Me',
  description: `Learn more about ${personalInfo.name} - AI Engineer, Full-Stack Developer, and Founder of OnePersonAI.`,
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fadeIn">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-3xl opacity-20 animate-pulse-slow"></div>
                <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 animate-slideInRight">
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>About Me</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
                {personalInfo.tagline}
              </p>

              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I'm an AI Engineer and Full-Stack Developer with a passion for building intelligent 
                  systems that bridge technology and human potential. My journey in tech started with 
                  curiosity about how machines can learn and evolve, leading me to specialize in 
                  artificial intelligence and machine learning.
                </p>
                <p>
                  As the founder of <Link href="/onepersonai" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">OnePersonAI</Link>, 
                  I'm dedicated to creating AI solutions that don't just automate tasks, but truly 
                  understand and empower people. I believe in building technology with empathy, 
                  ethics, and purpose at its core.
                </p>
                <p>
                  When I'm not coding or training models, you'll find me exploring the latest AI 
                  research, contributing to open-source projects, or sharing my knowledge through 
                  blog posts and community engagement.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center group"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="btn-outline inline-flex items-center group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I specialize in building intelligent systems that solve real-world problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                AI/ML Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building intelligent systems using TensorFlow, PyTorch, and cutting-edge machine 
                learning techniques. From predictive models to natural language processing.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Full-Stack Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating responsive, scalable web applications with React, Next.js, Node.js, 
                and modern frameworks. From concept to deployment.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Innovation & Research
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Exploring the frontiers of AI and technology. Building solutions that combine 
                technical excellence with human empathy and ethical considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Experience & Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and achievements
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400 last:border-0 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -translate-x-[9px]"></div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      {exp.duration}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hire-me"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Hire Me
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}