import React, { useEffect, useState } from 'react';
import { PAST_BODY, SPACEX_API } from '../../common/constants';
import SingleLaunch from '../SingleLaunch/SingleLaunch';

const PastLaunches = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch(`${SPACEX_API}/launches/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: PAST_BODY,
    }).then(res => {
      return res.json();
    }).then(res => {
      console.log(res);
      setLaunches(res.docs);
    })
  }, []);

  return (
    <>
      <div className="container">
        <h1>All Past</h1>
        {launches.map((e, i) => {
          return (
            <SingleLaunch key={i} launch={e} />
          )
        })}
      </div>
    </>
  );
}

export default PastLaunches;