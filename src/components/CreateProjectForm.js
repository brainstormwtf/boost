// src/components/CreateProjectForm.js
import React, { useState } from 'react';

const CreateProjectForm = ({ createProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = { title, description, target, deadline, image };
    if (createProject(newProject)) {
      setTitle('');
      setDescription('');
      setTarget('');
      setDeadline('');
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-project-form">
      <h2>Start Your Own Project</h2>
      <label>Project Name:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      <label>Target in TON:</label>
      <input type="number" value={target} onChange={(e) => setTarget(e.target.value)} required />
      <label>Deadline:</label>
      <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} required />
      <label>Image Upload (Optional):</label>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Create BOOST</button>
    </form>
  );
};

export default CreateProjectForm;
