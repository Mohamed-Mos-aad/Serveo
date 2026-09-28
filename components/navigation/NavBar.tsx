// ** Hooks && Tools
import Image from 'next/image';
// ** Assets
import logo from '@/public/logo.svg'



export default function NavBar() {
    return (
        <nav className='w-full flex justify-between items-center border-b border-border-light px-8 py-5'>
            <Image src={logo} alt='logo' className='w-fit h-13'/>
            <ul className='flex gap-8 text-muted'>
                <li className='cursor-pointer hover:text-primary duration-500'>Product</li>
                <li className='cursor-pointer hover:text-primary duration-500'>Solutions</li>
                <li className='cursor-pointer hover:text-primary duration-500'>Features</li>
                <li className='cursor-pointer hover:text-primary duration-500'>Pricing</li>
                <li className='cursor-pointer hover:text-primary duration-500'>Case Studies</li>
            </ul>
            <div className='flex gap-4'>
                <button className='bg-transparent px-5 py-2.5 rounded-xl text-charcoal cursor-pointer'>Sign In</button>
                <button className='bg-primary px-5 py-2.5 rounded-xl text-white cursor-pointer'>Book a Demo</button>
            </div>
        </nav>
    )
}
