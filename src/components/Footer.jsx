import React from 'react';
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#252525] text-white'>
        <div className=' md:p-8 p-2 flex flex-col gap-8'>
            <div className='top grid grid-cols-5 gap-12'>
            <div className='first col-span-2'>
                <div>
                    <p className='heading'>Subscribe to Aesop communications</p>
                    <hr />
                    <div className='relative border mt-5'>
                    <input type="email" name="email" id="email" placeholder='Email address' className='bg-[#262626] text-white border-none outline-none p-2' /><FaArrowRight className='absolute top-1 right-2'/>
                    </div>
                    <div className='mt-8'>
                    <input type="checkbox" name="subscribe" id="subscribe" />
                    <label htmlFor="subscribe"> Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <a href="#" className='underline'>privacy policy.</a></label>
                    </div>
                </div>
                
            </div>
            <div className='second'>
                <div>
                    <p className='heading'>Orders and support</p>
                    <hr />
                    <ul className='flex flex-col gap-4 mt-4'>
                        <li><a href="#" className='flex items-center gap-2'>Contact us <FaArrowUp className='rotate-45 font-thin'/></a></li>
                        <li><a href="#" className='flex items-center gap-2'>FAQs <FaArrowUp className='rotate-45 font-thin'/></a></li>
                        <li><a href="#" className='flex items-center gap-2'>Shipping <FaArrowUp className='rotate-45 font-thin'/></a></li>
                        <li><a href="#" className='flex items-center gap-2'>Returns <FaArrowUp className='rotate-45 font-thin'/></a></li>
                        <li><a href="#">Order history</a></li>
                        <li><a href="#">Terms and conditions</a></li>   
                    </ul>
                </div>
               
            </div>
            <div className='third'>
                <div>
                <p className='heading'>Services</p>
                    <hr />
                    <ul className='flex flex-col gap-4 mt-4'>
                        <li><a href="#">Live assistance</a></li>
                        <li><a href="#">Corporate gifts</a></li>
                        <li><a href="#">Facial Appointments</a></li>
                        <li><a href="#">Click and Collect</a></li>
                        <li><a href="#">Video consultation</a></li>
                    </ul>
                </div>
                
            </div>
            <div className='fourth'>
                <p className='heading'>Location preferences</p>
                <hr />
                <div className='my-4'>
                <p>Shipping:</p>
                <a href="#">Hong Kong SAR, China</a>
                </div>
                <div>
                <p>Language:</p>
                <a href="#">English</a>
                <a href="#">繁體中文</a>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-5 gap-12'>
        <div className='col-span-2'>
            <p className='heading'>Sustainability</p>
            <hr />
            <p className='mt-4'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. <a href="#">Learn more</a></p>
        </div>
        <div>
                    <p className='heading'>About</p>
                    <hr />
                    <ul className='flex flex-col gap-4 mt-4'>
                        <li><a href="#">Our story</a></li>
                        <li><a href="#">Foundation</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
                <div>
                    <p className='heading'>Social media</p>
                    <hr />
                    <ul className='flex flex-col gap-4 mt-4'>
                        <li><a href="#" className='flex items-center gap-2'>Instagram <FaArrowUp className='rotate-45 font-thin'/></a></li>
                        <li><a href="#" className='flex items-center gap-2'>Twitter <FaArrowUp className='rotate-45 font-thin'/></a></li>
                        <li><a href="#" className='flex items-center gap-2'>LinkedIn <FaArrowUp className='rotate-45 font-thin'/></a></li>
                        <li><a href="#" className='flex items-center gap-2'>WeChat <FaArrowUp className='rotate-45 font-thin'/></a></li>
                        <li><a href="#" className='flex items-center gap-2'>Weibo <FaArrowUp className='rotate-45 font-thin'/></a></li>
                           
                    </ul>
                </div>
        
        </div>
        
        </div>
        <div className='bottom'>
        <hr className='border-2'/>
        <p className='ps-12 py-8'>&copy; Aesop</p>
    </div>
    </div>
    );
};

export default Footer;