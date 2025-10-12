import { Metadata } from 'next';
import Link from 'next/link';
import { Rocket, CheckCircle2, Download, ArrowRight } from 'lucide-react';
import { personalInfo, services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Hire Me',
  description: 'Ready to work together? Let\'s build something amazing!',
};

export default function HireMePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container-custom text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
            <Rocket className="h-4 w-4" />
            <span>Let's Work Together</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold">
            Ready to Hire Me?
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            I'm available for freelance projects, full-time opportunities, and consultations. 
            Let's turn your vision into reality!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl text-lg"
            >
              Start a Project
            </Link>
            <a
              href={personalInfo.resumeUrl}
              download
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Can Do For You
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive services to meet all your development needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl shadow-lg animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">
                  {service.icon === 'Code2' ? '💻' : 
                   service.icon === 'MessageSquare' ? '💬' : 
                   service.icon === 'Brain' ? '🧠' : 
                   service.icon === 'TrendingUp' ? '📈' : 
                   service.icon === 'Layers' ? '🎨' : '📊'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Work With Me?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Here's what makes me the right choice for your project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Technical Expertise
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Proficient in AI/ML, full-stack development, and modern frameworks
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Problem Solver
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Creative solutions to complex technical challenges
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Fast & Reliable
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Timely delivery without compromising on quality
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Clear Communication
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Regular updates and transparent project management
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Quality Code
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clean, maintainable, and well-documented code
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always staying updated with latest technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Current Availability
            </h2>
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-6 py-3 rounded-full text-lg font-semibold mb-6">
              <span className="w-3 h-3 bg-green-600 dark:bg-green-400 rounded-full animate-pulse"></span>
              <span>Available for New Projects</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I'm currently accepting new freelance projects and full-time opportunities. 
              Average response time: 24 hours.
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center group text-lg"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How We'll Work Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A simple, transparent process from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Contact
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reach out with your project details
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Discuss
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We'll discuss requirements and timeline
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Develop
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I'll build your solution with regular updates
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Deliver
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Final delivery with documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Let's discuss your project and make it a reality together!
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl inline-block text-lg"
          >
            Contact Me Now
          </Link>
        </div>
      </section>
    </div>
  );
}