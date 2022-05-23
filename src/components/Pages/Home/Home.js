import React from 'react';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import BusinesssSummery from './BusinesssSummery';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <BusinesssSummery/>
            <Reviews/>
        </div>
    );
};

export default Home;