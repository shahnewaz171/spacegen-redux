import React from 'react';
import ReactDOM from 'react-dom';
import Missions from '../Missions';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Missions />, div);
})