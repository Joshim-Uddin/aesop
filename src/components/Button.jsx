import React from 'react';
import {FaArrowRight} from 'react-icons/fa'
const Button = ({props}) => {
    return (
        <div className='border min-w-[210px] flex justify-between items-center p-3'>
            <p>{props}</p>
            <FaArrowRight />
        </div>
    );
};

export default Button;