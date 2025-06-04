import React from 'react';
import { Code, Trophy, GitBranch, Globe, Award, Target } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';

const Achievements = () => {
  const { achievements } = portfolioData;

  const iconMap = {
    code: Code,
    trophy: Trophy,
    'git-branch': GitBranch,
    globe: Globe,
    award: Award,
    target: Target,
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Achievements & Milestones
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Key accomplishments that showcase my dedication to continuous learning and excellence in software development.
          </p>
        </div>

        {/* Featured Achievement */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">270+ LeetCode Problems Solved</h3>
            <p className="text-lg text-gray-300 mb-6">
              Demonstrating strong problem-solving skills and algorithmic thinking across all difficulty levels
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">80+</div>
                <div className="text-sm text-gray-400">Easy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">160+</div>
                <div className="text-sm text-gray-400">Medium</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">30+</div>
                <div className="text-sm text-gray-400">Hard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.slice(1).map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon as keyof typeof iconMap] || Award;
            
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Projects Completed', value: '10+' },
            { label: 'Technologies Learned', value: '15+' },
            { label: 'GitHub Commits', value: '500+' },
            { label: 'Study Hours', value: '1000+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
