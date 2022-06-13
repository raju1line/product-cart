import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const { addtoCard,product} = props;
  const { name, img, price, seller, ratings } = props.product;
  return (
    <div className="cart-item">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div>
        <h4>
          {name} <br />
          Price: ${price}
        </h4>
      </div>
      <div className="cartinfo">
        <p>
          Manufacture : {seller} <br />
          Rating : {ratings} Star
        </p>
      </div>
      <button onClick={() => addtoCard(product)} className="cart-button">
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
