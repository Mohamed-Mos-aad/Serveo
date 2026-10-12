'use client'
// ** Hooks && Tools
import Image from 'next/image';
import { useState } from 'react';
import Link from "next/link";
// ** Assets
import logo from '@/public/logo.svg'
// ** Components
import Button from '../ui/Button';



export default function HomeNavBar() {
    // ** States
    const [isOpen, setIsOpen] = useState(false);



    return (
        <nav className='w-full border-b border-border-light px-4 lg:px-8 py-5 relative'>
            <div className='flex justify-between items-center'>
                <Image src={logo} alt='logo' className='w-fit h-10 lg:h-13'/>

                <ul className='hidden lg:flex gap-8 text-muted'>
                    <li className='cursor-pointer hover:text-primary duration-500'>
                        <Link href="/home">Home</Link>
                    </li>
                    <li className='cursor-pointer hover:text-primary duration-500'>Menu</li>
                    <li className='cursor-pointer hover:text-primary duration-500'>Categories</li>
                    <li className='cursor-pointer hover:text-primary duration-500'>About</li>
                    <li className='cursor-pointer hover:text-primary duration-500'>Blog</li>
                    <li className='cursor-pointer hover:text-primary duration-500'>Contact</li>
                </ul>

                <div className='hidden lg:flex gap-4'>
                    <Button className="!p-0">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 4C9.47917 3.0625 9.0625 2.34375 8.25 1.84375C7.41667 1.38542 6.58333 1.38542 5.75 1.84375C4.9375 2.34375 4.52083 3.0625 4.5 4C4.52083 4.9375 4.9375 5.65625 5.75 6.15625C6.58333 6.61458 7.41667 6.61458 8.25 6.15625C9.0625 5.65625 9.47917 4.9375 9.5 4ZM3 4C3 3.27083 3.17708 2.60417 3.53125 2C3.88542 1.39583 4.375 0.90625 5 0.53125C5.625 0.177083 6.29167 0 7 0C7.70833 0 8.375 0.177083 9 0.53125C9.625 0.90625 10.1146 1.39583 10.4688 2C10.8229 2.60417 11 3.27083 11 4C11 4.72917 10.8229 5.39583 10.4688 6C10.1146 6.60417 9.625 7.09375 9 7.46875C8.375 7.82292 7.70833 8 7 8C6.29167 8 5.625 7.82292 5 7.46875C4.375 7.09375 3.88542 6.60417 3.53125 6C3.17708 5.39583 3 4.72917 3 4ZM1.53125 14.5H12.4688C12.3021 13.4792 11.8542 12.6458 11.125 12C10.375 11.3542 9.47917 11.0208 8.4375 11H5.5625C4.52083 11.0208 3.63542 11.3542 2.90625 12C2.15625 12.6458 1.69792 13.4792 1.53125 14.5ZM0 15.0625C0.0416667 13.5 0.583333 12.1875 1.625 11.125C2.6875 10.0833 4 9.54167 5.5625 9.5H8.4375C10 9.54167 11.3125 10.0833 12.375 11.125C13.4167 12.1875 13.9583 13.5 14 15.0625C14 15.3333 13.9062 15.5521 13.7188 15.7188C13.5521 15.9062 13.3333 16 13.0625 16H0.9375C0.666667 16 0.447917 15.9062 0.28125 15.7188C0.09375 15.5521 0 15.3333 0 15.0625Z" fill="#44403C"/>
                        </svg>
                    </Button>
                    <Button className="!p-0">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3.5C5.02083 2.9375 5.21875 2.46875 5.59375 2.09375C5.96875 1.71875 6.4375 1.52083 7 1.5C7.5625 1.52083 8.03125 1.71875 8.40625 2.09375C8.78125 2.46875 8.97917 2.9375 9 3.5V5H5V3.5ZM3.5 5H1.5C1.08333 5.02083 0.729167 5.16667 0.4375 5.4375C0.166667 5.72917 0.0208333 6.08333 0 6.5V13C0.0208333 13.8542 0.3125 14.5625 0.875 15.125C1.4375 15.6875 2.14583 15.9792 3 16H11C11.8542 15.9792 12.5625 15.6875 13.125 15.125C13.6875 14.5625 13.9792 13.8542 14 13V6.5C13.9792 6.08333 13.8333 5.72917 13.5625 5.4375C13.2708 5.16667 12.9167 5.02083 12.5 5H10.5V3.5C10.4792 2.5 10.1354 1.67708 9.46875 1.03125C8.82292 0.364583 8 0.0208333 7 0C6 0.0208333 5.17708 0.364583 4.53125 1.03125C3.86458 1.67708 3.52083 2.5 3.5 3.5V5ZM4.25 6.5C4.70833 6.54167 4.95833 6.79167 5 7.25C4.95833 7.70833 4.70833 7.95833 4.25 8C3.79167 7.95833 3.54167 7.70833 3.5 7.25C3.54167 6.79167 3.79167 6.54167 4.25 6.5ZM9 7.25C9.04167 6.79167 9.29167 6.54167 9.75 6.5C10.2083 6.54167 10.4583 6.79167 10.5 7.25C10.4583 7.70833 10.2083 7.95833 9.75 8C9.29167 7.95833 9.04167 7.70833 9 7.25Z" fill="#44403C"/>
                        </svg>
                    </Button>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    className='lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer focus:outline-none'
                >
                    <span className={`w-6 h-0.5 bg-charcoal transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-charcoal transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-charcoal transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {isOpen && (
                <div className='lg:hidden absolute z-100000000 top-full left-0 w-full bg-white border-b border-border-light px-6 py-6 flex flex-col gap-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300'>
                    <ul className='flex flex-col gap-4 text-muted'>
                        <li className='cursor-pointer hover:text-primary duration-500'>
                            <Link href="/home">Home</Link>
                        </li>
                        <li className='cursor-pointer hover:text-primary duration-500'>Menu</li>
                        <li className='cursor-pointer hover:text-primary duration-500'>Categories</li>
                        <li className='cursor-pointer hover:text-primary duration-500'>About</li>
                        <li className='cursor-pointer hover:text-primary duration-500'>Blog</li>
                        <li className='cursor-pointer hover:text-primary duration-500'>Contact</li>
                    </ul>
                    <div className='flex justify-center gap-4 pt-4 border-t border-border-light'>
                        <Button className="!p-0">
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.5 4C9.47917 3.0625 9.0625 2.34375 8.25 1.84375C7.41667 1.38542 6.58333 1.38542 5.75 1.84375C4.9375 2.34375 4.52083 3.0625 4.5 4C4.52083 4.9375 4.9375 5.65625 5.75 6.15625C6.58333 6.61458 7.41667 6.61458 8.25 6.15625C9.0625 5.65625 9.47917 4.9375 9.5 4ZM3 4C3 3.27083 3.17708 2.60417 3.53125 2C3.88542 1.39583 4.375 0.90625 5 0.53125C5.625 0.177083 6.29167 0 7 0C7.70833 0 8.375 0.177083 9 0.53125C9.625 0.90625 10.1146 1.39583 10.4688 2C10.8229 2.60417 11 3.27083 11 4C11 4.72917 10.8229 5.39583 10.4688 6C10.1146 6.60417 9.625 7.09375 9 7.46875C8.375 7.82292 7.70833 8 7 8C6.29167 8 5.625 7.82292 5 7.46875C4.375 7.09375 3.88542 6.60417 3.53125 6C3.17708 5.39583 3 4.72917 3 4ZM1.53125 14.5H12.4688C12.3021 13.4792 11.8542 12.6458 11.125 12C10.375 11.3542 9.47917 11.0208 8.4375 11H5.5625C4.52083 11.0208 3.63542 11.3542 2.90625 12C2.15625 12.6458 1.69792 13.4792 1.53125 14.5ZM0 15.0625C0.0416667 13.5 0.583333 12.1875 1.625 11.125C2.6875 10.0833 4 9.54167 5.5625 9.5H8.4375C10 9.54167 11.3125 10.0833 12.375 11.125C13.4167 12.1875 13.9583 13.5 14 15.0625C14 15.3333 13.9062 15.5521 13.7188 15.7188C13.5521 15.9062 13.3333 16 13.0625 16H0.9375C0.666667 16 0.447917 15.9062 0.28125 15.7188C0.09375 15.5521 0 15.3333 0 15.0625Z" fill="#44403C"/>
                            </svg>
                        </Button>
                        <Button className="!p-0">
                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 3.5C5.02083 2.9375 5.21875 2.46875 5.59375 2.09375C5.96875 1.71875 6.4375 1.52083 7 1.5C7.5625 1.52083 8.03125 1.71875 8.40625 2.09375C8.78125 2.46875 8.97917 2.9375 9 3.5V5H5V3.5ZM3.5 5H1.5C1.08333 5.02083 0.729167 5.16667 0.4375 5.4375C0.166667 5.72917 0.0208333 6.08333 0 6.5V13C0.0208333 13.8542 0.3125 14.5625 0.875 15.125C1.4375 15.6875 2.14583 15.9792 3 16H11C11.8542 15.9792 12.5625 15.6875 13.125 15.125C13.6875 14.5625 13.9792 13.8542 14 13V6.5C13.9792 6.08333 13.8333 5.72917 13.5625 5.4375C13.2708 5.16667 12.9167 5.02083 12.5 5H10.5V3.5C10.4792 2.5 10.1354 1.67708 9.46875 1.03125C8.82292 0.364583 8 0.0208333 7 0C6 0.0208333 5.17708 0.364583 4.53125 1.03125C3.86458 1.67708 3.52083 2.5 3.5 3.5V5ZM4.25 6.5C4.70833 6.54167 4.95833 6.79167 5 7.25C4.95833 7.70833 4.70833 7.95833 4.25 8C3.79167 7.95833 3.54167 7.70833 3.5 7.25C3.54167 6.79167 3.79167 6.54167 4.25 6.5ZM9 7.25C9.04167 6.79167 9.29167 6.54167 9.75 6.5C10.2083 6.54167 10.4583 6.79167 10.5 7.25C10.4583 7.70833 10.2083 7.95833 9.75 8C9.29167 7.95833 9.04167 7.70833 9 7.25Z" fill="#44403C"/>
                            </svg>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}