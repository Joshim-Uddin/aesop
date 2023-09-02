import React from 'react';
import Slider from './Slider';
import img1 from './../assets/naturebar_one.avif'
import img2 from './../assets/polishbar_two.avif'
import img3 from './../assets/refreshbar_three.avif'

const BodySection = () => {
    const item1={url:img1, name:'Nurture Bar Soap', speciality:"Offers a mild yet effective cleanse"}
    const item2={url:img2, name:'Polish Bar Soap', speciality:"Thoroughly cleanses and exfoliates skin"}
    const item3={url:img3, name:'Refresh Bar Soap', speciality:"Offers a thorough and enlivening cleanse"}
    return (
        
           <div className='bodysection my-28'>
            <Slider props = {{subtitle:'For the body', title:'An expression of care', details:'Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.', btntext:'Body', images: [item1, item2, item3 ]}} className='flex justify-center items-center'/>
           </div>  
        
    );
};

export default BodySection;