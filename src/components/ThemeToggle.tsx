'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/providers';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group ${className}`}
      aria-label="Toggle theme"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <Sun
          className={`absolute inset-0 h-6 w-6 text-yellow-500 transition-all duration-500 ${
            theme === 'dark'
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />

        {/* Moon Icon */}
        <Moon
          className={`absolute inset-0 h-6 w-6 text-blue-500 transition-all duration-500 ${
            theme === 'dark'
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>

      {showLabel && (
        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
          {theme === 'dark' ? 'Dark' : 'Light'} Mode
        </span>
      )}

      {/* Tooltip */}
      {!showLabel && (
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></span>
        </span>
      )}
    </button>
  );
}