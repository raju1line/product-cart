import React from "react";
import Product from "../Product/Product";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat(((total * 10) / 100).toFixed(2));
  const grandTotal = total + shipping + tax;

  console.log(cart);
  return (
    <div>
      <h3>Order Summary</h3>
      <p>Selected Item: {cart.length}</p>
      <p>Total price: ${total}</p>
      <p>Total shipping : ${shipping}</p>
      <p>Tax: ${tax}</p>
      <p>Grand total: ${grandTotal}</p>
    </div>
  );
};

export default Cart;
