// components/MessageList.js
import React, { useEffect, useRef } from "react";
import Message from "./message";
import "../styles/messageList.css";

const MessageList = ({ messages, currentResponse, isResponseActive }) => {
  const messagesEndRef = useRef(null); // Ref for scrolling to bottom

  // Scroll to the bottom whenever messages change
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentResponse]); // Run whenever messages or the current response changes

  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <Message key={index} type={msg.type} text={msg.text} />
      ))}
      {isResponseActive && <Message type="response" text={currentResponse} />}
      <div ref={messagesEndRef} /> {/* Reference div for auto-scrolling */}
    </div>
  );
};

export default MessageList;
