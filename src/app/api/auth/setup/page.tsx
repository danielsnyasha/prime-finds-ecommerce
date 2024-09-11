import React from 'react';

const Test: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello, World!</h1>
        <p className="text-gray-600 text-lg">
          This is a simple TypeScript page with Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default Test;
