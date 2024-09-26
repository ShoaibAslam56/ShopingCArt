import React, { useContext } from "react";
import { ShopContext } from "../../Shop-context/ShopContext";
import "./Product.css";

export default function Product(props) {
  const { id = '', title = 'Unknown Title', price = 0, image = '' } = props.data || {};

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartitemAmount = cartItems ? cartItems[id] : 0; 

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    addToCart(id);
  };

  if (!id || !title || !price || !image) {
    return <div>Product data is missing</div>; 
  }

  return (
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up border">
              <div className="tag-new">New</div>
              <div className="tag-discount">-40%</div>
              <img src={image} className="img" alt={title} />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{title}</span>
                  <span className="p-company">Brand</span>
                </div>
                <div className="a-size">Available sizes: <span className="size">S, M, L, XL</span></div>
              </div>
            </div>
            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>
              <a className="cart" href="#" onClick={handleAddToCart}>
                <span className="price">${price}</span>
                <span className="add-to-cart">
                  <span className="txt">Add to Cart {cartitemAmount > 0 && `(${cartitemAmount})`}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
