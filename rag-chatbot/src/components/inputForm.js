import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faHourglassHalf,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { uploadFileToServer } from "../hooks/uploadService";
import UploadedFileDisplay from "./uploadedFileDisplay";
import { useChat } from "./chatcontext"; // Import context
import "../styles/inputForm.css";
import useWebSocket from "../hooks/chatSocket";

const InputForm = () => {
  const [socket] = useWebSocket("wss://rag-chatbot.up.railway.app/chatbot");
  const {
    input,
    setInput,
    setCurrentResponse,
    setMessages,

    isResponseActive,
    setIsResponseActive,
  } = useChat(); // Get state and functions from context
  const { setIsChatting } = useChat();

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const textareaRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const uploadedFileData = await uploadFileToServer(file, "employee");
      setUploadedFiles((prevFiles) => [
        ...prevFiles,
        { name: uploadedFileData.fileName },
      ]);
      setIsUploading(false);
      alert(uploadedFileData.message);
    } catch (error) {
      setIsUploading(false);
      alert(error.message);
    }
  };

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [input]);

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
  }, [socket, setMessages, setIsResponseActive]); // Added missing dependencies

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      setInput((prevInput) => prevInput + "\n");
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
      setUploadedFiles([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setIsChatting(true);
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
    <div className="input-form-container">
      <div className="uploaded-files">
        {uploadedFiles.map((file, index) => (
          <UploadedFileDisplay key={index} fileName={file.name} />
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          setInput("");
          setUploadedFiles([]);
        }}
        className="input-form"
      >
        <div className="file-upload-button">
          <label htmlFor="file-upload">
            <FontAwesomeIcon
              icon={isUploading ? faHourglassHalf : faPaperclip}
              size="2x"
              spin={isUploading}
            />
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
            disabled={isResponseActive || isUploading}
          />
        </div>

        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={isResponseActive}
          className="message-input"
          autoFocus={true}
        />

        <button
          type="submit"
          className="submit-button"
          disabled={isResponseActive}
        >
          <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
        </button>
      </form>
    </div>
  );
};

export default InputForm;
