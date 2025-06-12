import Button from "../common/Button";

const AddToCartButton = ({ selectedSize, stock, price, notifiedFunction, notified}) => {
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
        <Button onClick={() => notifiedFunction(!notified)}>
        Notify me
        </Button>

      </>
    );
  }

  return <Button>ADD TO CART - ${price}</Button>;
};

export default AddToCartButton;
