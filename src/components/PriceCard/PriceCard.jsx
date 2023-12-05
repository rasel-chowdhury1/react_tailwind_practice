import React from 'react';
import './PriceCard.css';
import Feature from './../Feature/Feature';

const PriceCard = (props) => {
    const {id,name,price,features} = props.product
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold'>{price}</span>
                <span className='text-2xl text-white font-bold'>/mon</span>
            </h2>
            <h3 className='text-2xl my-6 font-bold text-center'>{name}</h3>
            <p className='font-bold text-white underline'>Features:</p>
            {
                features.map((feature,idx) => <Feature 
                key = {idx}   
                feature={feature}
                ></Feature>)
            }
            <button className='w-full hover:bg-green-700 bg-green-500 py-2 rounded-md text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceCard;