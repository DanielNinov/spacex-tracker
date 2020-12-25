import React from 'react';
import { GITHUB_URL, LINKEDIN_URL } from '../../../common/constants';

const Home = () => {
    return (
        <div className="container text-center">
            <h1 className="home-title">Welcome to the SpaceX Launch Plan Tracker</h1>
            <a className="social-media-icon mr-4"
                href={`${GITHUB_URL}`}
                aria-label="Github repository link"><i className="fab fa-github fa-lg" /></a>
            <a className="social-media-icon"
                href={`${LINKEDIN_URL}`}
                aria-label="LinkedIn link"><i className="fab fa-linkedin fa-lg" /></a>
        </div>
    );
}

export default Home;