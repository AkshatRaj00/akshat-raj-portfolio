'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink, Star } from 'lucide-react';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  liveUrl?: string | null;
  image: string;
  featured?: boolean;
  category: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  github,
  liveUrl,
  image,
  featured,
  category,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
          <Star className="h-3 w-3 fill-current" />
          <span>Featured</span>
        </div>
      )}

      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
        {category}
      </div>

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium group/link"
          >
            <Github className="h-4 w-4 group-hover/link:rotate-12 transition-transform" />
            <span>Code</span>
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium group/link"
            >
              <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}