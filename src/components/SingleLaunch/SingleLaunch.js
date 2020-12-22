import React from 'react';

const SingleLaunch = ({ launch }) => {
  return (
    <>
      <p>{launch.name} <br />
      {launch.links.patch.small ? 
        <> <img src={launch.links.patch.small} alt={`${launch.name} patch`}
        width="100" height="100" /> <br /> 
        </>: null}
      Date: {launch.date_utc}<br />
      {launch.details}<br />
      </p>
      <br />
    </>
  );
}

export default SingleLaunch;