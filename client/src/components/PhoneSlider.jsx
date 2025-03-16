'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

const cards = [
  {
    url: "https://images.unsplash.com/photo-1734377543826-1a64e1d4c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    caption: 1,
    price: "$37.55"
  },
  {
    url: "https://images.unsplash.com/photo-1734377543826-1a64e1d4c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    caption: 2,
    price: "$77.00"
  },
  {
    url: "https://images.unsplash.com/photo-1734377543826-1a64e1d4c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    caption: 3,
    price: "$17.55"
  }
];

function PhoneSlider() {
  return (
    <div className="flex justify-center items-center w-full h-auto my-6">
      <div className="lg:w-[400px] w-full h-auto">
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={20} 
          slidesPerView={1.5} // Show 1 full card & part of next
          centeredSlides={true} // Center the active card
         
          className="w-full"
        >
          {cards.map((item) => (
            <SwiperSlide key={item.caption} className="flex flex-col items-center">
              <img src={item.url} alt={`Slide ${item.caption}`} className="w-full h-auto rounded-lg" />
              <div className="flex justify-between w-full">
                <div>
                  <p>Shoes for men</p>
                  <p className="italic text-gray-600">Nanami Night</p>
                </div>
                <p className="font-semibold">{item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PhoneSlider;
