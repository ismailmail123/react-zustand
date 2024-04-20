import React from "react";
import { Link } from "react-router-dom";
import CartItemCard from "../components/CartItemCard";
import OrderValue from "../components/OrderValue";
import useCartStore from "../store/useCartStore";

const OrderValue1 = () => {
  const { cartItems } = useCartStore();
//   const cartItems = [];

  if (cartItems && cartItems.length < 1) {
    return (
      <div className="h-72 flex flex-col items-center justify-center">
        <h2 className="text-3xl mt-10 mb-5 font-bold">Cart is Empty</h2>
        <Link
          to="/shop"
          className="px-6 py-2 rounded-md text-white bg-orange-500"
        >
          Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-start md:select-none md:justify-between">
      <div className="flex flex-wrap flex-col md:flex-row mb-10 gap-10">
        {cartItems.map((item, index) => (
          <CartItemCard key={index} product={item} />
        ))}
      </div>

      <div className="md:sticky md:top-28 bg-orange-500 text-white flex-none w-72 h-[300px] rounded-2xl">
        <OrderValue />
      </div>
    </div>
  );
};

export default OrderValue1;