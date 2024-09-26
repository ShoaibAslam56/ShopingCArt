import React, { useContext } from 'react';
import { ShopContext } from '../../Shop-context/ShopContext';

export default function CartItem(props) {
  const { id, title, price, image } = props.data;
  const { removeFromCart, cartItems, addToCart, updateCartCount } = useContext(ShopContext);


  const quantity = cartItems[id] || 0;

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 mb-4">
          <div className="row border">
            <div className="col-lg-4 d-flex justify-content-center">
              <img src={image} className='img-fluid' width='100px' alt={title} />
            </div>
            <div className="col-lg-8">
              <h2 className="mt-3">{title}</h2>
              <h5 className="text-center mt-4">Price: ${price}</h5>
              <div className='d-flex justify-content-between mt-5'>
                <div className='d-flex'>
                  <button onClick={() => removeFromCart(id)}>-</button>
                  <input
                    className='text-center'
                    value={quantity}
                    style={{ width: '50px' }}
                    onChange={(e) => updateCartCount(Number(e.target.value), id)}
                  />
                  <button onClick={() => addToCart(id)}>+</button>
                </div>
                <div>
                  <button className="btn btn-danger" onClick={() => removeFromCart(id)}>Remove item</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
