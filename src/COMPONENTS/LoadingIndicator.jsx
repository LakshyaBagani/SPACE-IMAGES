import React from 'react';

function LoadingIndicator() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-xl text-blue-300">Loading cosmic wonders...</p>
        <p className="text-sm text-blue-200/70 mt-2">Reaching across time and space</p>
      </div>
    </div>
  );
}

export default LoadingIndicator;