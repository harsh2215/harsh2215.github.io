export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-400">Harsh</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl mb-6">
          Computer Science Undergraduate at IIT Bhilai
        </h2>
        
        <p className="text-xl text-gray-300 mb-8">
          Turning ideas into reality through code
        </p>
        
        <div className="space-x-4">
          <a
            href="https://drive.google.com/file/d/1NSuGdYZOLOBMNOe2SOuP-9nf5AkaEYOx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-full transition duration-300"
          >
            Resume
          </a>
          <a
            href="#work-experience"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full transition duration-300"
          >
            View Experience
          </a>
        </div>
      </div>
    </section>
  );
}
