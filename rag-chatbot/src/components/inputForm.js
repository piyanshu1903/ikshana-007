import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleUp,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { uploadFileToServer } from "../hooks/uploadService";
import UploadedFileDisplay from "./uploadedFileDisplay";

const InputForm = ({ input, setInput, handleSubmit, disabled }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const textareaRef = useRef(null); // Reference to the textarea

  // Handle file selection and upload
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const uploadedFileData = await uploadFileToServer(file);

      // Assume the server returns the file name and other metadata
      setUploadedFiles((prevFiles) => [
        ...prevFiles,
        { name: uploadedFileData.fileName },
      ]);
    } catch (error) {
      console.error("File upload failed: ", error);
      alert("File upload failed, please try again.");
    }
  };

  // Adjust the height of the textarea to fit content
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Reset height to auto to get the new scroll height
      textarea.style.height = "auto";
      // Set height to scrollHeight or max height
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // Adjust height on input change
  useEffect(() => {
    adjustHeight();
  }, [input]); // Adjust height whenever input changes

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      // Add a newline to the input when Shift + Enter is pressed
      e.preventDefault();
      setInput((prevInput) => prevInput + "\n");
    } else if (e.key === "Enter") {
      // Submit the form when Enter is pressed
      e.preventDefault(); // Prevent default form submission to handle it manually
      handleSubmit(e);
      setUploadedFiles([]);
    }
  };

  return (
    <div className="input-form-container">
      {/* Display Uploaded Files */}
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
        {/* File upload (paperclip) button */}
        <div className="file-upload-button">
          <label htmlFor="file-upload">
            <FontAwesomeIcon icon={faPaperclip} size="2x" color="black" />
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }} // Hide default file input
            disabled={disabled}
          />
        </div>

        {/* Textarea for multi-line input */}
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={disabled}
          className="message-input"
          autoFocus="true"
        />

        {/* Submit button */}
        <button type="submit" className="submit-button" disabled={disabled}>
          <FontAwesomeIcon icon={faArrowCircleUp} size="2x" color="white" />
        </button>
      </form>
    </div>
  );
};

export default InputForm;
