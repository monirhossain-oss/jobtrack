import React from 'react';
import Hero from '../components/Home/Hero';
import HowItWorks from '../components/Home/HowItWorks';
import AllCompanies from '../components/Home/AllCompanies';
import TestiMonials from '../components/Home/TestiMonials';
import Tips from '../components/Home/Tips';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Job Tracker | Home</title>
            </Helmet>
            <Hero></Hero>
            <HowItWorks></HowItWorks>
            <AllCompanies></AllCompanies>
            <TestiMonials></TestiMonials>
            <Tips></Tips>
        </>
    );
};

export default Home;