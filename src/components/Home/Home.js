import React from 'react';
import Missions from '../Missions/Missions';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    return (
        <div className="container">
            <Navbar />
            <Missions />
        </div>
    );
};

export default Home;