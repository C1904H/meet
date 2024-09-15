// src/components/Event.js

import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <div className="event">
        <p>{event.summary}</p>
        <p>{event.location}</p>
        <p>{new Date(event.created).toUTCString()}</p>
      </div>
      {showDetails ? (
        <div className="eventDetails">
          <p>{event.description}</p>
        </div>
      ) : null}
      <button
        className="show-detail-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
    </li>
  );
};

export default Event;
