import { FaGithub } from 'react-icons/fa';

const projects = [
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
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold text-center text-white mb-4">Projects</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A collection of my projects 
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 flex flex-col min-h-[300px]"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
