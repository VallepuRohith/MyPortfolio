
import React from 'react';
import portfolioData from '@/data/portfolio.json';

const Skills = () => {
  const { technical, fundamentals } = portfolioData.skills;

  const SkillBar = ({ skill }: { skill: { name: string; level: number; category?: string } }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-blue-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  const groupedSkills = technical.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof technical>);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-blue-400 mb-4">{category}</h4>
                {skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            ))}
          </div>

          {/* Core Fundamentals */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Core Fundamentals</h3>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              {fundamentals.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>

            {/* MERN Stack Highlight */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-xl font-bold text-white mb-4">MERN Stack Expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech, index) => (
                  <div key={index} className="text-center p-3 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {tech.charAt(0)}
                    </div>
                    <div className="text-white text-sm mt-1">{tech}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
