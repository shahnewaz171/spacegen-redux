import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from './fetchMissionsInfo';

const Missions = () => {
    const missions = useSelector((state) => state.missions);
    console.log(missions);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMissions());
    }, [dispatch])


    return (
        <div className="mt-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className ="card-body">
                        <h5 className ="card-title">Card title</h5>
                        <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className ="card-body">
                        <h5 className ="card-title">Card title</h5>
                        <p className ="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className ="card-body">
                        <h5 className ="card-title">Card title</h5>
                        <p className ="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <button type="button" className="btn btn-primary">Explore More</button>
            </div>
        </div>
    );
};

export default Missions;