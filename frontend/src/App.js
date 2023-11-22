import React, { useState, useEffect } from 'react';
import FlightList from './components/FlightList';
import ReservationForm from './components/ReservationForm';
import axios from 'axios';

function App() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Fetch flights from the backend when the component mounts
    axios.get('http://localhost:5000/api/flights')
      .then(response => setFlights(response.data.flights))
      .catch(error => console.error('Error fetching flights:', error));
  }, []);

  return (
    <div>
      <h1>Airline Reservation System</h1>
      <FlightList flights={flights} />
      <ReservationForm />
    </div>
  );
}

export default App;
