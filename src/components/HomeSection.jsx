import React from 'react';
import Slider from './Slider';
import img1 from './../assets/Post-Poo_Drops.avif'
import img2 from './../assets/candle.webp'
import img3 from './../assets/candle_one.webp'
import img4 from './../assets/candle_two.webp'
import img5 from './../assets/incense.webp'
import img6 from './../assets/murasaki.webp'
import img7 from './../assets/murasaki.webp'
import img8 from './../assets/murasaki.webp'


const HomeSection = () => {
    const item1={url:img1, name:'Post-Poo Drops', speciality:"A botanical bathroom deodoriser"}
    const item2={url:img2, name:'Aganice Aromatique Candle', speciality:"Cardmom, Mimosa, Tobacco"}
    const item3={url:img3, name:'Ptolemy Aromatique Candle', speciality:"A sensuous blend of leather, smoke and wood"}
    const item4={url:img4, name:'Callippus Aromatique Candle', speciality:"A marriage of deep greens and earthy spices"}
    const item5={url:img5, name:'Bronze Incense Holder', speciality:"Suited to any interior"}
    const item6={url:img6, name:'Murasaki Aromatique Incense', speciality:"For those who favour aromas of warm spice"}
    const item7={url:img7, name:'Kagerou Aromatique Incense', speciality:"For those particularly partial to Vetiver"}
    const item8={url:img8, name:'Sarashina Aromatique Incense', speciality:"For those particularly partial to Sandalwood"}
   
    return (
        
           <div className='bodysection my-24 py-5'>
            <Slider props = {{subtitle:'For the home', title:'Domestic pleasures', details:'Our range of aromatic formulations for the home are practical and pleasing in equal measure.', btntext:'Home', images: [item1, item2, item3, item4, item5, item6, item7, item8 ]}} className='flex justify-center items-center'/>
           </div>  
        
    );
};

export default HomeSection;