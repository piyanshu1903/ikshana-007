// src/context/ChatContext.js
import React, { createContext, useContext, useState } from "react";

// import useWebSocket from "../hooks/chatSocket";
const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentResponse, setCurrentResponse] = useState("");
  const [isResponseActive, setIsResponseActive] = useState(false);
  const [isChatting, setIsChatting] = useState(false);
  //   const [socket] = useWebSocket("wss://rag-chatbot.up.railway.app/chatbot");

  return (
    <ChatContext.Provider
      value={{
        input,
        setInput,
        messages,
        setMessages,
        currentResponse,
        setCurrentResponse,
        isResponseActive,
        setIsResponseActive,
        isChatting,
        setIsChatting,
        // socket,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
