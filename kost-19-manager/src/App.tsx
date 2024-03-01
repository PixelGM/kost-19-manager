import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [room, setRoom] = useState({
    pricePerMonth: '',
    isOccupied: false,
    tenantName: '',
    tenantPhone: '',
    tenantNIK: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRoom(prevRoom => ({
      ...prevRoom,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(room),
      });

      if (response.ok) {
        alert('Room added successfully!');
        // Reset form or handle success
      } else {
        alert('Failed to add room.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Price per Month:
        <input
          type="number"
          name="pricePerMonth"
          value={room.pricePerMonth}
          onChange={handleChange}
        />
      </label>
      <label>
        Is Occupied:
        <input
          type="checkbox"
          name="isOccupied"
          checked={room.isOccupied}
          onChange={handleChange}
        />
      </label>
      <label>
        Tenant Name:
        <input
          type="text"
          name="tenantName"
          value={room.tenantName}
          onChange={handleChange}
        />
      </label>
      <label>
        Tenant Phone:
        <input
          type="text"
          name="tenantPhone"
          value={room.tenantPhone}
          onChange={handleChange}
        />
      </label>
      <label>
        Tenant NIK:
        <input
          type="text"
          name="tenantNIK"
          value={room.tenantNIK}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add New Room</button>
    </form>
  );
}

export default App
