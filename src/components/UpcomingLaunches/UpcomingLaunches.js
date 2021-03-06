import React, { useEffect, useState } from 'react';
import { SPACEX_API, UPCOMING_BODY } from '../../common/constants';
import Loading from '../Base/Loading/Loading';
import SingleLaunch from '../SingleLaunch/SingleLaunch';

const UpcomingLaunches = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`${SPACEX_API}/launches/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: UPCOMING_BODY,
    }).then(res => {
      return res.json();
    }).then(res => {
      setLaunches(res.docs);
    }).catch(e => console.log(e.message))
    .finally(() => setLoading(false))
  }, []);

  if(loading) {
    return (
      <div className="container">
        <h1>Upcoming</h1>
        <Loading />
      </div>
    );
  }

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