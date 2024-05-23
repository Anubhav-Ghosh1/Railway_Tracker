import React from 'react';
import train from "../assets/train.svg"
import Footer from './Footer';

function Login({loginWithRedirect}) {
    return (
        <div>
            <div className='flex flex-col'>
                {/* container 1 */}
                <div className='flex justify-between'>
                    <div className='p-10 flex flex-col gap-y-40'>
                        {/* left */}
                        <div className='text-4xl font-semibold'>
                            <span className='text-[#0578FF]'>Rail</span>
                            <span>way</span>
                        </div>
                        <div className='flex flex-col gap-y-10'>
                            <div className='bg-[#0578FF] w-fit text-white rounded-2xl px-4 py-1'>
                                Hello Travellers
                            </div>
                            <div className='flex flex-col gap-y-5'>
                                <p className='text-4xl font-semibold w-[70%]'>
                                    Made your travel experience easy....
                                </p>
                                <span className='opacity-85'>Train booking is a process of choosing and purchasing train seats online. It is an easy process but were are here to make it much better & simple.</span>
                            </div>
                            <div>
                                {/* Login button */}
                                <button onClick={()=>{
                                    loginWithRedirect()
                                }} className='bg-[#0578FF] hover:bg-[#006ce8] transition-all ease-in duration-200 w-full py-2 rounded-xl text-xl flex items-center justify-center text-white font-lg'>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end w-[40%] h-fit bg-black'>
                        <img src={train} className='h-[60%]' alt="" />
                        {/* right */}
                    </div>
                </div>
                {/* container 2 */}
                <div>
                    {/* footer */}
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Login;