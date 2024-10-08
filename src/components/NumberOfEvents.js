// src/components/NumberOfEvents.js

import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(32);

  

  const handleInputChanged = (event) => {
    const value = event.target.value
    setNumber(value);

  let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Please enter a valid number"
    } else {
      setCurrentNOE(value);
      errorText = "";
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <h4>Number of Events: </h4>
      <input
        className="number-of-events-input"
        type="text"
        id="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
