import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import {FaArrowRight} from 'react-icons/fa'

const Slider = ({props}) => {
  const {subtitle, title, details, btntext, images} = props;
  
    return (
        <>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        scrollbar={true}
        navigation={true}
        modules={[Pagination, Scrollbar, Navigation]}
        className="mySwiper relative"
      >
        <SwiperSlide className='pb-64 ps-16'>
            <div className='text-left'>
            <h5 className='my-3'>{subtitle}</h5>
            <h2 className='text-4xl mb-3'>{title}</h2>
            <p className='mb-3'>{details}</p>
            <p className='flex items-center gap-3'>See All {btntext} Care <FaArrowRight /></p>
            </div>
        </SwiperSlide>
        {images?.map((image, index)=><SwiperSlide key={index} className='flex flex-col items-end justify-end pt-48 pb-8'>
          <img src={image.url} alt="" className='h-auto w-auto'/>
          <h4 className='cursor-pointer hover:underline'>{image.name}</h4>
          <p>{image.speciality}</p>
          </SwiperSlide>)}
        
      </Swiper>
        </>
    );
};

export default Slider;