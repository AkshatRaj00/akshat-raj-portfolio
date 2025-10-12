import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, insights, and tutorials on AI, Machine Learning, and Web Development.',
};

export default function BlogPage() {
  const mediumUsername = 'akshatraj00';
  const mediumUrl = `https://medium.com/@${mediumUsername}`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container-custom text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
            <BookOpen className="h-4 w-4" />
            <span>My Blog</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Thoughts & <span className="gradient-text">Insights</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Sharing my knowledge and experiences in AI, machine learning, web development, 
            and everything tech on Medium.
          </p>

          <a
            href={mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center group"
          >
            Visit My Medium Blog
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Medium Integration Info */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Read My Articles on Medium
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                I regularly publish articles about AI/ML, web development, programming tutorials, 
                and tech insights on Medium. Click below to explore my latest posts!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  View All Articles
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href={`https://medium.com/@${mediumUsername}/followers`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center justify-center"
                >
                  Follow on Medium
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics I Write About */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Topics I Write About
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="font-bold text-gray-900 dark:text-white">AI & ML</h3>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">💻</div>
              <h3 className="font-bold text-gray-900 dark:text-white">Web Dev</h3>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-bold text-gray-900 dark:text-white">Data Science</h3>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-bold text-gray-900 dark:text-white">Tutorials</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Medium */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Why I Write on Medium
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Medium provides an excellent platform to share knowledge with a global audience 
              of developers and tech enthusiasts. Through my articles, I aim to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Share Knowledge
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Help others learn from my experiences and discoveries
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Learn & Grow
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Writing helps me deepen my understanding of topics
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Build Community
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Connect with like-minded developers worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700">
        <div className="container-custom text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Never Miss an Article
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Follow me on Medium to get notified about new blog posts and updates.
          </p>
          <a
            href={`https://medium.com/@${mediumUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-xl inline-flex items-center"
          >
            Follow on Medium
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}