import React from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";

export function Products(props) {
  return (
    <>
    <div className="productList">
      <div key={props.id} className="productCard">
        <FaRegHeart className="productCard__heart" />
        <img src={props.image} alt="product-img" className="productImage" />
      </div>
      <div className="productCard_content">
        <h3 className="productName">{props.name}</h3>
        <div className="displayStack__1">
          <div className="ProductPrice">${props.price}</div>
        </div>
        <div className="displayStack__2">
          <div className="ProductRating">{props.rating}</div>
          <div className="ProductReviews">{props.reviews}</div>
        </div>
      </div>
    </div>    
    </ >
  );
}
