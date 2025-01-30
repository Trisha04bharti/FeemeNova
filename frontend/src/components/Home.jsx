import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [date, setDate] = useState('');
  const token = localStorage.getItem('token');

  const addCycle = async () => {
    await axios.post('http://localhost:5000/cycle/add-cycle', { token, date });
    alert('Cycle Date Added!');
  };

  return (
    <div>
      <h1>Menstrual Cycle Tracker</h1>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button onClick={addCycle}>Add Period Date</button>
    </div>
  );
}

export default Home;