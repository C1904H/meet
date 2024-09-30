// src/components/Event.js

import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
        <h2>{event && event.summary}</h2>
        <p className="eventLocation">{event && event.location}</p>
        <p className="eventDate">{event && (new Date(event.created)).toUTCString()}</p>
      {showDetails ? 
        <p className="details">{event && event.description}</p>
       : null 
      }
      <button
        className="details-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
    </li>
  )
};

export default Event;
