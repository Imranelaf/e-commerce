const ColorSelector = ({ selectedColor, variants, onSelectColor }) => {
  return (
    <div>
      <h4 className="text-md text-gray-500 mt-4 uppercase">COLOR: {selectedColor}</h4>
      <div className="flex gap-2">
        {variants.map((variant) => (
          <button
            key={variant.color}
            onClick={() => onSelectColor(variant.color)}
            className={`h-[40px] w-[40px] mt-2 rounded-full border-2 ${
              selectedColor === variant.color ? "border-black" : "border-transparent"
            }`}
            style={{ backgroundColor: variant.color }}
            aria-label={`Select color ${variant.color}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
