import React, { useState } from 'react';
import axios from 'axios';

function Disaster() {
  const [disasterInfo, setDisasterInfo] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
  });

  const handleInput = (event) => {
    setDisasterInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make an API call to send the disaster information to the server
      const response = await axios.post('http://localhost:3002/add-disaster', disasterInfo);

      // Log the server response (you may want to handle this response in your application)
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error sending disaster information to the server:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-28">
        <h2>Add Disaster Information</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title">
            <strong>Title</strong>
          </label>
          <input
            type="text"
            placeholder="Enter Title"
            name="title"
            onChange={handleInput}
            className="form-control rounded-0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description">
            <strong>Description</strong>
          </label>
          <textarea
            placeholder="Enter Description"
            name="description"
            onChange={handleInput}
            className="form-control rounded-0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location">
            <strong>Location</strong>
          </label>
          <input
            type="text"
            placeholder="Enter Location"
            name="location"
            onChange={handleInput}
            className="form-control rounded-0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type">
            <strong>Type</strong>
          </label>
          <input
            type="text"
            placeholder="Enter Type (Flood, Earthquake, Fire or Other)"
            name="type"
            onChange={handleInput}
            className="form-control rounded-0"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="severity">
            <strong>Severity</strong>
          </label>
        <select id="severity" name="severity">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>

        </div>
        <div className="mb-3">
          <label htmlFor="date">
            <strong>Date</strong>
          </label>
          <input
            type="date"
            name="date"
            onChange={handleInput}
            className="form-control rounded-0"
          />
        </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Add Disaster Information</strong>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Disaster;
