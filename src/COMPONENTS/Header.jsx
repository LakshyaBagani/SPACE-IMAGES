import React from 'react';

function Header() {
  return (
    <header className="text-center mb-12">
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
        NASA Astronomy Explorer
      </h1>
      <p className="text-lg text-blue-200 opacity-80">Discover the wonders of our universe</p>
    </header>
  );
}

export default Header;