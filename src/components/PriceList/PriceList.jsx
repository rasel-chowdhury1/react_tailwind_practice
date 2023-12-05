import React, { useEffect, useState } from 'react';
import './PriceList.css'
import PriceCard from '../PriceCard/PriceCard';
const PriceList = () => {
    const [prices,setPrices] = useState([])

    useEffect( ()=>{
        fetch('priceListData.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])

    return (
        <div>
            <h2 className='text-5xl text-center text-purple-950 bg-purple-300 p-4 font-bold'>this is price List</h2>
            <div className='grid grid-cols-3 gap-4'>
            {
                prices.map(pd => <PriceCard
                    key={pd.id}
                    product={pd}
                    ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;