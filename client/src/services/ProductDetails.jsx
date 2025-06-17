'use client';

import { useState } from "react";
import AddToCartButton from "@/components/productDetails/AddToCartButton";
import ColorSelector from "@/components/productDetails/ColorSelector";
import SizeSelector from "@/components/productDetails/SizeSelector";
import ProductDescription from "@/components/productDetails/ProductDescription";
import Notified from "@/components/productDetails/Notified";
import Checkout from "@/components/Checkout";

const ProductDetails = ({ product }) => {
    // States for selected color, size, and stock quantity
    const [selectedColor, setSelectedColor] = useState(product.variants[0].color);
    const [selectedSize, setSelectedSize] = useState(null);
    const [stock, setStock] = useState(null);
    const [notified, setNotified] = useState(false);
    const [check, setCheck] = useState(false);

    console.log(product);
    
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
        <div className="lg:w-5/12 w-full bg-white rounded shadow p-4 space-y-2">

            <ProductDescription
                description={product.description}
                title={product.title}
            />

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
                notified={notified}
                notifiedFunction={setNotified}
                checkout={setCheck}
                
            />

            {
            notified &&
            <div className="fixed top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-gray-500/60 backdrop-blur-sm p-4">
                <Notified 
                notified={notified}
                notifiedFunction={setNotified}/>
            </div>
            }

            { check &&
            <div className="fixed z-50 top-0 left-0  overflow-hidden  h-screen w-screen bg-gray-500/80">
            <Checkout 
                title={product.title}
                image={product.images[0]}
                price={product.price}
                size={selectedSize}
                color={selectedColor}
                setcheckout={setCheck}
            />
            </div>
            }

        </div>
        
        
    );
};

export default ProductDetails;
