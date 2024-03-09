import React, { useEffect, useState } from 'react';
import './styles.css';
import Header from './Header';

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

    const handleRoomClick = (nomorKamar: string) => {
        const url = `${window.location.origin}/room/${nomorKamar}`;
        window.open(url, '_blank');
    };

    return (
        <div>
            {/* Header Template */}
            <Header />
               
            <h1>List of Rooms</h1>
            {rooms.map(room => (
                <div key={room.id}>
                    <button onClick={() => handleRoomClick(room.nomorKamar)}>{room.nomorKamar}</button>
                    {/* Other room details */}
                </div>
            ))}
        </div>
    );
};

export default ListRooms;