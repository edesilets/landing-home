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
    title: 'Stash to bitbucket migration script',
    description: 'A small set of python scripts that helps move from Stash to Atlassian bitbucket',
    imageUrl: 'https://www.python.org/static/community_logos/python-logo.png',
    link: 'https://github.com/edesilets'
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