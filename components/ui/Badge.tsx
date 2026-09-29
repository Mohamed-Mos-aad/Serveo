// ** Hooks && tools
import { ReactNode } from "react";
// ** Props
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
}



export default function Badge({ children, variant = 'secondary', className = '', ...props }: BadgeProps) {
    // ** Constants
    const variantStyles = variant === 'primary' 
        ? 'bg-[#FFF0E8] border-[#D94A1F]/15 text-[#D94A1F]' 
        : 'bg-[#FBF9F5] border-[#E6DED3] text-[#625D56]';



    return (
        <span 
            className={`${variantStyles} w-fit flex items-center gap-2 border rounded-full px-3 py-1 text-[12px] font-bold ${className}`} 
            {...props}
        >
            {children}
        </span>
    )
}