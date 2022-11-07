import React from 'react';
import Carousel from './Carousel/Carousel';
import FAQ from './FAQ/FAQ';
import Features from './Features/Features';
import GetUpdate from './GetUpdate/GetUpdate';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel> 
            <Services></Services>
            <Features></Features>
            <FAQ></FAQ>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default Home;