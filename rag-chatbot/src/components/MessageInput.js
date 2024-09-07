import React from 'react';
import './MessageInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faArrowCircleUp,  faPaperclip } from '@fortawesome/free-solid-svg-icons';

function MessageInput() {
  return (
    <div className="message-input">
      <button className='send-button' >
        <FontAwesomeIcon icon={faPaperclip} size="2x" color="white" />
      </button>
      <input type="text" placeholder="Message ChatGPT" />
      <button className="send-button">
        <FontAwesomeIcon icon={faArrowCircleUp} size="2x" color="white" />
      </button>
    </div>
  );
}

export default MessageInput;