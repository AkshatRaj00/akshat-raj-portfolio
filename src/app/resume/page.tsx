import { Metadata } from 'next';
import { Download, Eye, FileText, Printer } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Download or view my professional resume.',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container-custom text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            <FileText className="h-4 w-4" />
            <span>Professional Resume</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            My <span className="gradient-text">Resume</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my professional experience, skills, and achievements.
          </p>
        </div>
      </section>

      {/* Resume Actions */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-primary inline-flex items-center justify-center group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download PDF
              </a>
              
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center justify-center group"
              >
                <Eye className="mr-2 h-5 w-5" />
                View in Browser
              </a>

              <button
                onClick={() => window.print()}
                className="btn-secondary inline-flex items-center justify-center group"
              >
                <Printer className="mr-2 h-5 w-5" />
                Print
              </button>
            </div>

            {/* Resume Preview Card */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {personalInfo.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {personalInfo.tagline}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  My resume includes detailed information about:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Professional Experience & Work History</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Technical Skills & Expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Education & Certifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Notable Projects & Achievements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    <span>Contact Information</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Note:</strong> This resume is regularly updated to reflect my latest skills and experiences. 
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-12 text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Feel free to reach out for opportunities, collaborations, or just to connect!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Contact Me
                </a>
                <a
                  href="/hire-me"
                  className="btn-outline inline-flex items-center justify-center"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Why Work With Me?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Fast Learner
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Quick to adapt and master new technologies and frameworks
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Problem Solver
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Creative approach to solving complex technical challenges
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Team Player
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Excellent communication and collaboration skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}