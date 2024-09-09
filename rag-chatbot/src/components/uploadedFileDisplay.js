// components/UploadedFileDisplay.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const UploadedFileDisplay = ({ fileName }) => {
  // const trimmedName =
  //   fileName.length > 10 ? `${fileName.substring(0, 10)}...` : fileName;
  const trimmedName =
    fileName.substring(0, 10) +
    (fileName.length > 10 ? "..." : "") +
    fileName.split(".").pop();

  return (
    <div className="uploaded-file-display">
      <FontAwesomeIcon icon={faFileAlt} size="lg" />
      <span>{trimmedName}</span>
    </div>
  );
};

export default UploadedFileDisplay;
