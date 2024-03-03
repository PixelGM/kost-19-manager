import React from 'react';
import { useParams } from 'react-router-dom';

const RoomDetails: React.FC = () => {
    let { nomorKamar } = useParams();

    return (
        <div>
            <h1>Room Details</h1>
            <p>Nomor Kamar: {nomorKamar}</p>
            {/* Display other room details here */}
        </div>
    );
};

export default RoomDetails;
