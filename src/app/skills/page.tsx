import { Metadata } from 'next';
import { Code2, Database, Sparkles, Layers } from 'lucide-react';
import SkillBar from '@/components/SkillBar';
import { skills } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Skills & Technologies',
  description: 'Technical skills and expertise in AI/ML, Full-Stack Development, and modern technologies.',
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container-custom text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            <span>Technical Expertise</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, frameworks, and tools I work with to build innovative solutions.
          </p>
        </div>
      </section>

      {/* Programming Languages */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Programming Languages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.programmingLanguages.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl"
              >
                <SkillBar
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index * 100}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks & Libraries */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <Layers className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Frameworks & Libraries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.frameworks.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <SkillBar
                  name={skill.name}
                  level={skill.level}
                  delay={index * 80}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Databases */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
              <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Databases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.databases.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl"
              >
                <SkillBar
                  name={skill.name}
                  level={skill.level}
                  delay={index * 150}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Tools & Platforms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.tools.map((tool, index) => (
              <div
                key={tool.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <SkillBar
                  name={tool.name}
                  level={tool.level}
                  delay={index * 100}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Categories Overview */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Expertise Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                AI & Machine Learning
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Deep Learning, NLP, Computer Vision, Model Deployment
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Frontend Development
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                React, Next.js, Responsive Design, UI/UX
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Backend Development
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Node.js, Python, REST APIs, Microservices
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Data Science
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Data Analysis, Visualization, Statistical Modeling
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}