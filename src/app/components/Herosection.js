import React from 'react';
import Link from 'next/link';
import Wave from './wave/Wave'

const Herosection = ({imgUrl,url}) => {
    
    return (
       <section className=' relative w-screen bg-gradient-to-tr from-teal-1 via-teal-3 to-teal-1  md:p-32 px-16 py-32 '>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-x-4 '>
                    <div className="flex flex-col items-center md:pt-30 bg-black">
                        <p className='md:text-[3rem] text-[2.5rem] self-start font-semibold whitespace-normal text-teal-800 mb-20'>
                            Want to book your appointment?
                        </p>
                        <p className='self-start text-white text-xl font-medium mb-4 '>
                            Let's get started
                        </p>
                   
                        <Link className='self-start' href={'/about'}>
                            <button type="" className='text-white bg-transparent rounded-lg hover:bg-yellow-600  duration-200 border px-5 text-sm py-2 hover:rotate-2 cursor-pointer animate-bounce'>Appointment</button>
                        </Link>
                    </div>
                
                    <div className='md:flex hidden bg-red'>
                        <img src={imgUrl} alt="hero" className='md:w-[25rem] w-[15rem] ml-auto self-end' />
                    </div>
                </div>
            </div>
            <Wave/>
       </section>
    );
}

export default Herosection;
