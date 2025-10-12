import { Metadata } from 'next';
import Link from 'next/link';
import { Rocket, Target, Users, Zap, Brain, Heart, Globe, ArrowRight } from 'lucide-react';
import { companyInfo, personalInfo, projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'OnePersonAI',
  description: companyInfo.description,
};

export default function OnePersonAIPage() {
  const aiProjects = projects.filter(p => p.category === 'AI/ML');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <div className="container-custom relative z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
            <Rocket className="h-4 w-4" />
            <span>Innovation Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold">
            {companyInfo.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {companyInfo.tagline}
          </p>

          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {companyInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Work With Us
            </Link>
            <a
              href={companyInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Visit Website
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
              <Target className="h-4 w-4" />
              <span>Our Mission</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Building AI That <span className="gradient-text">Empowers Humanity</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {companyInfo.mission}
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive AI solutions and services to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                AI Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Custom AI/ML solutions tailored to your specific business needs and challenges.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Automation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intelligent automation platforms that simplify workflows and boost productivity.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Consulting
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expert guidance on AI strategy, implementation, and best practices.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Empathy-First AI
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building AI systems that understand and respond with genuine empathy.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Global Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Solutions designed to create positive impact on a global scale.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pushing the boundaries of what's possible with cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Projects Showcase */}
      {aiProjects.length > 0 && (
        <section className="section-padding bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our AI Projects
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Real-world applications of AI technology making a difference
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiProjects.slice(0, 3).map((project, index) => (
                <div
                  key={project.id}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl shadow-lg card-hover animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center"
                  >
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="btn-primary inline-flex items-center group"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Founder Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-16 w-16" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Founder & CEO</h3>
                  <p className="text-xl">{personalInfo.name}</p>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Meet the Founder
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {personalInfo.name} founded OnePersonAI with a vision to create AI systems 
                  that truly understand and empower people. With expertise in AI/ML and 
                  full-stack development, the mission is to make intelligent technology 
                  accessible to everyone.
                </p>
                <Link
                  href="/about"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center"
                >
                  Learn More About Me
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Let's discuss how OnePersonAI can help you leverage the power of artificial 
            intelligence to achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl text-lg"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}