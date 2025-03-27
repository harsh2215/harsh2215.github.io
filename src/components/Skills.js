import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaCss3Alt, FaHtml5, FaNodeJs, FaDatabase, 
  FaDocker, FaGitAlt, FaLinux, FaWindows, FaPython,
  FaMagic,
  FaMagento,
  FaEbay,
  FaEllo,
  FaAd,
  FaAirFreshener,
  FaAdjust,
  FaCalendarDay
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiMysql, SiLatex, SiCplusplus, 
  SiBurpsuite, SiWireshark, SiGnubashmysql, 
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
      { name: "VM Virtualbox", icon: <FaDatabase /> } // VM Virtualbox logo missing
    ]
  },
  {
    title: "Cybersecurity & Networking",
    skills: [
      { name: "Burp Suite", icon: <SiMaas /> }, // Burp Suite logo missing
      { name: "Wireshark", icon: <SiWireshark /> },
      { name: "Nmap", icon: <FaLinux /> }, // Nmap logo missing
      { name: "Metasploit", icon: <FaMagento /> },  // Matasploit logo missing
      { name: "Ettercap", icon: <FaLinux /> },  // Ettercap logo missing
      { name: "Aircrack", icon: <FaCalendarDay /> }   // Aircrack logo missing
    ]
  }
];

export default function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="py-20 bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-400 flex items-center gap-2">
                    <span className="text-xl text-indigo-400">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
