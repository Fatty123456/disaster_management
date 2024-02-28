import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisasterList() {
  const [disasters, setDisasters] = useState([]);

  useEffect(() => {
    // Fetch disaster data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/disasters');
        setDisasters(response.data);
      } catch (error) {
        console.error('Error fetching disaster data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-3 rounded w-50">
      <h2>List of All Disasters</h2>
      <ul className="list-group">
        {disasters.map((disaster) => (
          <li key={disaster.id} className="list-group-item">
            <strong>{disaster.title}</strong> - {disaster.location} - {disaster.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisasterList;
