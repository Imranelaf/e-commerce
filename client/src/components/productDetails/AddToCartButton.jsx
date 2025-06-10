import Button from "../common/Button";

const AddToCartButton = ({ selectedSize, stock, price }) => {
  if (!selectedSize) {
    return (
      <Button className="bg-gray-500 text-gray-400">
        SELECT THE SIZE AND COLOR
      </Button>
    );
  }

  if (stock === 0) {
    return (
      <>
        <p className="text-red-500 font-semibold">Out of stock</p>
        <Button>Notify me</Button>
      </>
    );
  }

  return <Button>ADD TO CART - ${price}</Button>;
};

export default AddToCartButton;
