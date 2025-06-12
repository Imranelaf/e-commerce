'use client'

import ProductImages from "@/components/productImagesDisplay/ProductImage";
import ProductDetails from "@/services/ProductDetails";
import productData from "@/store/data";
import { useState } from "react";

const productImages = productData;

export default function Product() {
  const [selectedImage, setSelectedImage] = useState(productImages.images[0]);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row p-4">
      <ProductImages
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        images={productImages.images}
       
      />

      {/* Product Info */}
      <ProductDetails product={productImages} />
    </div>
  );
}
