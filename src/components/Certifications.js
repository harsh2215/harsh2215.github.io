import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const onlineCourses = [
  {
    title: "Google Cybersecurity",
    platform: "Coursera",
    date: "February 2024",
    link: "https://drive.google.com/file/d/1GjiVrUEO9Eb9u3cJNdFB5Q50WORQieqG/view?usp=sharing",
    skills: ["Cybersecurity", "Network Security", "Cryptography", "Audit", "Risk Management", "Python", "Linux", "SQL"] 
  },
  {
    title: "The Triple Threat: AI Ethics, Bias, and Deepfakes in Cybersecurity",
    platform: "Simplilearn",
    date: "April 2024",
    link: "https://drive.google.com/file/d/1HLAva2e4SyUo2e4qIIaejrqWs3ep5Cqu/view?usp=sharing",
    skills: ["AI Ethics", "Bias in AI", "Deepfakes", "Cybersecurity"]
  },
  {
    title: "Google AI Essentials",
    platform: "Coursera",
    date: "June 2024",
    link: "https://drive.google.com/file/d/1QDAwgaHXj9GifKY1ldIvgusMpUE4wIDq/view?usp=sharing",
    skills: ["Critical Thinking"]
  }
];

export default function Certifications() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Online Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {onlineCourses.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 rounded-lg p-5 transition-all duration-300 hover:bg-gray-700"
            >
              <div className="flex items-start gap-3 mb-3">
                <FaCertificate className="w-6 h-6 text-indigo-400 mt-1 flex-shrink-0" />
                <div className="flex-grow">
                  <h4 className="text-lg font-semibold text-white hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-indigo-400 text-sm">{cert.platform}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </div>
                <FaExternalLinkAlt className="w-4 h-4 text-gray-400 flex-shrink-0 mt-2 hover:text-indigo-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
