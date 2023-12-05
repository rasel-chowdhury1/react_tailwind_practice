import React from 'react';
import './PriceCard.css';

const PriceCard = (props) => {
    const {id,name,price,features} = props.product
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4'>
            <h2 className='text-center'>
                <span className='text-purple-700 text-5xl font-extrabold'>{price}</span>
                <span className='text-2xl text-white font-bold'>/mon</span>
            </h2>
            <h3 className='text-2xl my-6 font-bold text-center'>{name}</h3>
        </div>
    );
};

export default PriceCard;