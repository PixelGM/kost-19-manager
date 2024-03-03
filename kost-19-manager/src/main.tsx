import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import NewRoom from './NewRoom.tsx'
import ListRooms from './ListRooms.tsx'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
