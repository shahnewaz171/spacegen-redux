import React from 'react';

const Navbar = () => {

    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-4" href="/#">Spacegen</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active fs-6 fw-normal text-black" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-6 fw-normal text-black" href="/#">Rockets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-6 fw-normal text-black" href="/#">Missions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-6 fw-normal text-black" href="/#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;