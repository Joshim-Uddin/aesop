import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Scrollbar } from 'swiper/modules';
import Button from './Button';
import store1 from './../assets/store_one.avif'
import store2 from './../assets/store_two.avif'
import store3 from './../assets/store_three.jpg'


const StoreLocator = () => {
    return (
        <>
        <div className='flex gap-16 ps-16 py-12'>
            <div className='w-2/5'>
                <h3 className='text-3xl font-medium mb-8'>Store Locator</h3>
                <p className='mb-8'>Our consultants are available to host you in-store and provide tailored guidance on gift purchases.</p>
                <div className='w-2/3 hover:bg-black hover:text-white'>
                <Button props={'Find a nearby store'}/>
                </div>
            </div>
            <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        scrollbar={true}
        navigation={true}
        modules={[ Scrollbar, Navigation]}
        className="mySwiper relative bodysection pb-12"
      >
        
        <SwiperSlide>
          <img src={store1} alt=""/>
          </SwiperSlide>
        <SwiperSlide>
          <img src={store2} alt=""/>
          </SwiperSlide>
        <SwiperSlide>
          <img src={store3} alt=""/>
          </SwiperSlide>
        
      </Swiper>
      
        </div>
        <p className='text-center w-3/4 ps-4 ms-2'>Aesop ifc mall</p>
        
        </>
        
    );
};

export default StoreLocator;