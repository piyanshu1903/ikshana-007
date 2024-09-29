import React, { useEffect } from "react";
import { useChat } from "./chatcontext"; // Import context
import MessageList from "./messageList";
import "../styles/chatbox.css";

const ChatBox = () => {
  const {
    // input,
    // setInput,
    messages,
    setMessages,
    currentResponse,
    // setCurrentResponse,
    isResponseActive,
    socket,
    setIsResponseActive,
  } = useChat(); // Get state and functions from context

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);

        if (data.responseCompleted === "True") {
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: "response", text: data.response },
          ]);
          setIsResponseActive(false); // Reset response activity state
        }
      };
    }
  }, [socket, setMessages, setIsResponseActive]);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (input.trim()) {
  //     setCurrentResponse("");
  //     setIsResponseActive(true);
  //     setMessages((prevMessages) => [
  //       ...prevMessages,
  //       { type: "user", text: input },
  //     ]);
  //     socket.send(JSON.stringify({ message: input }));
  //     setInput("");
  //   }
  // };

  return (
    <div className="chatbox">
      <MessageList
        messages={messages}
        currentResponse={currentResponse}
        isResponseActive={isResponseActive}
      />
    </div>
  );
};

export default ChatBox;
