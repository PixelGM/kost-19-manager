import React, { useEffect, useState } from 'react';

interface Room {
    id: number;
    nomorKamar: string;
    hargaPerBulan: string;
    isOccupied: boolean;
    ac: boolean;
    kamarMandiDalam: boolean;
}

const ListRooms: React.FC = () => {
    const [rooms, setRooms] = useState<Room[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/rooms')
            .then(response => response.json())
            .then(data => setRooms(data));
    }, []);

    return (
        <div>   
            <h1>List of Rooms</h1>
            {rooms.map(room => (
                <div key={room.id}>
                    <h2>{room.nomorKamar}</h2>
                    <p>{room.hargaPerBulan}</p>
                    <p>{room.isOccupied ? 'Occupied' : 'Available'}</p>
                    <p>{room.ac ? 'AC' : 'No AC'}</p>
                    <p>{room.kamarMandiDalam ? 'Bathroom Inside' : 'No Bathroom Inside'}</p>
                </div>
            ))}
        </div>
    );
};

export default ListRooms;