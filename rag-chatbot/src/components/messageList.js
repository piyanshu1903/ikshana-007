// components/MessageList.js
import React from "react";
import Message from "./message";

const MessageList = ({ messages, currentResponse, isResponseActive }) => {
  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <Message key={index} type={msg.type} text={msg.text} />
      ))}
      {isResponseActive && <Message type="response" text={currentResponse} />}
    </div>
  );
};

export default MessageList;
