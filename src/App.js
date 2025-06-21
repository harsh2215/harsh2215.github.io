import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './pages/Projects';
import Experience from './components/Experience';
import About from './components/About';
import ChatInterface from './components/ChatInterface';
import WorkExperience from './pages/WorkExperience';
import Certifications from './components/Certifications';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <div className="App bg-gray-900 text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Skills />
              <WorkExperience />
              <Projects />
              <Certifications />
              <Experience />
              <Contact />
            </>
          } />
        </Routes>

        <button 
          className={`fixed bottom-8 right-8 p-3 md:p-4 w-12 h-12 md:w-auto md:h-auto bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-xl transition-transform transform hover:scale-105 ${isChatOpen ? 'rotate-45' : ''}`}
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <span className="text-xl hidden md:inline">{isChatOpen ? 'Close Chat' : 'Chat with AI'}</span>
          <span className="text-xl md:hidden">AI</span>
        </button>
        
        {isChatOpen && (
          <div className="fixed bottom-20 right-4 md:right-8 w-[calc(100%-2rem)] md:w-96 max-w-96 bg-white text-black rounded-lg shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">AI Assistant</h3>
              <button onClick={() => setIsChatOpen(false)} className="text-xl text-gray-500 hover:text-gray-800">×</button>
            </div>
            <ChatInterface onClose={() => setIsChatOpen(false)} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
