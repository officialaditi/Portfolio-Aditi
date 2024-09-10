
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from "../projects";

const ProjectScreen = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            tags={project.tags} // Pass the tags prop
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectScreen;
