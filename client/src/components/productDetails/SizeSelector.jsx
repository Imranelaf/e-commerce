const SizeSelector = ({ availableSizes, selectedSize, onSelectSize }) => {
  return (
    <div>
      <h4 className="text-md mt-4">Select Size:</h4>
      <div className="flex gap-2 flex-wrap">
        {availableSizes.map(({ size, stock }) => (
          <button
            key={size}
            onClick={() => onSelectSize(size, stock)}
            className={`h-[50px] w-[50px] mt-2 px-3 py-1 border cursor-pointer ${
              stock === 0 ? "bg-gray-200 text-gray-400" : "hover:bg-gray-300 duration-400"
            } ${size === selectedSize ? "bg-gray-700 text-white hover:bg-gray-700 border" : ""}`}
            aria-label={`Select size ${size}${stock === 0 ? " (Out of stock)" : ""}`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
