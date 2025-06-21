import { FaGithub } from 'react-icons/fa';

const experiences = [
  {
    title: "Matrix Profile meets BGP: Exploring MP Algorithms for BGP Time Series Anomaly Detection",
    role: "Research Paper (Publication Status: Under Review - ACM IMC 2025)",
    duration: "January 2025 - May 2025",
    description: [
      "Evaluated 7 distinct Matrix Profile algorithms by generating profiles for three key BGP features: Announcements, Withdrawals and Average AS-Path length",
      "Explored Multi-dimensional matrix profile algorithm in BGP anomaly detection and Average AS-Path length feature for the first time",
      "Conducted detailed time metric analysis on standard benchmark datasets to assess scalability",
      "Identified optimal algorithms for large-scale BGP anomaly detection systems",
      "Paper submitted to ACM Internet Measurement Conference (IMC) 2025"
    ],
    skills: ["Time Series Analysis", "Matrix Profile", "Python", "BGP Analysis", "Performance Benchmarking", "Research"],
    github: null
  },
  {
    title: "Security Assessment - Hungama Digital Media",
    role: "Security Research Project (de.ci.phe.red Lab, IIT Bhilai)",
    duration: "September 2024 - February 2025",
    description: [
      "Bypassed OTP authentication using automated scripts for user impersonation",
      "Identified and documented API endpoint vulnerabilities through security testing",
      "Developed tools to bypass content protection for premium media access",
      "Documented vulnerabilities in authentication and content distribution"
    ],
    skills: ["Python", "Burp Suite", "HTTP Analysis", "Reverse Engineering", "API Security"],
    github: null
  },
  {
    title: "ULD Packing Optimization - FedEx",
    role: "Supply Chain Problem Statement (Inter IIT Tech Meet 13.0 - IIT Bhilai)",
    duration: "November 2024 - December 2024",
    description: [
      "Proposed an efficient ULD packing solution for FedEx at the InterIIT Tech Meet 13.0 with 80% volume efficiency.",
      "Implemented package constraints for orientation, stacking, and weight distribution",
      "Created visualization system for package arrangement optimization",
      "Integrated priority-based shipment handling"
    ],
    skills: ["Gurobi Optimizer", "Linear Programming", "Python", "3D Algorithms", "Optimization"],
    github: "https://github.com/srcwap7/3D-Knapsack"
  }
];

export default function WorkExperience() {
  return (
    <section id="work-experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-4xl font-bold text-center text-white mb-4">Work Experience</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Professional experience in Technology and Research
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <div className="flex flex-row justify-between items-start gap-4 mb-6">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-indigo-400 mt-2">{exp.role}</p>
                  <p className="text-gray-500 mt-1">{exp.duration}</p>
                </div>
                {exp.github && (
                  <a 
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
              </div>
              
              <div className="space-y-3 mb-6 text-left">
                {exp.description.map((desc, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-400">
                    <span className="mt-1.5">•</span>
                    <p className="flex-grow">{desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 justify-start">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
