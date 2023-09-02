import React from 'react';
import Button from './Button';

const InfoSection = ({props}) => {
    const {subtitle, title, description, btntext, url} = props;
    return (
        <div className='grid grid-cols-2'>
            <div>
                <h5>{subtitle}</h5>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='text-black w-1/2'>
                <Button props={btntext} />
                </div>
            </div>
            <img src={url} alt="" />
        </div>
    );
};

export default InfoSection;