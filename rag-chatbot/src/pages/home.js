import React, { useState, useEffect } from "react";
import ChatBox from "../components/chatBox";
import Header from "../components/heading";
import Drawer from "../components/drawer";
import "../styles/home.css";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const SuggestionCard = ({ text, icon, onPressed }) => (
    <button
      className="suggestion-card"
      onClick={() => {
        console.log("Card clicked!"); // Ensure click event is firing
        onPressed(); // Call the onPressed handler passed as a prop
      }}
    >
      <span>{text}</span>
      <img src={icon} alt="Icon" className="icon" />
    </button>
  );
  const handleSuggestionClick = () => {
    console.log("Suggestion clicked!"); // Add this to verify click event
    setIsChatting(true); // Update isChatting state to true
  };
  const [isChatting, setIsChatting] = useState(false); // Define the flag variable
  useEffect(() => {
    console.log("isChatting:", isChatting); // Log whenever isChatting changes
  }, [isChatting]);
  const suggestions = [
    {
      text: "Give me tips to stay in the present moment",
      icon: "/placeholder.svg?height=24&width=24",
    },
    {
      text: "Create a travel itinerary for a city",
      icon: "/placeholder.svg?height=24&width=24",
    },
    {
      text: "Quiz me about different kinds of sports",
      icon: "/placeholder.svg?height=24&width=24",
    },
    {
      text: "Help design a database schema for a business",
      icon: "/placeholder.svg?height=24&width=24",
    },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`main ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="header">
        <Header toggleTheme={toggleTheme} />
      </div>
      <div className="content-wrapper">
        <Drawer></Drawer>
        <div className="app">
          <div className="gemini-interface">
            {isChatting ? (
              // If isChatting is true, show ChatBox
              <ChatBox />
            ) : (
              // If isChatting is false, show greeting, subheading, and suggestion cards
              <>
                <h2 className="greeting">
                  <span className="hello">Hello,</span>{" "}
                  <span className="name">Yogesh</span>
                </h2>
                <h2 className="subheading">How can I help you today?</h2>
                <div className="suggestions-grid">
                  {suggestions.map((suggestion, index) => (
                    <SuggestionCard
                      key={index}
                      {...suggestion}
                      onPressed={handleSuggestionClick} // Pass the function to the card
                    />
                  ))}
                </div>
              </>
            )}

            <style>{`
        .gemini-interface {
          background-color: #121212;
          color: white;
          width: 100%;
          height: 450px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .greeting {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .hello {
          background: linear-gradient(to right, #4a90e2, #9b59b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .name {
          background: linear-gradient(to right, #e74c3c, #f39c12);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .subheading {
          font-size: 2.5rem;
          color: #a0a0a0;
          margin-bottom: 2rem;
        }
        .suggestions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          width: 100%;
          max-width: 1000px;
        }
        .suggestion-card {
          background-color: #1e1e1e;
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          transition: background-color 0.3s;
          border: none;
          color: white;
          font-size: 1rem;
          cursor: pointer;
        }
        .suggestion-card:hover {
          background-color: #2a2a2a;
        }
        .icon {
          width: 24px;
          height: 24px;
          opacity: 0.7;
        }
      `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
