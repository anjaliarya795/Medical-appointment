import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
            <>
                <header className="bg-transparent py-4 fixed z-10 w-screen px-40 md:flex hidden sm:px-24">
                    <div className='container mx-auto'>
                        <div className='flex items-center justify-between'>
                            <div className='brand text-4xl font-bold text-yellow-600'>
                                <Link href='/' className=''>Medico</Link>
                            </div>
                            <div className="menu">
                                <ul className='flex gap-x-8 text-lg'>
                                    <li><Link href="/"><button type="" className='text-white bg-transparent rounded-lg hover:bg-yellow-600  duration-200 border px-5 text-sm py-2 hover:rotate-2 cursor-pointer'>Appointment</button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>               
                </header>
            </>
    );
}

export default Header;
