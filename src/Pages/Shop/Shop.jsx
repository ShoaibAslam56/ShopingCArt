import React,{useContext} from 'react';
// import { PRODUCTS } from '../../products';
import Product from './Product';
import LogoBaner from '../../Components/LogoBaner';
import Carousel from '../../Components/Carousel';
import BlogItem from '../../Components/BlogItem';
import './Shop.css'
import { ShopContext } from '../../Shop-context/ShopContext';
export default function Shop() {
  const {products} = useContext(ShopContext)
  return (
    <>
    <Carousel />
    <LogoBaner/>
    <div className="row d-flex justify-content-center mt-5">
        <div className="col-lg-4">
        <div className="header">
        <span className="line"></span>
        <h2 className="title">DAILY DEALS!</h2>
        <span className="line"></span>
    </div>
        </div>
      </div>
      <div className="container mt-5">
        
        <div className="row d-flex justify-content-center">
         <div className="col-lg-11">
          <div className="row">
          {products.map((product) => (
            <div className="col-lg-4 " key={product.id}>
              <Product data={product} />
            </div>
          ))}
          </div>
         </div>
        </div>
      </div> 
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-lg-4">
        <div className="header">
        <span className="line"></span>
        <h1 className="title">OUR BLOG</h1>
        <span className="line"></span>
    </div>
        </div>
      </div>
      <BlogItem/>
    </>
  );
}
