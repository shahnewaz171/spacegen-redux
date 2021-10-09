import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MissionList from '../MissionList/MissionList';
import { fetchMissions } from './fetchMissionsInfo';

const Missions = () => {
    const {missions} = useSelector((state) => state.missionsInfo);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMissions());
    }, [dispatch]);

    console.log(missions);


    return (
        <div className="mt-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {missions?.map((mission) => <MissionList mission={mission} key={mission.mission_name} />)}
            </div>

            <div className="d-flex justify-content-center mt-5">
                <button type="button" className="btn btn-primary">Explore More</button>
            </div>
        </div>
    );
};

export default Missions;