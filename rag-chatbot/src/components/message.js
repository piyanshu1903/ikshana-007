// components/Message.js
import React from "react";
import "../styles/message.css";

const Message = ({ type, text }) => {
  return (
    <div className={`message ${type}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message;
