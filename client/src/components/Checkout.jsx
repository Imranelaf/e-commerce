import Button from "./common/Button";

const Checkout = ({ title, image, price, color, size, checkout, setcheckout }) => {
    return (
        <div className="fixed inset-0 z-50 flex justify-end items-center bg-black/50 backdrop-blur-sm">
            <div className="h-full w-full md:w-3/5 lg:w-2/5 bg-white p-6 shadow-xl relative overflow-y-auto">
                {/* Close Button */}
                <button
                    className="absolute top-4 text-gray-500 hover:text-red-500 transition text-2xl"
                    aria-label="Close"
                    onClick={()=>{setcheckout(false)}}
                >
                    ❌
                </button>

                {/* Shipping Message */}
                <div className="mt-10 text-center">
                    <p className="text-sm text-green-600 italic underline">
                        🎉 Congrats! You get free standard shipping.
                    </p>
                </div>

                {/* Product Summary */}
                <div className="mt-6 flex flex-col gap-4 items-center text-center">
                    <img
                        src={image}
                        alt={title}
                        className="w-32 h-32 object-cover rounded-md"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <p className="text-gray-600">Color: <span className="font-medium">{color}</span></p>
                        <p className="text-gray-600">Size: <span className="font-medium">{size || "N/A"}</span></p>
                        <p className="text-xl text-black font-bold mt-2">${price}</p>
                    </div>
                </div>

                {/* Coupon Input */}
                <div className="mt-8">
                    <label htmlFor="coupon" className="block text-sm font-medium text-gray-700">
                        Enter your coupon code
                    </label>
                    <input
                        id="coupon"
                        type="text"
                        placeholder="e.g. SAVE10"
                        className="mt-2 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>

                {/* Return Protection */}
                <div className="mt-6 p-4 bg-gray-100 rounded-md">
                    <h3 className="font-semibold text-sm mb-1">🔐 Returns Protection</h3>
                    <p className="text-sm text-gray-600">
                        Buy returns protection now and qualify for free returns.
                        <br />*Does not apply to Final Sale items.
                    </p>
                </div>

                {/* Checkout Button */}
                <div className="mt-8">
                    <Button fullWidth>Proceed to Checkout</Button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
