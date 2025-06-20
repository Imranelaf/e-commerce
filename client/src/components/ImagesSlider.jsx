'use client'

import Swipper from './common/Swipper';

const fadeImages = [
  'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
  'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
];

export default function ImagesSlider() {
  return (
    <div className="w-full lg:h-[85vh] h-[60vh]">
      <Swipper 
        images={fadeImages} 
        playauto={{ delay: 4000, disableOnInteraction: false }}
      />
    </div>
  );
}