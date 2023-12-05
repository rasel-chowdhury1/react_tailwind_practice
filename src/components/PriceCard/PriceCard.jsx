import React from 'react';
import './PriceCard.css';

const PriceCard = (props) => {
    const {id,name,price,features} = props.product
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
        </div>
    );
};

export default PriceCard;