import { FaLinkedin, FaGithub, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    // className="py-16 bg-gradient-to-r from-indigo-800 to-indigo-900"
    <section id="contact" className="py-16 bg-gray-800 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Contact</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/harsh-prajapati-402163281/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 text-lg text-white hover:text-indigo-400 transition-colors duration-300 transform hover:scale-105"
          >
            <FaLinkedin className="text-3xl" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/harsh2215" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 text-lg text-white hover:text-indigo-400 transition-colors duration-300 transform hover:scale-105"
          >
            <FaGithub className="text-3xl" />
            <span>GitHub</span>
          </a>

          {/* Email */}
          <a 
            href="mailto:harshprajapati5122@gmail.com" 
            className="flex items-center gap-3 text-lg text-white hover:text-indigo-400 transition-colors duration-300 transform hover:scale-105"
          >
            <FaMailBulk className="text-3xl" />
            <span>Email</span>
          </a>

          {/* Call */}
          <a 
            href="tel:+918511102215" 
            className="flex items-center gap-3 text-lg text-white hover:text-indigo-400 transition-colors duration-300 transform hover:scale-105"
          >
            <FaPhoneAlt className="text-3xl" />
            <span>Call</span>
          </a>
        </div>
      </div>
    </section>
  );
}
