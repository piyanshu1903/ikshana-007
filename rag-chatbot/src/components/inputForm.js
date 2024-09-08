import React from "react";

const InputForm = ({ input, setInput, handleSubmit, disabled }) => {
  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        disabled={disabled} // Disable input field if disabled is true
      />
      <button type="submit" disabled={disabled}>
        Send
      </button>
    </form>
  );
};

export default InputForm;
