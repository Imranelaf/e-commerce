'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, A11y } from 'swiper/modules';
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
  },
  {
    url: "https://images.unsplash.com/photo-1734377543826-1a64e1d4c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    caption: 4,
    price: "$29.99"
  },
  {
    url: "https://images.unsplash.com/photo-1734377543826-1a64e1d4c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    caption: 5,
    price: "$17.55"
  },
  {
    url: "https://images.unsplash.com/photo-1734377543826-1a64e1d4c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    caption: 6,
    price: "$17.55"
  },
  {
    url: "https://images.unsplash.com/photo-1734377543826-1a64e1d4c5fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    caption: 7,
    price: "$17.55"
  }
];

export default function CardsSlider() {
  return (
    <div className="flex justify-center items-center w-full h-auto bg-gray-100 my-6">
      <div className="w-full max-w-screen-xl">
        <Swiper
          modules={[FreeMode, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4.5,
              spaceBetween: 40,
            },
          }}
          className="w-full lg:my-5 mb-4"
        >
          {cards.map((item) => (
            <SwiperSlide 
              key={item.caption} 
              className="w-[450px] flex flex-col items-center"
            >
              <img 
                src={item.url} 
                alt={`Slide ${item.caption}`} 
                className="w-[450px] h-[300px] object-cover"
              />
              <div className="relative w-full mt-2">
                <div>
                  <p>Shoes for men</p>
                  <p className="italic text-gray-600">Nanami Night</p>
                </div>
                <p className="relative font-semibold">{item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>

  );
}