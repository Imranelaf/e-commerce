'use client'
import { useState } from "react";

const ProductsInfos = (product) => {

    const [selectedColor, setSelectedColor] = useState(product.props.variants[0].color);
    const [selectedSize, setSelectedSize] = useState();
    const selectedVariant = product.props.variants.find(v => v.color === selectedColor);



    return (
        <div className="w-5/12 bg-white rounded shadow p-4 space-y-2">
            <h1 className={`text-2xl font-semibold mt-4 `}>{product.props.title}</h1>
            <p>{product.props.description}</p>
            {product.props.discount !== 0 ? (
                <div className="mt-4">
                    <h3 className="text-xl text-red-400 line-through">${product.props.price}</h3>
                    <h3 className="text-xl text-green-600 font-semibold">
                        ${product.props.discount}
                    </h3>
                </div>
            ) : (
                <h3 className="text-xl text-gray-700 mt-4">
                    ${product.props.price}
                </h3>
            )}


            <div>
                <h4 className="text-md text-gray-500 mt-4">Select your Color: {selectedColor}</h4>
                <div className="flex gap-2">
                    {product.props.variants.map(variant => (
                        <button
                            key={variant.color}
                            onClick={() => setSelectedColor(variant.color)}
                            className={`h-[40px] w-[40px] mt-2 rounded-full border-2 ${selectedColor === variant.color ? "border-black" : "border-transparent"
                                }`}
                            style={{ backgroundColor: variant.color }}
                        ></button>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-md mt-4">Select Size: {selectedSize}</h4>
                <div className="flex gap-2 flex-wrap">
                    {selectedVariant.sizes.map(({ size, stock }) => (
                        <button
                            key={size}
                            disabled={stock === 0}
                            onClick={() => setSelectedSize(size)}
                            className={`h-[50px] w-[50px] mt-2 px-3 py-1 border ${stock === 0
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "hover:bg-gray-300 duration-400"
                                }
              ${size === selectedSize
                                && "bg-gray-700 text-white hover:bg-gray-700"
                                }
              `}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsInfos;
