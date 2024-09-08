import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp, faPaperclip } from '@fortawesome/free-solid-svg-icons';
const InputForm = ({ input, setInput, handleSubmit, disabled }) => {
  return (
    <form onSubmit={handleSubmit} className="input-form">
      <button disabled={disabled}>
        <FontAwesomeIcon icon={faPaperclip} size="2x" color="white"/>
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        disabled={disabled} // Disable input field if disabled is true
      />
      <button  disabled={disabled}>
        <FontAwesomeIcon icon={faArrowCircleUp } size="2x"color="White"/>
      </button>
    </form>
  );
};

export default InputForm;
