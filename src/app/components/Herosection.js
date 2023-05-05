"use client"
import React from 'react';
import Link from 'next/link';
import Wave from './wave/Wave'
import Lottie from "lottie-react";
import groovyWalkAnimation from "./doc.json";


const Herosection = ({imgUrl,url}) => {
    
    return (
       <section className=' w-screen bg-gradient-to-tr from-teal-1 via-teal-3 to-teal-1  md:p-32 px-16 py-10'>
            <div className='container  mx-auto'>
                

                <div className='flex sm:flex-row flex-col-reverse'>

                    <div className='sm:basis-1/2 basis-2/3 self-center md:pl-10'>
                        <p className='sm:text-6xl text-2xl font-medium text-teal-800  mb-10'>
                            Want to book your appointment?
                        </p>
                        <p className='text-white text-2xl mb-3'>
                            Let's get started
                        </p>


                        <Link className='' href={'/about'}>
                             <button type="" className='text-white bg-transparent rounded-lg hover:bg-yellow-600  duration-200 border px-5 text-sm py-2 hover:rotate-2 cursor-pointer animate-bounce'>Appointment</button>
                        </Link>

                    </div>

                    <div className='sm:basis-1/2 basis-2/3 '>
                        <Lottie animationData={groovyWalkAnimation} loop={true} />
                    </div>

                </div>

            </div>
            {/* <Wave/> */}
       </section>
    );
}

export default Herosection;

