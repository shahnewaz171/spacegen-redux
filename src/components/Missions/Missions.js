import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionList from '../MissionList/MissionList';
import { fetchMissions } from './fetchMissionsInfo';

const Missions = () => {
    const { missions, isLoading } = useSelector((state) => state.missionsInfo);
    const [searchValue, setSearchValue] = useState("");
    const [launchStatus, setLaunchStatus] = useState('');
    const [isUpcoming, setIsUpcoming] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMissions());
    }, [dispatch]);

    // console.log(searchValue);

    const searchResults = (e) => {
        e.preventDefault();
    }

    const date = new Date();
    const specificMissions = missions?.filter((data) => {
        const getLaunchDate = new Date(data.launch_date_local);
        const launchYear = getLaunchDate.getFullYear();
        const launchMonth= ("0" + (getLaunchDate.getMonth())).slice(-2);
        if(searchValue == ""){
            return data;
        }
        else if(data.rocket?.rocket_name.toLowerCase().includes(searchValue.toLowerCase())){
            if((data.launch_success == true && launchStatus == 'success') || (data.upcoming == true && isUpcoming == "upcoming")){
                return data;
            }
            else if(launchYear == selectedDate || launchMonth == selectedDate){
                return data;
            }
            else if(data.launch_success !== null && data.launch_success == false && launchStatus == 'failure'){
                return data;
            }
            else if(launchStatus == '' && isUpcoming == "" && selectedDate == ""){
                return data;
            }
        }
    })
    console.log(selectedDate);
    console.log(specificMissions);

    return (
        <>
            <div className="row align-items-center justify-content-center mt-5 mx-2">
            <div className="col-6 col-lg-2 pb-2">
                    <div className="d-flex flex-column">
                        <label htmlFor="launchDate">Launch Date</label>
                        <select id="launchDate" onChange={(e) => setSelectedDate(e.target.value)} className="form-select">
                            <option defaultValue="">Choose...</option>
                            <option value="">Last Week</option>
                            <option value={("0" + (date.getMonth())).slice(-2)}>Last Month</option>
                            <option value={date.getFullYear() - 1}>Last Year</option>
                        </select>
                    </div>
                </div>

                <div className="col-6 col-lg-2 pb-2">
                    <div className="d-flex flex-column">
                        <label htmlFor="launchStatus">Launch Status</label>
                        <select id="launchStatus" onChange={(e) => setLaunchStatus(e.target.value)} className="form-select">
                            <option value="">Choose...</option>
                            <option value="failure">Failure</option>
                            <option value="success">Success</option>
                        </select>
                    </div>
                </div>

                <div className="col-6 col-lg-2 pb-2">
                    <div className="d-flex flex-column">
                        <label htmlFor="upcoming">Is upcoming?</label>
                        <select id="upcoming" onChange={(e) => setIsUpcoming(e.target.value)} className="form-select">
                            <option value="">Choose...</option>
                            <option value="upcoming">Upcoming</option>
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

            <div className="mt-4 mx-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* {
                        specificMissions.length ? specificMissions.map((mission) => {
                            return (
                                <MissionList mission={mission} key={mission.mission_name} />
                            )
                        })
                        : !isLoading &&
                        <p>No results found for <span className="text-danger">#{searchValue}</span></p> 
                    } */}
                </div>
            </div>
        </>
    );
};

export default Missions;