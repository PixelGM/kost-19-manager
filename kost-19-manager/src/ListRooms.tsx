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
            <Header />
            <h1>List of Rooms</h1>
            <table>
                <thead>
                    <tr>
                        <th>Room Number</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map(room => (
                        <tr 
                            key={room.id} 
                            onClick={() => handleRoomClick(room.nomorKamar)} 
                            style={{cursor: 'pointer'}}
                        >
                            <td>{room.nomorKamar}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListRooms;