import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewRoom from './NewRoom'; // Adjust the import path as necessary
import ListRooms from './ListRooms';
import RoomDetails from './RoomDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* List of Routes */}
        <Route path="/create/" element={<NewRoom />} />
        <Route path="/" element={<ListRooms />} />
        <Route path="/room/:nomorKamar" element={<RoomDetails />} />
        {/* Define other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
