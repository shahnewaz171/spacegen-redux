import React from 'react';

const MissionList = ({ mission }) => {
    const { mission_name, rocket, links, details} = mission;

    return (
        <>
            <div data-testid = "missionCard" className="col">
                <div className="card h-100">
                    <img src={links.mission_patch_small !== null ? links.mission_patch_small : "https://i.postimg.cc/Zqt1JShg/Create-Avatar.png"} className="card-img-top h-50 w-50 mt-4 mb-2 d-block mx-auto" alt="logo" />
                    <div className="card-body">
                        <h4 className="card-title">{mission_name}</h4>
                        <h5 className="card-title text-primary fw-normal">{rocket.rocket_name}</h5>
                        <p className="card-text">{details?.slice(0, 110)}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MissionList;