import React from 'react';

function ErrorDisplay({ error }) {
  return (
    <div className="bg-red-900/50 text-red-200 p-6 rounded-xl text-center mx-auto max-w-lg border-l-4 border-red-500 shadow-lg">
      <p className="font-medium text-lg">{error}</p>
      <p className="mt-2 text-red-300/80 text-sm">Please try selecting a different date</p>
    </div>
  );
}

export default ErrorDisplay;