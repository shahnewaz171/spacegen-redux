import React from 'react';
import InputFields from '../InputFields/InputFields';
import Missions from '../Missions/Missions';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    return (
        <div className="container">
            <Navbar />
            <InputFields />
            <Missions />
        </div>
    );
};

export default Home;