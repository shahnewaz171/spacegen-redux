import React from 'react';
import { render } from "../../test.utils";
import Missions from '../Missions/Missions';

it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
        <Missions />
        , div
    );
})