'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const fadeImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'First Slide'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Second Slide'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Third Slide'
    },
];

export default function Slider() {
  return (
    <div className="w-full h-[calc(100vh-100px)]"> 
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000} 
        effect="fade"
        className="relative w-full h-full mx-auto"
        
      >
        {fadeImages.map((item, index) => (
          <SwiperSlide key={index} className="h-full">
            <img 
              src={item.url} 
              alt={item.caption} 
              className="w-full h-full object-full rounded-lg transition-all duration-[1000ms] ease-linear"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
