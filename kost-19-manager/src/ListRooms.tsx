import React, { useEffect, useState } from 'react';
import './styles.css';

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
            .then(data => {
                const sortedRooms = data.sort((a: Room, b: Room) => parseInt(a.nomorKamar) - parseInt(b.nomorKamar));
                setRooms(sortedRooms);
            });
    }, []);

    return (
        <div>   
            <h1>List of Rooms</h1>
            {rooms.map(room => (
                <div key={room.id}>
                    <button>{room.nomorKamar}</button>
                    {/* Other room details */}
                </div>
            ))}
        </div>
    );
};

export default ListRooms;