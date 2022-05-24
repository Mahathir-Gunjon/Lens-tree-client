import React from 'react';
import Footer from '../../Footer/Footer';
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
            <Footer/>
        </div>
    );
};

export default Home;