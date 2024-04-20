import Product from "./Product";

const CartProduct = ({ quantity, ...product }) => {
  return {
    ...product,
    quantity: quantity
  };
};

export default CartProduct;
