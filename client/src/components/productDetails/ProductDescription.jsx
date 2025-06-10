const ProductDescription = ({ description, title}) => {
  return (
    <>
        <h1 className="text-2xl font-semibold mt-4">{title}</h1>
        <p className="text-gray-700">{description}</p>
    </>
  )
};

export default ProductDescription;
