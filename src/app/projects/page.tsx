import { Metadata } from 'next';
import { Rocket, Filter } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of AI/ML projects, web applications, and innovative solutions.',
};

export default function ProjectsPage() {
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container-custom text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
            <Rocket className="h-4 w-4" />
            <span>My Work</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my work in AI/ML, full-stack development, and innovative solutions. 
            Each project represents a unique challenge solved with cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          {/* Category Filter - Client Component needed for interactivity */}
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-sm">
              <Filter className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400">All Categories</span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Empty State if no projects */}
          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">{projects.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Projects</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Featured</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">
                {Array.from(new Set(projects.flatMap(p => p.tags))).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold gradient-text">
                {Array.from(new Set(projects.map(p => p.category))).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Technologies Used
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of tools and frameworks I've worked with across different projects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {Array.from(new Set(projects.flatMap(p => p.tags))).map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-900 dark:text-gray-100 rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Have a Project in Mind?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Start a Project
            </a>
            <a
              href="/services"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}