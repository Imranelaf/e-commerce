'use client'
import { useState } from "react";

const ProductsInfos = (product) => {

    const [selectedColor, setSelectedColor] = useState(product.props.variants[0].color);
    const [selectedSize, setSelectedSize] = useState();
    const [stock, setStock] = useState();
    const selectedVariant = product.props.variants.find(v => v.color === selectedColor);

    const orderHandler = (size, stock)=>{

        console.log(size, stock, selectedColor);
        setSelectedSize(size);
        setStock(stock);
    } 

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
                            onClick={() => orderHandler(size, stock)}
                            className={`h-[50px] w-[50px] mt-2 px-3 py-1 border cursor-pointer ${stock === 0
                                    ? "bg-gray-200 text-gray-400"
                                    : "hover:bg-gray-300 duration-400"
                                }
              ${size === selectedSize
                                && "bg-gray-700 text-white hover:bg-gray-700 border"
                                }
              `}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

             {
                selectedSize != undefined ?( stock != 0 ?
                <button className="my-4 px-4 w-full py-2 bg-white tracking-widest text-lg text-black hover:bg-gray-800 hover:text-white transition duration-200 text-sm border font-semibold shadow-lgb cursor-pointer">ADD TO CART - ${product.props.price} </button>
                 :
                 <>
                 <p className="text-red-500 font-semibold">Out of stock</p>
                 <button className="my-4 px-4 w-full py-2 bg-white tracking-widest text-lg text-black hover:bg-gray-800 hover:text-white transition duration-200 text-sm border font-semibold shadow-lgb cursor-pointer">Notified me </button>  
                 </>
                )
                :
                <button className="my-4 px-4 w-full py-2 tracking-widest text-lg text-gray-600 bg-gray-200  text-sm border font-semibold shadow-lgb">SELELCT THE SIZE AND COLOR  </button>
            }       

        </div>
    );
};

export default ProductsInfos;
