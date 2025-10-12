'use client';

import { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  icon?: string;
  delay?: number;
}

export default function SkillBar({ name, level, icon, delay = 0 }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, delay);

    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="space-y-2 animate-fadeIn" style={{ animationDelay: `${delay}ms` }}>
      {/* Skill Name and Level */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {icon && <span className="text-xl">{icon}</span>}
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {name}
          </span>
        </div>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="skill-bar relative">
        <div
          className="skill-progress relative"
          style={{ width: `${width}%` }}
        >
          {/* Animated Shine Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
          </div>
        </div>
      </div>
    </div>
  );
}