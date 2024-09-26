import React, { useState, useEffect } from "react";
import "./Carousel.css";
import images from "../assets/images";
import Button from "./Button";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  const slides = [
    {
      title: "Shopify Store Development",
      content: (
        <>
          <h4>Smart Products</h4>
          <h1>Winter Offer</h1>
          <h1>2024 Collection</h1>
        </>
      ),
      image:'Header1', // Replace with actual image paths
    },
    {
      title: "Top-Rated Shopify Plus Development Company",
      content: (
        <>
           <h4>Smart Products</h4>
          <h1>Winter Offer</h1>
          <h1>2024 Collection</h1>
        </>
      ),
      image: 'Header2', // Replace with actual image paths
    },
  ];

  const goToSlide = (index) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 30000);
    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  return (
    <div className="container-fluid main-Cont">
      <div className="carousel container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? "active" : index === prevIndex ? "prev" : "next"}`}
        >
          <div className="row">
            <div className="col-lg-6 text-content">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                {slide.content}
                <Button/>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <img src={images[slide.image]} alt={slide.title} className="carousel-image" />
            </div>
          </div>
        </div>
      ))}
      <button className="carousel-control-prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-control-next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
    </div>
  );
};

export default Carousel;
