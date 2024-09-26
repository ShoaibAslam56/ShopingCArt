import React from 'react'
import images from '../assets/images'
import Logo from './Logo.json'
import './Component.css'
export default function LogoBaner() {
  return (
    <>
      <div className="container mt-5" id='LogoBaner'>
        <div className="row d-flex justify-content-center">
            <div className="col-lg-11">
                <div className="row">
                    {
                        Logo.map((item, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={index} id='LogoBaner-Col'>
                        <div className="row">
                            <div className="col-lg-3 .col-md-4 col-sm-4 col-xs-4">
                                <img src={images[item.Src]}  alt="" />
                            </div>
                            <div className="col-lg-9  .col-md-8 col-sm-8 col-xs-8">
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
