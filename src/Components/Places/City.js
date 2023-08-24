import React from "react";
import './cityStyle.css';

const City = ({ data }) => {

    console.log('single', data)
    return (
        <div className='city'>
            <div className='left-side'>
                <img src={data.imageUrl} alt='city-logo' className='city-image' />
                <div className='second-div'>
                    <h2>{data.name}</h2>
                    <li>{data.rating}</li>
                    <p>{data.desc}</p>
                </div>
            </div>
            <div className='right-side'>
                <div className='f1 child'>
                    <h6>Open At</h6>
                    <p>{data.openAt}</p>
                </div>
                <div className='f2 child'>
                    <h6>Close At</h6>
                    <p>{data.closeAt}</p>
                </div>
                <div className='f3 child'>
                    <h6>Entry free</h6>
                    <p>{data.entryFee}</p>
                </div>
            </div>
        </div>
    )
}

export default City;