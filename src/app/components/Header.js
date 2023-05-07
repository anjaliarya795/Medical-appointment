'use client'
import Link from 'next/link';
import React, { useEffect ,useState} from 'react';

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos < 10 || prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);
    return (
            <>
                <header className={` py-4 fixed z-10 w-screen px-40 lg:flex hidden transition-all duration-200 ease-in-out transform ${prevScrollPos > 0 ? "bg-teal-1 opacity-100" : "bg-transparent"} ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                    <div className='container mx-auto'>
                        <div className='flex items-center justify-between'>
                            <div className='brand text-4xl font-bold text-yellow-600'>
                                <Link href='/' className=''>Medico</Link>
                            </div>
                            <div className="menu">
                                <ul className='flex gap-x-8 text-lg'>
                                    <li><Link href="/"><button type="" className='text-white bg-transparent rounded-lg hover:bg-yellow-600  duration-200 border px-8 text-md py-3 hover:rotate-2 cursor-pointer '>Appointment</button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>               
                </header>
            </>
    );
}

export default Header;
