import React from 'react';
import Header from './components/Header';
import ChatArea from './components/ChatArea';
import SuggestionsBar from './components/SuggestionsBar';
import MessageInput from './components/MessageInput';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <ChatArea />
        <SuggestionsBar />
      </div>
      <MessageInput />
    </div>
  );
}

export default App;
