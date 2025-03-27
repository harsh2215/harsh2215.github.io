import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <motion.div 
        className="text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-400">Harsh</span>
        </motion.h1>
        
        <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl mb-6">
          Computer Science Undergraduate at IIT Bhilai
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8">
          Turning ideas into reality through code
        </motion.p>
        
        <motion.div variants={itemVariants} className="space-x-4">
          <a
            href="Harsh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download={true}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full transition duration-300"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full transition duration-300"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
