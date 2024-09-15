import React, { useState, useEffect } from "react";
//import "../styles/App.css";
import "../styles/heading.css";

function Header({ toggleTheme }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <div className="header">
      <div className="header__logo">
        <h1>IKSHANA</h1>
      </div>
      <button onClick={handleToggle} className="theme-toggle">
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
}

export default Header;
