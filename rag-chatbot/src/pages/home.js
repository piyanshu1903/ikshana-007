import React, { useState } from 'react';
import ChatBox from "../components/chatBox";
import Header from "../components/heading";
import Drawer from "../components/drawer";
import "../styles/home.css";
import AnimatedBackground from '../components/AnimatedBackground'; // Adjust the path as necessary

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
      <div className={`main ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="header">
          <Header toggleTheme={toggleTheme} />
        </div>
        <div className="content-wrapper">
          <Drawer>
          </Drawer>
          <div className="app">
            <ChatBox />
          </div>
        </div>
      </div>
  );
}

export default Home;
