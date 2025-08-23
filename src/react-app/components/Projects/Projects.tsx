// src/react-app/components/Projects/Projects.tsx
import React from 'react';
import './Projects.css';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface ProjectsProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'Sample Project',
    description: 'This is a sample project description. You can replace this with your actual project details, technologies used, and what makes this project special.',
    imageUrl: 'https://via.placeholder.com/400x300/61dafb/ffffff?text=Project+Image',
    link: 'https://github.com/your-username/project-name'
  },
  // Add more projects here as needed
];

const Projects: React.FC<ProjectsProps> = ({ projects = defaultProjects }) => {
  const handleProjectClick = (project: Project) => {
    window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() => handleProjectClick(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleProjectClick(project);
              }
            }}
            aria-label={`View project: ${project.title}`}
          >
            <div className="project-image">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
              />
            </div>
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;