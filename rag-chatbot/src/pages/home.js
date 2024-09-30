import React, { useState, useEffect, useRef } from "react";
import ChatBox from "../components/chatBox";
import Header from "../components/heading";
import Drawer from "../components/drawer";
import "../styles/home.css";
import InputForm from "../components/inputForm";
import { useChat } from "../components/chatcontext"; // Import your Chat context
import { gsap } from "gsap"; // Import GSAP

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { setInput } = useChat();
  const { isChatting, setIsChatting } = useChat();
  const h2Ref = useRef(null);
  const subhead = useRef(null); // Create a ref for the h2 element

  useEffect(() => {
    gsap.fromTo(h2Ref.current, 
      { opacity: 0, scale: 5 }, // Starting state
      { opacity: 1, scale: 1, duration: 1, stagger: 0.1 ,delay:0.1} // Ending state with stagger effect for each letter
    );
    gsap.fromTo(subhead.current, { text: "" }, { duration: 1.5, text: "How can I help you today?", ease: "linear",delay:0.1 });
  }, []);

  const SuggestionCard = ({ text, icon, onPressed }) => (
    <button
      className="suggestion-card"
      onClick={() => {
        console.log("Card clicked!");
        setInput(text); // Ensure click event is firing
        onPressed(); // Call the onPressed handler passed as a prop
      }}
    >
      <span>{text}</span>
      
    </button>
  );
  // const [isChatting, setIsChatting] = useState(false); // Define the flag variable
  const handleSuggestionClick = () => {
    console.log("Suggestion clicked!"); // Add this to verify click event
    setIsChatting(true); // Update isChatting state to true
  };

  const suggestions = [
    {
      text: "What events need to be reported to the stock exchange?",
      
    },
    {
      text: "Can I get a summary of the company's current stock market obligations?",
      
    },
    {
      text: "What is the timeline for disclosing important company events?",
      
    },
    {
      text: "What happens if a new agreement or merger is being planned?",
      
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
                <h2 className="greeting" ref={h2Ref}>
                  <span className="hello">Hello,</span>{" "}
                  <span className="name">Yogesh</span>
                </h2>
                <h2 className="subheading" ref={subhead}>How can I help you today?</h2>
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

            <div>
              {" "}
              <InputForm />
            </div>

            {/* <style>{`
        .gemini-interface {
          background-color: #121212;
          color: white;
          width: 100%;
          height: 415px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          border-radius:25px;
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
      `}</style> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
