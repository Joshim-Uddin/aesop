import React from 'react';
import Button from './Button';
import image from './../assets/drops.avif'

const PostPooSection = () => {
   const props= {title:'Post-Poo Drops has returned', description: 'Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.', btntext: 'Discover Post-Poo Drops', url:image}
    return (
        <div className='flex gap-24 w-full py-8'>
            <img src={props.url} alt="" className='w-3/5'/>
            <div className='w-2/5 md:pr-8'>
                <h3 className='text-3xl font-medium mb-8'>{props.title}</h3>
                <p className='mb-8 md:pr-16'>{props.description}</p>
                <div className='text-black w-3/5 hover:bg-black hover:text-white'>
                <Button props={props.btntext} />
                </div>
            </div>
        </div>
    );
};

export default PostPooSection;