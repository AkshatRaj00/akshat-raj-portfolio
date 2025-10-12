import Hero from '@/components/Hero';
import Link from 'next/link';
import { ArrowRight, Code2, Sparkles, Rocket, Brain, Users } from 'lucide-react';
import { projects, stats, services } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideInLeft">
              <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>About Me</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Building the Future of{' '}
                <span className="gradient-text">Artificial Intelligence</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I'm an AI Engineer and Full-Stack Developer passionate about creating intelligent 
                systems that bridge technology and human potential. As the founder of OnePersonAI, 
                I'm on a mission to develop AI that uplifts humanity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="btn-primary inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/vision" className="btn-outline">
                  My Vision
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slideInRight">
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover">
                  <Brain className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    AI/ML Expert
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Building intelligent systems with TensorFlow, PyTorch & LangChain
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover">
                  <Users className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    OnePersonAI
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Founder & CEO building AI solutions for humanity
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover">
                  <Code2 className="h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Full-Stack Dev
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React, Node.js, Python - building end-to-end solutions
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover">
                  <Rocket className="h-12 w-12 text-pink-600 dark:text-pink-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Innovator
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pushing boundaries with cutting-edge technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
              <Rocket className="h-4 w-4" />
              <span>Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Latest Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore some of my recent work in AI, machine learning, and full-stack development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center">
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

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-medium">
              <Code2 className="h-4 w-4" />
              <span>What I Offer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Services & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From AI solutions to full-stack development, I bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{service.icon === 'Code2' ? '💻' : service.icon === 'MessageSquare' ? '💬' : service.icon === 'Brain' ? '🧠' : service.icon === 'TrendingUp' ? '📈' : service.icon === 'Layers' ? '🎨' : '📊'}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-outline inline-flex items-center group"
            >
              Request a Service
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Work Together?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Let's build something amazing together. Whether it's AI, web development, or innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hire-me"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl hover:scale-105 duration-300"
            >
              Hire Me
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}