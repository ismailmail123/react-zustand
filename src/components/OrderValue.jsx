import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const getTotal = (cartItem) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItem.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return { totalPrice, totalQuantity };
};

const OrderValue = () => {
  const { cartItems } = useCartStore();

  const { totalQuantity, totalPrice } = getTotal(cartItems);

  return (
    <div className="pt-5 pb-10 px-3">
      <h2 className="font-bold text-center text-2xl mb-5">Order Value</h2>

      <h3 className="text-xl text-center  ">
        Total Quantity: <span className="font-bold"> {totalQuantity}</span>
      </h3>
      <h3 className="text-xl text-center mt-5  ">
        Total Price:{" "}
        <span className="font-bold">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(totalPrice)}
        </span>
      </h3>

      <div className="flex justify-center mt-7">
        <button className="text-xl font-bold border-solid border-3 border-white text-white rounded-lg px-7 py-2">
          <Link to="/order/checkout">Checkout</Link>
        </button>
      </div>
    </div>
  );
};

export default OrderValue;
