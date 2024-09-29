import React, { useState, useEffect } from "react";
import { gsap } from "gsap"; // Import GSAP
import TextPlugin from "gsap/TextPlugin"; // Import TextPlugin

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

function Header({ toggleTheme }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }

    // Animate h1 text on mount
    gsap.from("h1", { duration: 3, text: "" }); // Start with empty text
    gsap.to("h1", { duration: 3, text: "IKSHANA", ease:"power1.in" }); // Tween to full text
  }, []); // Run once on mount

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
      {/* <button onClick={handleToggle} className="theme-toggle">
        {isDarkMode ? '☀️' : '🌙'}
      </button> */}
    </div>
  );
}

export default Header;
