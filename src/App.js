// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import CreateProjectForm from './components/CreateProjectForm';
import ProjectDetails from './components/ProjectDetails';
import './App.css';

// src/App.js
const initialProjects = [
  { id: 1, title: 'The Open House', description: 'We want to create a physical community space to build and meet IRL', funded: 66000, target: 200000, deadline: '2024-07-31', image: null },
  { id: 2, title: 'Project Two', description: 'Description for project two', funded: 20000, target: 100000, deadline: '2024-08-30', image: null },
  { id: 3, title: 'Project Three', description: 'Description for project three', funded: 75000, target: 150000, deadline: '2024-09-15', image: null },
];


const App = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [notification, setNotification] = useState('');

  const createProject = (newProject) => {
    if (projects.some(project => project.title === newProject.title)) {
      setNotification('Project name already exists!');
      return false;
    }

    newProject.id = projects.length + 1;
    setProjects([...projects, newProject]);
    setNotification('Project created successfully!');
    return true;
  };

  const clearNotification = () => {
    setNotification('');
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        {notification && (
          <div className="notification">
            {notification}
            <button onClick={clearNotification}>X</button>
          </div>
        )}
        <main>
          <Routes>
            <Route path="/" element={<ProjectList projects={projects} />} />
            <Route path="/create" element={<CreateProjectForm createProject={createProject} />} />
            <Route path="/project/:id" element={<ProjectDetails projects={projects} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
