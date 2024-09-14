import React, { useState } from 'react';
import ChatBox from "../components/chatBox";
import Header from "../components/heading";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`main ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="header">
        <Header toggleTheme={toggleTheme} />
      </div>
      <div className="app">
        <ChatBox />
      </div>
    </div>
  );
}

export default Home;
