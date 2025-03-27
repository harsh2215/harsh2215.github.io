import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Security Assessment - Hungama Digital Media",
    description: [
      "Bypassed OTP authentication using automated scripts for user impersonation",
      "Extracted user data by reverse engineering API endpoints",
      "Developed tools to bypass content protection for premium media access",
      "Documented vulnerabilities in authentication and content distribution"
    ],
    skills: ["Python", "Burp Suite", "HTTP Requests", "Reverse Engineering", "API Security"],
    duration: "December 2024 - January 2025",
    github: null
  },
  {
    title: "ULD Packing Optimization",
    description: [
      "Proposed an efficient ULD packing solution for FedEx at the InterIIT Tech Meet 13.0 with 80% volume efficiency.",
      "Implemented package constraints for orientation, stacking, and weight distribution",
      "Created visualization system for package arrangement optimization",
      "Integrated priority-based shipment handling"
    ],
    skills: ["Gurobi Optimizer", "Linear Programming", "Python", "3D Algorithms", "Optimization"],
    duration: "November 2024 - December 2024",
    github: "https://github.com/srcwap7/3D-Knapsack"
  },
  {
    title: "Custom Congestion Control Algorithm",
    description: [
      "Enhanced TCP NewReno with Hystart for optimized slow start",
      "Built monitoring system for congestion window and RTT analysis",
      "Integrated packet-level tracking using AsciiTraceHelper",
      "Added adaptive thresholds based on network conditions"
    ],
    skills: ["C++", "ns-3 simulator", "TCP/IP", "Network Protocols", "Performance Analysis"],
    duration: "October 2024",
    github: "https://github.com/harsh2215/Computer_Networks/tree/main/Assignment-4/2_B"
  },
  {
    title: "Secure File Compression Tool",
    description: [
      "Implemented a state of the art SPN-based encryption system with proper key scheduling",
      "Implemented efficient padding for variable-length data blocks",
      "Integrated cipher implementation with Huffman encoding for lossless compression",
    ],
    skills: ["Cryptography", "Python", "Data Compression", "System Design"],
    duration: "November 2024",
    github: "https://github.com/harsh2215/Baksheesh/tree/main/software"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-4">Projects</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A collection of my work in security research, optimization, networking, and cryptography
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg p-6 shadow-lg transition-all duration-300 flex flex-col min-h-[300px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
              
              <div className="space-y-3 mb-4 flex-grow">
                {project.description.map((desc, i) => (
                  <p key={i} className="text-gray-400 text-sm">
                    • {desc}
                  </p>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-700">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-sm">{project.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
