'use client';

import { useState } from "react";
import AddToCartButton from "@/components/productDetails/AddToCartButton";
import ColorSelector from "@/components/productDetails/ColorSelector";
import SizeSelector from "@/components/productDetails/SizeSelector";
import ProductDescription from "@/components/productDetails/ProductDescription";

const ProductDetails = ({ product }) => {
  // State for selected color, size, and stock quantity
  const [selectedColor, setSelectedColor] = useState(product.variants[0].color);
  const [selectedSize, setSelectedSize] = useState(null);
  const [stock, setStock] = useState(null);

  // Find the variant that matches the selected color
  const selectedVariant = product.variants.find(
    (variant) => variant.color === selectedColor
  );

  // Handle when user selects size
  const handleSizeSelect = (size, stockQuantity) => {
    setSelectedSize(size);
    setStock(stockQuantity);
  };

  return (
    <div className="w-5/12 bg-white rounded shadow p-4 space-y-2">
      <h1 className="text-2xl font-semibold mt-4">{product.title}</h1>

      <ProductDescription description={product.description} />

      {product.discount !== 0 ? (
        <div className="mt-4">
          <h3 className="text-xl text-red-400 line-through">${product.price}</h3>
          <h3 className="text-xl text-green-600 font-semibold">${product.discount}</h3>
        </div>
      ) : (
        <h3 className="text-xl text-gray-700 mt-4">${product.price}</h3>
      )}

      <ColorSelector
        selectedColor={selectedColor}
        variants={product.variants}
        onSelectColor={setSelectedColor}
      />

      <SizeSelector
        availableSizes={selectedVariant.sizes}
        selectedSize={selectedSize}
        onSelectSize={handleSizeSelect}
      />

      <AddToCartButton
        selectedSize={selectedSize}
        stock={stock}
        price={product.price}
      />
    </div>
  );
};

export default ProductDetails;
