import React, { useState } from 'react';
import axios from 'axios';

function ReservationForm() {
  const [flightId, setFlightId] = useState('');
  const [passengerName, setPassengerName] = useState('');

  const handleReservation = () => {
    // Implement logic to send reservation data to the backend
    axios.post('http://localhost:5000/api/reservations', { flightId, passengerName })
      .then(response => console.log(response.data.message))
      .catch(error => console.error('Error creating reservation:', error));
  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      <label>
        Flight ID:
        <input type="text" value={flightId} onChange={(e) => setFlightId(e.target.value)} />
      </label>
      <label>
        Passenger Name:
        <input type="text" value={passengerName} onChange={(e) => setPassengerName(e.target.value)} />
      </label>
      <button onClick={handleReservation}>Reserve Now</button>
    </div>
  );
}

export default ReservationForm;
