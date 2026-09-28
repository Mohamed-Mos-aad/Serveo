'use client'
// ** Hooks && Tools
import Image from 'next/image';
import { useState } from 'react';
// ** Assets
import logo from '@/public/logo.svg'



export default function NavBar() {
    // ** States
    const [isOpen, setIsOpen] = useState(false);



    return (
        <nav className='w-full border-b border-border-light px-4 lg:px-8 py-5 relative'>
            <div className='flex justify-between items-center'>
                <Image src={logo} alt='logo' className='w-fit h-10 lg:h-13'/>
                
                <ul className='hidden lg:flex gap-8 text-muted'>
                    <li className='cursor-pointer hover:text-primary duration-500'>Product</li>
                    <li className='cursor-pointer hover:text-primary duration-500'>Solutions</li>
                    <li className='cursor-pointer hover:text-primary duration-500'>Features</li>
                    <li className='cursor-pointer hover:text-primary duration-500'>Pricing</li>
                    <li className='cursor-pointer hover:text-primary duration-500'>Case Studies</li>
                </ul>

                <div className='hidden lg:flex gap-4'>
                    <button className='bg-transparent px-5 py-2.5 rounded-xl text-charcoal cursor-pointer'>Sign In</button>
                    <button className='bg-primary px-5 py-2.5 rounded-xl text-white cursor-pointer'>Book a Demo</button>
                </div>

                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className='lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer focus:outline-none'
                >
                    <span className={`w-6 h-0.5 bg-charcoal transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-charcoal transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-charcoal transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {isOpen && (
                <div className='lg:hidden absolute top-full left-0 w-full bg-white border-b border-border-light px-6 py-6 flex flex-col gap-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300'>
                    <ul className='flex flex-col gap-4 text-muted'>
                        <li className='cursor-pointer hover:text-primary duration-500'>Product</li>
                        <li className='cursor-pointer hover:text-primary duration-500'>Solutions</li>
                        <li className='cursor-pointer hover:text-primary duration-500'>Features</li>
                        <li className='cursor-pointer hover:text-primary duration-500'>Pricing</li>
                        <li className='cursor-pointer hover:text-primary duration-500'>Case Studies</li>
                    </ul>
                    <div className='flex flex-col gap-3 pt-4 border-t border-border-light'>
                        <button className='bg-transparent w-full px-5 py-2.5 rounded-xl text-charcoal cursor-pointer border border-border-light'>Sign In</button>
                        <button className='bg-primary w-full px-5 py-2.5 rounded-xl text-white cursor-pointer'>Book a Demo</button>
                    </div>
                </div>
            )}
        </nav>
    )
}