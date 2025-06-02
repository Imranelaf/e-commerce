'use client'

import Image from "next/image";
import { useState } from "react";

const productImages = ["https://images.unsplash.com/photo-1748024093647-bbbfbe2c0c3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1726137569911-bc03e55fd87f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1748188574118-896e39aa4d18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1748032886766-f27eac6e2b41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"]

export default function Product() {
  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  return (
    <div className="min-h-screen w-full bg-green-50 flex gap-4 p-4">
      
      {/* Thumbnail List */}
      <ul className="flex flex-col gap-2 w-1/12">
        {productImages.map((src, idx) => (
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

      {/* Selected Image */}
      <div className="relative w-6/12 aspect-square rounded overflow-hidden shadow-lg">
        <Image
          src={selectedImage}
          alt="Selected product"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
      </div>

      {/* Product Info */}
      <div className="w-5/12 bg-white rounded shadow p-4 space-y-2">
        <h1 className="text-2xl font-semibold">Product Title</h1>
        <h3 className="text-xl text-gray-700">Price: $199</h3>
        <h4 className="text-md text-gray-500">Selected Color Preview</h4>
        <h4 className="text-md text-gray-500">Select Size:</h4>
      </div>
    </div>
  );
}
