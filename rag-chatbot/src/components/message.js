// components/Message.js
import React from "react";

const Message = ({ type, text }) => {
  return (
    <div className={`message ${type}`}>
      <p>{text}</p>
    </div>
  );
};

export default Message;
