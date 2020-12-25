import React from 'react';
import loadGif from '../../../assets/loading.gif';

const Loading = () => {
    return (
        <img src={loadGif} className="loading-img center-block" alt="Loading Gif" />
    );
}

export default Loading;