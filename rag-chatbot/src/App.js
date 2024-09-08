import React from 'react';
import ChatBox from "./components/chatBox";
import Header from "./components/heading";

function App() {
  return (
    <div className="main">
      <div className="header">
        <Header />
      </div>
      <div className="app">
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
