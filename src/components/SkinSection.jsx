import React from 'react';
import Slider from './Slider';
import img1 from './../assets/facecleanser.png'
import img2 from './../assets/facialcream.webp'
import img3 from './../assets/Facial-Hydrating-Cream.webp'
import img4 from './../assets/antioxident.webp'
import img5 from './../assets/Facial_Balancing_Gel.webp'
import img6 from './../assets/facialhydrant.webp'
import img7 from './../assets/Oxidant-Intense-Serum.webp'
import img8 from './../assets/Seed-Facial-Cleanser.webp'

const SkinSection = () => {
    const item1={url:img1, name:'Lucent Facial Concentrate', speciality:"A Vitamin C-rich layering serum"}
    const item2={url:img2, name:'Purifying Facial Cream Cleanser', speciality:"A daily cream cleanser for dry skin"}
    const item3={url:img3, name:'Camellia Nut Facial Hydrating Cream', speciality:"For normal, dry or sensitive skin"}
    const item4={url:img4, name:'Parsley Seed Anti-Oxidant Eye Cream', speciality:"Nourishes delicate skin around eyes"}
    const item5={url:img5, name:'B Triple C Facial Balancing Gel', speciality:"Ant-Oxidant gel infused with Vitamin B and C"}
    const item6={url:img6, name:'Mandarin Facial Hydrating Cream', speciality:"Rapidly absorbed, lightly hydrating"}
    const item7={url:img7, name:'Parsley Seed Anti-Oxidant Intense Serum', speciality:"A hydrating serum to bolster skin"}
    const item8={url:img8, name:'Parsley Seed Facial Cleanser', speciality:"For those in polluted urban environments"}
   
    return (
        
           <div className='bodysection my-24 py-5'>
            <Slider props = {{subtitle:'For the skin', title:'Attention for all types', details:'The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.', btntext:'Skin Care', images: [item1, item2, item3, item4, item5, item6, item7, item8 ]}} className='flex justify-center items-center'/>
           </div>  
        
    );
};

export default SkinSection;