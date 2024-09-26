import React, { useContext } from 'react';
import { ShopContext } from '../../Shop-context/ShopContext';
import CartItem from './CartItem';
import {useNavigate} from 'react-router-dom'

export default function Cart() {
  const { cartItems, products, getTotalCartAmount } = useContext(ShopContext);

  const cartProductData = products.filter(product => cartItems[product.id] > 0);
  const navigate = useNavigate();
  return (
    <div>
      <h1 className='text-center mt-3'>Cart</h1>
      {cartProductData.length === 0 ? (
        <h3 className='text-center'>Your cart is empty</h3>
      ) : (
        cartProductData.map(product => (
          <CartItem key={product.id} data={product} />
        ))
      )}
      <h2 className='text-center mt-5'>Total Amount: ${getTotalCartAmount()}</h2>
      <div className='d-flex justify-content-center'>
      <button className='btn btn-success mt-5' onClick={()=>navigate('/')}>Continue Shppping</button>
      </div>
    </div>
  );
}
