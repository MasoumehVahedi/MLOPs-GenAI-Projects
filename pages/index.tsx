// "use client" — Next.js directive: render this page in the browser (no Node server).
"use client";

import { useEffect, useState } from 'react'; // React hooks: state + lifecycle

export default function Home() {
  // Holds the generated idea; initial UI shows a loading placeholder.
  const [idea, setIdea] = useState<string>('…loading');

  // Runs once on first render; fetches from the Python FastAPI backend.
  useEffect(() => {
    // Front end calls the backend route at /api (FastAPI returns plain text).
    fetch('/api')
      .then(res => res.text())         // Read the response as text
      .then(setIdea)                   // Put text into state -> triggers re-render
      .catch(err => setIdea('Error: ' + err.message)); // Simple error surface
  }, []); // Empty deps => run only after the first paint

  // TSX below: the actual UI; Tailwind classes handle styling.
  return (
    <main className="p-8 font-sans">
      {/* Page heading */}
      <h1 className="text-3xl font-bold mb-4">
        Business Idea Generator
      </h1>

      {/* Card-like container for the result */}
      <div className="w-full max-w-2xl p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm">
        {/* Show the idea text; preserve newlines from the API */}
        <p className="text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
          {idea}
        </p>
      </div>
    </main>
  );
}