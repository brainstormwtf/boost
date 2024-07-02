// src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const calculateDaysRemaining = (deadline) => {
    const currentDate = new Date();
    const endDate = new Date(deadline);
    const timeDiff = endDate - currentDate;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysRemaining;
  };

  const percentageFunded = (funded, target) => {
    return ((funded / target) * 100).toFixed(2);
  };

  const daysRemaining = calculateDaysRemaining(project.deadline);
  const percentFunded = percentageFunded(project.funded, project.target);
  const boosters = Math.floor(Math.random() * 100); // Replace this with actual data when available

  return (
    <Link to={`/project/${project.id}`} className="project-card-link">
      <div className="project-card">
        <p>{daysRemaining} Days left</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>{boosters} Boosters</p>
        <p>{percentFunded}% funded</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${percentFunded}%` }}></div>
        </div>
        <p className="goal">Goal: {project.target} TON</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
