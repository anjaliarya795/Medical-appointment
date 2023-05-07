"use client"
import React from 'react';
import Link from 'next/link';
import Wave from './wave/Wave'
import Lottie from "lottie-react";
import groovyWalkAnimation from "./doc.json";


const Herosection = () => {
    
    return (
       <section className='relative w-screen bg-gradient-to-tr from-teal-1 via-teal-3 to-teal-1  lg:p-28 md:px-0 px-5 py-28'>
            <div className='  mx-auto'>
                

                <div className='flex sm:flex-row flex-col-reverse sm:justify-center '>

                    <div className='md:basis-1/2 basis-2/3 self-center md:pl-10   text-center md:text-left'>
                        <p className={`sm:text-4xl md:text-5xl text-3xl  text-teal-800  mb-10 `}>
                            WANT TO BOOK YOUR APPOINTMENT ?
                        </p>
                        <p className='text-white text-2xl mb-3'>
                            Let's get started
                        </p>


                        <Link href="#appointment_form"><button type="" className='text-white bg-yellow-600 md:bg-transparent rounded-lg sm:hover:bg-yellow-700 duration-200 border px-8 text-l py-3 hover:rotate-2 cursor-pointer animate-bounce mt-5'>Appointment</button></Link>
                    </div>

                    <div className='md:basis-1/2 basis-2/3 md:block hidden'>
                        <Lottie animationData={groovyWalkAnimation} loop={true} />
                    </div>

                </div>

            </div>
            <Wave/>
       </section>
    );
}

export default Herosection;

