import React from 'react';
import images from '../assets/images';
import './Component.css';

export default function BlogItem() {
  return (
    <div className="container mb-5 mt-5">
      <div className="row d-flex justify-content-center ">
        <div className="col-lg-11 ">
            <div className="row">
                <div className="col-lg-4">
                <div className="card">
                <div className="tag-new">life Style</div>
                <div className="tag-discount">men</div>
            <img src={images.blog1} alt="Example" className="card-image" />
            <div className="card-description">
              <h3>A guide to latest trends</h3>
              <p>By Admin</p>
            </div>
          </div>
                </div>
                <div className="col-lg-4">
                <div className="card">
                <div className="tag-new">life Style</div>
            <img src={images.blog2} alt="Example" className="card-image" />
            <div className="card-description">
              <h3>Five ways to lead a happy life</h3>
              <p>By Admin</p>
            </div>
          </div>
                </div>
                <div className="col-lg-4">
                <div className="card">
                <div className="tag-new">life Style</div>
            <img src={images.blog3} alt="Example" className="card-image" />
            <div className="card-description">
              <h3>Tips on having a happy life</h3>
              <p>By Admin</p>
            </div>
          </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
