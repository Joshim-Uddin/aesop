import React from 'react';
import {GoSearch} from 'react-icons/go'

const Navbar = () => {
    return (
        <div className='flex justify-between md:px-10 px-5 py-8'>
            <ul className='flex gap-5 items-center text-black'>
                <li>Skin Care</li>
                <li>Body & Hand</li>
                <li>Hair</li>
                <li>Fragrance</li>
                <li>Home</li>
                <li>Kits & Travel</li>
                <li>Gifts</li>
                <li>Read</li>
                <li>Stores</li>
                <li>Facial Appointments</li>
                <li><GoSearch /></li>
            </ul>
            <ul className='flex gap-5'>
                <li>Log in</li>
                <li>Cabinet</li>
                <li>Cart</li>
            </ul>
        </div>
    );
};

export default Navbar;