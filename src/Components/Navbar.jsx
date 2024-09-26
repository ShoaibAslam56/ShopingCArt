import React, { useContext } from 'react';
import images from '../assets/images';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Shop-context/ShopContext';
import './Navbar.css';

export default function Navbar() {
  const { cartItems } = useContext(ShopContext);
  const cartCount = Object.values(cartItems).reduce((total, count) => total + count, 0);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-2">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          VANTERRA
        </a>
        <div className={`d-flex align-items-center ${isOpen ? 'order-1' : ''}`}>
          {isOpen && (
            <Link to='/cart' className="navbar-cart position-relative mr-2">
              <img src={images.shopping} width='45px' alt="Shopping Cart" />
              {cartCount > 0 && (
                <span className="badge badge-round">{cartCount}</span>
              )}
            </Link>
          )}
          <button
            className="navbar-toggler ml-2"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`navbar-collapse collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/mystore">
                My Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {!isOpen && (
          <Link to='/cart' className="navbar-cart position-relative">
            <img src={images.shopping} width='40px' alt="Shopping Cart" />
            {cartCount > 0 && (
              <span className="badge badge-round">{cartCount}</span>
            )}
          </Link>
        )}
      </div>
    </nav>
  );
}
