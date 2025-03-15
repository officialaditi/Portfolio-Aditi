import React from 'react';
import projects from '../projects';

const ProjectScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">My Work</h1>
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center gap-8 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 lg:h-96 object-cover"
              />
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h2>
              <p className="text-gray-600 mb-6">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 font-semibold"
                  >
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-700 font-semibold"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectScreen;