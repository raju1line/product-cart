import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./ShoppingCart.css";
const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const addtoCard = (Product) => {
    const newCart = [...cart, Product];
    setCart(newCart);
  };
  return (
    <div className="shoping-cart">
      <div className="product-cart">
        {product.map((product) => (
          <Product
            product={product}
            key={product.id}
            addtoCard={addtoCard}
          ></Product>
        ))}
      </div>
      <div className="summary">
        <h3>Order Summary</h3>
        <p>Total add card: {cart.length}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
