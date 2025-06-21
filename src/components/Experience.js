import { FaUserFriends, FaShieldAlt, FaMoneyBillWave, FaHandshake } from 'react-icons/fa';

const experiences = [
  {
    title: "Head of the Finance Team",
    organization: "College Festival (Meraz), IIT Bhilai",
    description: "Led a team of financial volunteers for the college festival",
    duration: "October 2024 - March 2024",
    icon: <FaMoneyBillWave className="text-3xl text-indigo-400" />
  },
  {
    title: "Founding and Core Member",
    organization: "Cybersecurity Club, IIT Bhilai",
    description: "Fostering cybersecurity awareness, skill development, and collaborative projects",
    duration: "October 2024 - April 2025",
    icon: <FaShieldAlt className="text-3xl text-indigo-400" />
  },
  {
    title: "Student Mentorship Team",
    organization: "IIT Bhilai",
    description: "Assisted freshers with registration and orientation process along with academic guidance",
    duration: "July 2023 - March 2024",
    icon: <FaUserFriends className="text-3xl text-indigo-400" />
  },
  {
    title: "Student Outreach Team",
    organization: "College Festival (Meraz), IIT Bhilai",
    description: "Managed sponsorship acquisition and public relations activities for the college festival",
    duration: "November 2023 - April 2024",
    icon: <FaHandshake className="text-3xl text-indigo-400" />
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Volunteer Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {exp.icon}
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              </div>
              <p className="text-indigo-400 mb-2">{exp.organization}</p>
              <p className="text-gray-400 mb-4">{exp.description}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
