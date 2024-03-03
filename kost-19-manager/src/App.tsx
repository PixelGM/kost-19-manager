import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewRoom from './NewRoom'; // Adjust the import path as necessary
import ListRooms from './ListRooms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create/" element={<NewRoom />} />
        <Route path="/" element={<ListRooms />} />
        {/* Define other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
