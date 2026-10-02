// ** Hooks && Tools
import Button from "@/components/ui/Button";

// ** Props
interface ResetPasswordProps {
    toggleHandler: () => void;
}



export default function ResetPassword({toggleHandler}: ResetPasswordProps) {
    return (
        <div>
            <h1 className="text-6xl">resetPassword</h1>
            <Button className="bg-white !text-[#D94A1F] font-semibold mt-3" onClick={toggleHandler}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.99967 12.6667L3.33301 8.00001L7.99967 3.33334" stroke="#B83B18" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.6663 8H3.33301" stroke="#B83B18" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sign In Instead
            </Button>
        </div>
    );
}