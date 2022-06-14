import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default ShoppingCart;
