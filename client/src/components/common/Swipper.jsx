'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Swipper = ({ images, links = "", playauto = { delay: 4000, disableOnInteraction: false } }) => {
  
  // Handle both array and object with images property
  const imageArray = Array.isArray(images) ? images : images?.images || [];
  
  return (
    <div className="w-full h-full"> 
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={playauto}
        speed={1000} 
        className="relative w-full h-full mx-auto"
      >
        {imageArray.map((item, index) => (
          <SwiperSlide key={index} className="h-full">
            <img 
              src={item} 
              alt={`Image ${index + 1}`} 
              className="w-full h-full object-cover transition-all duration-[1000ms] ease-linear"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Swipper;