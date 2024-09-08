import React, { useState, useEffect } from "react";
import useWebSocket from "../hooks/chatSocket";
import MessageList from "./messageList";
import InputForm from "./inputForm";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentResponse, setCurrentResponse] = useState("");
  const [isResponseActive, setIsResponseActive] = useState(false);
  const [socket] = useWebSocket("ws://4.213.97.141:8000/chatbot"); //url of websocket

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("Received data:", data);

        if (data.response) {
          // Append new response part to the current message
          setCurrentResponse((prevResponse) => prevResponse + data.response);
        }

        if (data.responseCompleted === "True") {
          // Add the complete response to messages and reset state
          if (isResponseActive) {
            setMessages((prevMessages) => [
              ...prevMessages,
              { type: "response", text: currentResponse },
            ]);
            setCurrentResponse(""); // Clear current response
            setIsResponseActive(false); // Reset response activity state
          }
        }
      };
    }
  }, [socket, currentResponse, isResponseActive]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      // Reset current response and set state to active
      setCurrentResponse("");
      setIsResponseActive(true);

      // Add user message to messages
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "user", text: input },
      ]);

      // Send the user input to the server
      socket.send(JSON.stringify({ message: input }));

      // Clear input field
      setInput("");
    }
  };

  return (
    <div className="chatbox">
      <MessageList
        messages={messages}
        currentResponse={currentResponse}
        isResponseActive={isResponseActive}
      />
      <InputForm
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        disabled={isResponseActive}
      />
    </div>
  );
};

export default ChatBox;
