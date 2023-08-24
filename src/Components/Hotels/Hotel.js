import React from "react";
import './hotelStyle.css';

const Hotel = ({ data }) => {
    console.log('hotels', data)
    return (
        <div className='hotels'>
            <div className='left-side'>
                <img src={data.imageUrl} alt='city-logo' className='city-image' />
                <div className='second-div'>
                    <h2>{data.name}</h2>
                    <li>{data.rating}</li>
                    <p>{data.address}</p>
                </div>
            </div>
            <div className='right-side'>
                <div className='f1 child'>
                    <h6>Check In</h6>
                    <p>{data.checkIn}</p>
                </div>
                <div className='f2 child'>
                    <h6>Check Out</h6>
                    <p>{data.checkOut}</p>
                </div>
                <div className='f3 child'>
                    <h6>From: {data.price}</h6>
                    <button className="btn">Buy Now</button>
                    <p>Have a Promo Code</p>
                </div>
            </div>
        </div>
    )
};

export default Hotel;