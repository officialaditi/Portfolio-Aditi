// src/components/ProjectCard.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, githubLink, liveLink, tags }) => {
  return (
    <div className="max-w-lg bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img className="w-full h-60 object-cover" src={image} alt={title} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <a
              href={githubLink}
              className="text-white p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={liveLink}
              className="text-white p-2 bg-blue-500 rounded-full hover:bg-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
