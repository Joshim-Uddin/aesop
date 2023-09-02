import React from 'react';
import brand from './../assets/brandwhite.png'
import Button from './Button';

const Hero = () => {
    return (
        <div className='hero-item grid grid-cols-6 gap-5'>
           
          
         <div className='relative '>
         <img src={brand} alt="brand" className='w-32 h-14 mx-auto absolute top-32 right-8'/>
         </div>
         

            <div className='text-white flex flex-col justify-center col-span-2'>
                <small>Bar Soaps</small>
                <h3 className='text-4xl text-white font-semibold my-5'>A body care classic, reimagined</h3>
                <p className='mb-5 w-4/5'>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.</p>
                <div className="w-3/5 hover:bg-white hover:text-black">
                <Button props={"Discover Bar Soaps"} />
                </div>
            </div>
           
        </div>
    );
};

export default Hero;