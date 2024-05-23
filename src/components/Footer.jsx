import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer(props) {
    return (
        <div className='bg-[#0578FF]'>
            <div className='flex justify-between p-10'>
                <div>
                    <span className='text-white font-semibold text-2xl'>Rail</span>
                    <span className='text-white font-semibold text-2xl'>way</span>
                </div>
                <div className='flex flex-col text-white'>
                    <p className='text-2xl'>Planning your next trip?</p>
                    <p className='text-md'>Subscribe to our newsletter. Get the latest travel updates....</p>
                </div>
                <div>
                    <input type="email" className='bg-transparent border-b-2 outline-none text-white placeholder:text-white' placeholder='Enter Email' name="" id="" />
                </div>
            </div>
            <div className='flex justify-between p-10'>
                <div className='flex justify-between gap-5 text-white'>
                    <p className='hover:hover:text-[#e9e9e9] transition-all ease-in duration-200'>About us</p>
                    <p className='hover:hover:text-[#e9e9e9] transition-all ease-in duration-200'>Terms of use</p>
                    <p className='hover:hover:text-[#e9e9e9] transition-all ease-in duration-200'>Customer Support</p>
                </div>
                <div className='flex text-4xl gap-x-5'>
                    <FaFacebookSquare className='text-white' />
                    <FaInstagram className='text-white' />
                    <FaTwitter className='text-white' />
                </div>
            </div>
        </div>
    );
}

export default Footer;