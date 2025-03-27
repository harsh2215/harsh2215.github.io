import React from 'react';

export default function ProjectCard({ title, description, techStack }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium shadow-md hover:bg-blue-400 transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
