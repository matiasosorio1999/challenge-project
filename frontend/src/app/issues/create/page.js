"use client";
import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/issues', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Could not create issue", error);
    }
  };

  return (
    <div className="flex w-1/2 justify-center p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1>Create Issue</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          className="text-black"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="text-black"
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
