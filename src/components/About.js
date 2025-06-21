import { FaCode, FaUserGraduate, FaGamepad, FaVolleyballBall, FaSkating, FaCamera, FaMusic, FaPlane, FaBaseballBall } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            About Me
          </h2>
          
          <div className="bg-gray-900 rounded-lg p-6 mb-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <FaUserGraduate className="text-3xl text-indigo-400" />
              <h3 className="text-2xl font-bold text-white">Professional Summary</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Computer Science undergraduate at IIT Bhilai with a strong background in software development, cybersecurity, and
              networking. Proficient in C, C++, Python, and experienced with tools like Docker, ns-3, and Gurobi. Experienced in
              developing innovative projects, including encryption tools and congestion control algorithms. Active leader and
              contributor to technical and organizational initiatives.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 mb-8 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <FaCode className="text-3xl text-indigo-400" />
              <h3 className="text-2xl font-bold text-white">Extracurricular Activities</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-indigo-400 mb-3">Technology</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Participated in Inter IIT Tech Meet 13 (2024) - Developed optimized ULD packing solution for FedEx</li>
                  <li>Active participant in Technical Workshops and Conferences</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl text-indigo-400 mb-3">Sports</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Represented IIT Bhilai Cricket Team in Inter IIT Sports Meet 56 (2023)</li>
                  <li>Awarded Best Bowler in Intra-college Cricket Tournament (Runners-up)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl text-indigo-400 mb-3">Leadership</h4>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Head of the Finance Team (College Fest)</li>
                  <li>Founding Member of the Cybersecurity Club, IIT Bhilai</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <FaGamepad className="text-3xl text-indigo-400" />
              <h3 className="text-2xl font-bold text-white">Hobbies & Interests</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: <FaBaseballBall />, name: "Cricket" },
                { icon: <FaVolleyballBall />, name: "Volleyball" },
                { icon: <FaSkating />, name: "Skating" },
                { icon: <FaCamera />, name: "Photography" },
                { icon: <FaMusic />, name: "Music" },
                { icon: <FaPlane />, name: "Travelling" }
              ].map((hobby, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                  <span className="text-indigo-400 text-xl">{hobby.icon}</span>
                  {hobby.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
