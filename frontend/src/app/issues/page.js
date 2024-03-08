"use client";
import { useEffect, useState } from 'react';

const Issues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/issues'); // Added protocol
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setIssues(data);
      } catch (error) {
        console.error("Could not fetch issues", error);
      }
    };

    fetchIssues();
  }, []);

  const deleteIssue = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/issues/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    setIssues(issues.filter((issue) => issue.id !== id));
  } catch (error) {
    console.error("Could not delete issue", error);
  }
};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1>Issues List</h1>
        {issues.map((issue) => (
          <div key={issue.id}className="border border-white w-48 p-4">
            <h2>{issue.title}</h2>
            <p>{issue.description}</p>
            <button onClick={() => deleteIssue(issue.id)} className="p-1 bg-red-700">Delete</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Issues;