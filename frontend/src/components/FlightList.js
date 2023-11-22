import React from 'react';

function FlightList({ flights }) {
  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>{flight.name} - {flight.destination}</li>
        ))}
      </ul>
    </div>
  );
}

export default FlightList;
