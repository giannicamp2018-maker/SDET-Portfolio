import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavItem = ({ item, activeSection, scrollToSection, index, navItemsLength }) => {
  const isActive = activeSection === item.id;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative"
      style={{
        marginRight: index < navItemsLength - 1 ? '1.5rem' : 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection(item.id)}
        className={`text-xl font-normal transition-colors duration-200 relative ${
          isActive || isHovered
            ? 'text-white'
            : 'text-gray-300'
        }`}
        style={{ 
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          paddingBottom: '8px',
          color: (isActive || isHovered) ? '#ffffff' : '#d1d5db',
          fontSize: '1.25rem',
          fontFamily: "'Ubuntu', sans-serif",
          position: 'relative',
          display: 'inline-block'
        }}
      >
        {item.label}
        <motion.div
          style={{ 
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            width: '100%',
            backgroundColor: '#ffffff',
            transformOrigin: 'center center',
            pointerEvents: 'none',
          }}
          initial={false}
          animate={{
            scaleX: (isActive || isHovered) ? 1 : 0
          }}
          transition={{ 
            type: 'tween',
            duration: 0.3,
            ease: 'easeInOut'
          }}
        />
      </motion.button>
    </motion.div>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      }`}
      style={{ 
        zIndex: 50,
        pointerEvents: 'auto'
      }}
    >
      <div style={{ paddingLeft: '1.5rem' }}>
        <div className="flex items-center h-16">
          <div className="hidden md:block">
            <div className="flex items-center" style={{ gap: '1.5rem' }}>
              {navItems.map((item, index) => (
                <NavItem
                  key={item.id}
                  item={item}
                  activeSection={activeSection}
                  scrollToSection={scrollToSection}
                  index={index}
                  navItemsLength={navItems.length}
                />
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
