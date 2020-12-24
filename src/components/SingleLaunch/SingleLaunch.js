import React from 'react';
import DateFormatter from '../../utils/DateFormatter';

const SingleLaunch = ({ launch }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-auto">
            {launch.links.patch.small ?
              <> <img className="launch-patch-small" src={launch.links.patch.small} alt={`${launch.name} patch`}
                width="100" height="100" /> <br />
              </> : null}
          </div>
          <div className="col">
            <div className="card-body">
              <h4 className="card-title">{launch.name}</h4>
              <h6 className="card-subtitle mb-2">{DateFormatter(launch.date_utc, launch.date_precision, launch.tbd, launch.net)}</h6>
              <p className="card-text">{launch.details}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleLaunch;