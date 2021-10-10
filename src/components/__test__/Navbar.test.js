import React from 'react';
import { render } from "../../test.utils";
import Navbar from '../Navbar/Navbar';


it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
        <Navbar />
        , div
    );
});