import React from 'react';
import TopBar from '../components/TopBar';
import SecondTopBar from '../components/SecondTopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BodySection from '../components/BodySection';
import Athenaeum from '../components/Athenaeum';


const Main = () => { 
 
    return (
        <>
        <TopBar />
        <SecondTopBar />
        <Navbar />
        <Hero />
       <BodySection />
       <Athenaeum />
        </>
    );
};

export default Main;