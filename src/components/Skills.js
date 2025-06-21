import React from 'react';
import { 
  FaReact, FaJs, FaCss3Alt, FaHtml5, FaNodeJs, FaDatabase, 
  FaDocker, FaGitAlt, FaLinux, FaWindows, FaPython,
  FaMagento,
  FaCalendarDay
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiMysql, SiLatex, SiCplusplus, SiWireshark, 
  SiNginx,
  SiMaas
} from 'react-icons/si';
import { GrOptimize } from 'react-icons/gr';
import { VscTerminalBash } from 'react-icons/vsc';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "CSS / Tailwind CSS", icon: <FaCss3Alt /> },
      { name: "HTML5", icon: <FaHtml5 /> }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: <SiMysql /> }
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git / GitHub", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Gurobi", icon: <GrOptimize /> },
      { name: "LaTeX", icon: <SiLatex /> },
      { name: "ns-3", icon: <SiNginx /> }
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "C / C++", icon: <SiCplusplus /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Bash Scripting", icon: <VscTerminalBash /> }
    ]
  },
  {
    title: "Platforms",
    skills: [
      { name: "Ubuntu", icon: <FaLinux /> },
      { name: "Kali Linux", icon: <FaLinux /> },
      { name: "Windows", icon: <FaWindows /> },
      { name: "VM Virtualbox", icon: <FaDatabase /> }
    ]
  },
  {
    title: "Cybersecurity & Networking",
    skills: [
      { name: "Burp Suite", icon: <SiMaas /> },
      { name: "Wireshark", icon: <SiWireshark /> },
      { name: "Nmap", icon: <FaLinux /> },
      { name: "Metasploit", icon: <FaMagento /> },
      { name: "Ettercap", icon: <FaLinux /> },
      { name: "Aircrack", icon: <FaCalendarDay /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Technical Skills
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-indigo-400 mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-2 text-gray-300 hover:text-indigo-400 transition-colors duration-300"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
