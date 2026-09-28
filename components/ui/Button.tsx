// ** Hooks && tools
import { ButtonHTMLAttributes, ReactNode } from "react";
// ** Props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
}




export default function Button({ children, variant = 'secondary', className = '', ...props }: ButtonProps) {
    // ** Constants
    const variantStyles = variant === 'primary' 
        ? 'bg-primary text-white' 
        : 'bg-transparent text-charcoal';



    return (
        <button 
            className={`${variantStyles} px-5 py-2.5 rounded-xl cursor-pointer flex items-center justify-center gap-2.5 ${className}`} 
            {...props}
        >
            {children}
        </button>
    )
}