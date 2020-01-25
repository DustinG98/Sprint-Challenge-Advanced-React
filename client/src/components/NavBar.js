import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode'


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Players</h1>
      <div data-testid="testToggle" className="dark-mode__toggle" onClick={toggleMode}>
        <div
          className={darkMode ? 'toggle toggled' : 'toggle'}
          
        />
      </div>
    </nav>
  );
};

export default Navbar;