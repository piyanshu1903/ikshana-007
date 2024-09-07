import React from 'react';
import './MessageInput.css';


function MessageInput() {
  return (
    <div className="message-input">
      <input type="text" placeholder="Message ChatGPT" />
      
      <button className="send-button">
        
        <img src="/send-icon.svg" alt="Send Icon" />
      </button>
    </div>
  );
}

export default MessageInput;
