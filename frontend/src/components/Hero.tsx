import React from "react";
import { Github, ExternalLink, Linkedin, Code2 } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/VallepuRohith",
      label: "GitHub",
    },
    {
      icon: Code2,
      href: "https://leetcode.com/u/vallepu_Rohith/",
      label: "LeetCode",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/vallepu-rohith-649715266/",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Vallepu Rohith
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8">
            Future FAANG Engineer 🚀
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Computer Science student passionate about building scalable systems
            and solving complex algorithms. Ready to make an impact in the tech
            industry.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
              >
                <link.icon className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors duration-300" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
