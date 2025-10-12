import { Metadata } from 'next';
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';
import { education, certifications } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Education & Certifications',
  description: 'Academic background and professional certifications.',
};

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container-custom text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            <GraduationCap className="h-4 w-4" />
            <span>Academic Journey</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Education & <span className="gradient-text">Certifications</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic background and continuous learning journey in technology and innovation.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Academic Background
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-xl shadow-lg card-hover animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                    </div>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.location}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                      {edu.duration}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Professional Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Issued: {cert.date}
                      </span>
                      {cert.credentialUrl !== '#' && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          View Credential →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Certification CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Continuously updating skills and earning new certifications
            </p>
            <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold">
              <span>More certifications coming soon</span>
              <span className="animate-pulse">✨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Continuous Learning
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Education doesn't stop at graduation. I believe in continuous learning and staying 
              updated with the latest technologies and industry trends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Self-Learning
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Constantly exploring new technologies through online courses and documentation
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Hands-On Practice
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Building real-world projects to apply theoretical knowledge
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Community Engagement
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Learning from and contributing to the tech community
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's Connect & Learn Together
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            I'm always eager to connect with fellow learners and professionals. Let's share knowledge and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="/blog"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Read My Blog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}