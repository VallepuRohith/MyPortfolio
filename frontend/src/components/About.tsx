
import React from 'react';
import { GraduationCap, Code, Target, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Final-Year CS Student',
      description: 'Computer Science major with strong academic foundation'
    },
    {
      icon: Code,
      title: '300+ LeetCode Problems',
      description: 'Strong problem-solving skills and algorithmic thinking'
    },
    {
      icon: Zap,
      title: 'Full-Stack Developer',
      description: 'Experience building scalable web applications'
    },
    {
      icon: Target,
      title: 'FAANG Aspirant',
      description: 'Seeking SWE roles to apply technical expertise'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a final-year Computer Science student with a passion for creating innovative solutions 
              through code. With over 300 LeetCode problems solved, I've developed strong analytical 
              and problem-solving skills that I apply to real-world development challenges.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans the full-stack development spectrum, with particular strength in the 
              MERN stack. I'm passionate about building scalable systems, optimizing algorithms, and 
              creating user-centric applications that make a difference.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Currently seeking Software Engineering roles where I can apply my skills in Python, 
              Data Structures & Algorithms, and web development to contribute to impactful projects 
              and continue growing as a developer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
