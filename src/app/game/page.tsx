// app/game/page.tsx
"use client";

import React from 'react';

// Reusing the safe navigation function from the Homepage
const navigateTo = (path: string) => {
  try {
    window.location.href = path;
  } catch (error) {
    console.error("Navigation failed:", error);
  }
};

/**
 * The main Game component page.
 * Accessible at the /game path.
 */
export default function GamePage() {
  return (
    <div className="flex flex-col items-center p-8 bg-blue-50 min-h-[calc(100vh-64px)]">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          The Canadian Budget Challenge
        </h1>
        
        <p className="text-lg text-gray-700 mb-8">
          This is where the fun begins! In this section, you'll be able to play the game and learn about managing money.
        </p>

        {/* Placeholder for the game content */}
        <div className="h-64 border-2 border-dashed border-gray-300 flex items-center justify-center mb-10 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-xl">
            [ Placeholder: Financial Game Simulation Area ]
          </p>
        </div>

        {/* Link to return to the Home Page (Routing back to '/') */}
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/'); // Navigates back to the root path
          }}
          className="inline-block text-blue-500 font-medium hover:text-blue-700 transition duration-200 p-2 border-b border-blue-500 hover:border-blue-700 cursor-pointer"
        >
          &larr; Return to Homepage
        </a>
      </div>
    </div>
  );
}