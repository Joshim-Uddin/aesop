import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';

const SecondTopBar = () => {
    return (
        <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    
    <div className='bg-black text-white py-2 flex justify-center'>
    <label htmlFor="my-drawer" className='hover:border-b'>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400  +</label>
    </div>
  </div> 
  <div className="drawer-side transition ease-in-out duration-1000 delay-100">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <div className='menu md:w-1/2 min-h-screen bg-base-200 overflow-y-scroll'>
       <label htmlFor="my-drawer" className='drawer-end flex justify-end my-3 pr-3'> <VscChromeClose className='text-black font-bold text-xl'/></label>
    <ul className="p-4 mt-28">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
   
    </div>
  </div>
</div>
    );
};

export default SecondTopBar;