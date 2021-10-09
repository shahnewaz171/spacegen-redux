import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionList from '../MissionList/MissionList';
import { fetchMissions } from './fetchMissionsInfo';

const Missions = () => {
    const { missions } = useSelector((state) => state.missionsInfo);
    const [searchValue, setSearchValue] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMissions());
    }, [dispatch]);

    // console.log(searchValue);

    const searchResults = (e) => {
        e.preventDefault();
    }

    const specificMissions = missions?.filter((data) => {
        if(searchValue == ""){
            return data;
        }
        else if(data.rocket?.rocket_name.toLowerCase().includes(searchValue.toLowerCase())){
            return data;
        }
    })
    console.log(specificMissions)

    return (
        <>
            <div className="row align-items-center justify-content-center mt-5">
                <div className="col-6 col-lg-2 pb-2">
                    <div className="d-flex flex-column">
                        <label htmlFor="upcoming">Is upcoming?</label>
                        <select id="upcoming" className="form-select">
                            <option defaultValue="">Choose...</option>
                            <option value="1">Upcoming</option>
                        </select>
                    </div>
                </div>

                <div className="col-6 col-lg-2 pb-2">
                    <div className="d-flex flex-column">
                        <label htmlFor="launchDate">Launch Date</label>
                        <select id="launchDate" className="form-select">
                            <option defaultValue="">Choose...</option>
                            <option value="1">Last Week</option>
                            <option value="2">Last Month</option>
                            <option value="3">Last Year</option>
                        </select>
                    </div>
                </div>

                <div className="col-6 col-lg-2 pb-2">
                    <div className="d-flex flex-column">
                        <label htmlFor="launchStatus">Launch Status</label>
                        <select id="launchStatus" className="form-select">
                            <option defaultValue="">Choose...</option>
                            <option value="1">Failure</option>
                            <option value="2">Success</option>
                        </select>
                    </div>
                </div>

                <div className="col-md-12 col-lg-6">
                   <form onSubmit={searchResults}>
                        <div className="d-flex flex-column">
                            <p> </p>
                            <div id="search" className="input-group">
                                <input type="search" onChange={((e) => setSearchValue(e.target.value))} className="form-control" placeholder="What rocket are you looking for?" required />
                                <button type="submit" className="btn btn-primary">Search</button>
                            </div>
                        </div>
                   </form>
                </div>
            </div>

            <div className="mt-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        specificMissions.length ? specificMissions.map((mission) => {
                            return (
                                <MissionList mission={mission} key={mission.mission_name} />
                            )
                        })
                        : <p>No results found for <span className="text-danger">#{searchValue}</span></p>
                    }
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <button type="button" className="btn btn-primary">Explore More</button>
                </div>
            </div>
        </>
    );
};

export default Missions;