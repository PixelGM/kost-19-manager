import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles.css'
import Header from './Header';

function NewRoom() {
  const [room, setRoom] = useState({
    nomorKamar: '',
    hargaPerBulan: '',
    isOccupied: false,
    ac: false,
    kamarMandiDalam: false
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
    <div>
      {/* Header Template */}
      <Header />
      
      <form onSubmit={handleSubmit}>
      <label>
        Nomor Kamar:
        <input
          type="number"
          name="nomorKamar"
          value={room.nomorKamar}
          onChange={handleChange}
        />
      </label>
      {/* <label>
        Is Occupied:
        <input
          type="checkbox"
          name="isOccupied"
          checked={room.isOccupied}
          onChange={handleChange}
        />
      </label> */}

      <label>
        Harga / Bulan:
        <input
          type="number"
          name="hargaPerBulan"
          value={room.hargaPerBulan}
          onChange={handleChange}
        />
      </label>
      <label>
        Fasilitas:
        <ul>
          <li>
            <label>
              AC
              <input
                type="checkbox"
                name="ac" // changed from "AC"
                checked={room.ac}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label>
            Kamar Mandi Dalam
              <input
                type="checkbox"
                name="kamarMandiDalam" // changed from "Kamar Mandi Dalam"
                checked={room.kamarMandiDalam}
                onChange={handleChange}
              />
            </label>
          </li>
        </ul>
      </label>
      <button type="submit">Add New Room</button>
    </form>
    </div>
  );
}

export default NewRoom;
