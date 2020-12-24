import React, { useEffect, useState } from 'react';
import { SPACEX_API } from '../../common/constants';
import SingleLaunch from '../SingleLaunch/SingleLaunch';

const UpcomingLaunches = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch(`${SPACEX_API}/launches/upcoming`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {
      return res.json();
    }).then(result => setLaunches(result));
  }, []);

  return (
    <>
      <div className="container">
        <h1>Upcoming</h1>
        {launches.map((e, i) => {
          return (
            <SingleLaunch key={i} launch={e} />
          )
        })}
      </div>
    </>
  );
}

export default UpcomingLaunches;