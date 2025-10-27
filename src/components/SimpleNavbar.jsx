import React from 'react';

const SimpleNavbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-white cursor-pointer" onClick={() => scrollToSection('home')}>
            Portfolio
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;

