import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [room, setRoom] = useState({ price: 0, isOccupied: false, tenantInfo: '' });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/rooms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(room),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Price:
        <input type="number" value={room.price} onChange={(e) => setRoom({ ...room, price: Number(e.target.value) })} />
      </label>
      <label>
        Is Occupied:
        <input type="checkbox" checked={room.isOccupied} onChange={(e) => setRoom({ ...room, isOccupied: e.target.checked })} />
      </label>
      <label>
        Tenant Info:
        <input type="text" value={room.tenantInfo} onChange={(e) => setRoom({ ...room, tenantInfo: e.target.value })} />
      </label>
      <button type="submit">Add New Room</button>
    </form>
  );
}

export default App
