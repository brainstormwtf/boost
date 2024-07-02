// src/components/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>Funded: {project.funded} / {project.target} TON</p>
      <p>Deadline: {project.deadline}</p>
      {project.image && <img src={URL.createObjectURL(project.image)} alt={project.title} />}
    </div>
  );
};

export default ProjectDetails;
