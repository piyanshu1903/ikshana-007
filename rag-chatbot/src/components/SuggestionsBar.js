import React from 'react';
import './SuggestionsBar.css';

function SuggestionsBar() {
  const suggestions = [
    { id: 1, text: 'Create an illustration for a bakery' },
    { id: 2, text: 'Help me understand a technical document' },
    { id: 3, text: 'Morning routine for productivity' },
    { id: 4, text: 'Study vocabulary' },
  ];

  return (
    <div className="suggestions-bar">
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="suggestion-item">
          {suggestion.text}
        </div>
      ))}
    </div>
  );
}

export default SuggestionsBar;
