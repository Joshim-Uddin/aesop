import React from 'react';
import TopBar from '../components/TopBar';
import SecondTopBar from '../components/SecondTopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BodySection from '../components/BodySection';
import Athenaeum from '../components/Athenaeum';
import SkinSection from '../components/SkinSection';
import PostPooSection from '../components/PostPooSection';
import HomeSection from '../components/HomeSection';
import StoreLocator from '../components/StoreLocator';
import Rivews from '../components/Rivews';
import Footer from '../components/Footer';


const Main = () => { 
 
    return (
        <>
        <TopBar />
        <SecondTopBar />
        <Navbar />
        <Hero />
       <BodySection />
       <Athenaeum />
       <SkinSection />
       <PostPooSection />
       <HomeSection />
       <StoreLocator />
       <Rivews />
       <Footer />
        </>
    );
};

export default Main;