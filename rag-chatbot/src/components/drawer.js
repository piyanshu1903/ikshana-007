import React from 'react';
import '../styles/drawer.css';

const Drawer = ({ children }) => {
    const handleknowledgeupdate = async (e) => {
        alert("Knowledge Updated successfully.");
        
    };

  return (
    <div className="drawer open">
      <div className="drawer-content">
        <button className="update-knowledgebase-button" onClick={handleknowledgeupdate}>
          Update Knowledgebase
        </button>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
