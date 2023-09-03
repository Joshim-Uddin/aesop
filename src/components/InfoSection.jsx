import React from 'react';
import Button from './Button';

const InfoSection = ({props}) => {
    const {subtitle, title, description, btntext, url} = props;
    return (
        <div className='flex gap-24 w-full py-8'>
            <div className='w-2/5 md:ps-16'>
                <h5 className='text-lg'>{subtitle}</h5>
                <h3 className='text-4xl font-semibold my-8'>{title}</h3>
                <p className='mb-8'>{description}</p>
                <div className='text-black w-1/2'>
                <Button props={btntext} />
                </div>
            </div>
            <img src={url} alt="" className='w-3/5'/>
        </div>
    );
};

export default InfoSection;