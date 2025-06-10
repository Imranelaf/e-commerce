'use client'

import Swipper from "@/components/common/Swipper";
import ProductDetails from "@/services/ProductDetails";
import productData from "@/store/data";
import Image from "next/image";
import { useState } from "react";

const productImages = productData;

export default function Product() {
  const [selectedImage, setSelectedImage] = useState(productImages.images[0]);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row gap-4 p-4">
      
      {/* Desktop Layout - Thumbnail List (hidden on mobile) */}
      <ul className="hidden lg:flex flex-col gap-2 w-1/12">
        {productImages.images.map((src, idx) => (
          <li key={src}>
            <button
              onClick={() => setSelectedImage(src)}
              aria-label={`Select image ${idx + 1}`}
              className={`relative h-20 w-20 rounded overflow-hidden border-2 ${
                selectedImage === src ? "border-gray-600" : "border-transparent"
              }`}
            >
              <Image
                src={src}
                alt={`Product thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="80px"
                priority={idx === 0}
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Image Display Area */}
      <div className="relative w-full lg:w-6/12 aspect-square rounded overflow-hidden shadow-lg">
        {/* Desktop: Selected Image (hidden on mobile) */}
        <div className="hidden lg:block w-full h-full">
          <Image
            src={selectedImage}
            alt="Selected product"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </div>
        
        {/* Mobile: Swiper (hidden on desktop) */}
        <div className="block lg:hidden w-full h-full">
          <Swipper 
            images={productData} 
            playauto={false} 
          />
        </div>
      </div>

      {/* Product Info */}
      <ProductDetails product={productImages} />
    </div>
  );
}