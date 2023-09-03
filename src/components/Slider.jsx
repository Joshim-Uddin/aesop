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
        <div>
        {images?.map((image, index)=><SwiperSlide key={index} className='flex flex-col pt-48 pb-8'>
          <div className='h-[461px] flex items-end'>
          <img src={image.url} alt=""/>
          </div>
          <h4 className='cursor-pointer hover:underline'>{image.name}</h4>
          <p>{image.speciality}</p>
          </SwiperSlide>)}
          </div>
        
      </Swiper>
        </>
    );
};

export default Slider;