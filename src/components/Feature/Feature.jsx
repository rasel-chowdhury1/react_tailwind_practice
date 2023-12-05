import React from 'react';
import './Feature.css';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = (props) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-4 w-4 text-purple-600" />
            <span className='pl-2'>{props.feature}</span>
        </div>
    );
};

export default Feature;