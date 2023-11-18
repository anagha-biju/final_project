import React, { useState } from 'react'
import './AdminAddHotel.css'
import {useNavigate} from "react-router-dom";
import home_icon from '../assets/home.png'
import address_icon from '../assets/pin.png'
import price_icon from '../assets/money.png'
import desc_icon from '../assets/notes.png'
import city_icon from '../assets/buildings.png'
import rating_icon from '../assets/review.png'
import features_icon from '../assets/new-features.png'
import distance_icon from '../assets/distance.png'
import types_icon from '../assets/categories.png'

const AddHotel=()=>{
    return(
        <div className='top-container'>
          <div className="top-header">
            <div className="heading">Hotel Details</div>
            <div className="heading-underline"></div>
          </div>
          <div className="all-inputs">
            <div className="each-input">
            <img src={types_icon} alt="" />
            <input type="text" placeholder="Type" />
            </div>

            <div className="each-input">
            <img src={home_icon} alt="" />
            <input type="text" placeholder="Name of the hotel" />
            </div>
         
            <div className="each-input">
            <img src={city_icon} alt="" />
            <input type="text" placeholder="City" />
            </div>
            <div className="each-input">
            <img src={address_icon} alt="" />
            <input type="text" placeholder="Address" />
            </div>
            <div className="each-input">
            <img src={distance_icon} alt="" />
            <input type="text" placeholder="Distance" />
            </div>
            <div className="each-input">
            <img src={desc_icon} alt="" />
            <textarea placeholder="Description" />
            </div>
            <div className="each-input">
            <img src={rating_icon} alt="" />
            <input type="text" placeholder="Rating" />
            </div>
            <div className="each-input">
            <img src={features_icon} alt="" />
            <input type="text" placeholder="Features" />
            </div>
            <div className="each-input">
            <img src={price_icon} alt="" />
            <input type="text" placeholder="Price" />
            </div>

            <label >Choose images-minimum 6:</label>
            <div className='input-images'>
              <div className="input-image">
              <input type="file" accept="image/png, image/jpeg" />
              </div>
              <div className="input-image">
              <input type="file" accept="image/png, image/jpeg" />
              </div>
              <div className="input-image">
              <input type="file" accept="image/png, image/jpeg" />
              </div>
              <div className="input-image">
              <input type="file" accept="image/png, image/jpeg" />
              </div>
              <div className="input-image">
              <input type="file" accept="image/png, image/jpeg" />
              </div>
              <div className="input-image">
              <input type="file" accept="image/png, image/jpeg" />
              </div>
            </div>
        </div>
            
            <div className="submit-container">
                <div className='upload-button'>Upload</div>
            </div>
        </div>
    )
}

export default AddHotel