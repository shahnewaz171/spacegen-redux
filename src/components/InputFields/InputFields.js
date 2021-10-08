import React from 'react';

const InputFields = () => {

    return (
        <div className="mt-5">
            <div className="row align-items-center justify-content-center">
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
                    <div className="d-flex flex-column">
                        <p> </p>
                        <div id="search" className="input-group">
                            <input type="text" className="form-control" placeholder="What rocket are you looking for?" />
                            <button type ="submit" className ="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputFields;