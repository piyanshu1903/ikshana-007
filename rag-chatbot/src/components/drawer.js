import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglassHalf,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { uploadFileToServer } from "../hooks/uploadService";
import "../styles/drawer.css";

const Drawer = ({ children }) => {
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger the click event on the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleknowledgeupdate = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const uploadedFileData = await uploadFileToServer(file, "HR");

      // Assume the server returns the file name and other metadata
      setIsUploading(false);
      alert(uploadedFileData.message);
    } catch (error) {
      console.error("File upload failed: ", error);
      setIsUploading(false);
      alert("File upload failed, please try again.");
    }
  };

  return (
    <div className="drawer open">
      <div className="drawer-content">
        <button
          className="update-knowledgebase-button"
          onClick={handleButtonClick}
          disabled={isUploading}
        >
          <FontAwesomeIcon
            icon={isUploading ? faHourglassHalf : faPaperclip}
            size="1x"
            spin={isUploading}
          />
          <span className="button-text">Update Knowledgebase</span>
        </button>
        <input
          ref={fileInputRef}
          id="knowledge-update"
          type="file"
          onChange={handleknowledgeupdate}
          style={{ display: "none" }} // Hide default file input
          disabled={isUploading}
        />
        {/* {children} */}
        <span className="notice">
          *Carefull, Accessible only by Admins, this will update the actual
          knowldege-base which is used by the chatbot to answer the queries
        </span>
        <h3>PDF File size limit :- 5MB</h3>
        <h3>Sample prompts</h3>
        <div className="promptSamples">
          <h4>HR Policies</h4>
          <h5>1. What events need to be reported to the stock exchange?</h5>
          <h5>2. What is the timeline for disclosing important company events?</h5>
          <h5>3. What is the policy on determining material events?</h5>
          <h4>IT Support and Internal Operations</h4>
          <h5>1. What are the rules for posting company-related information on social media?</h5>
          <h5>2. Can I get a summary of the company's current stock market obligations?</h5>
          <h4>Company Events and Governance</h4>
          <h5>1. What happens if a new agreement or merger is being planned?</h5>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
