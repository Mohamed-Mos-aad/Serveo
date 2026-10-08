'use client'
// ** Hooks && Tools
import {useState} from "react";
// ** Components
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
// ** Props
interface ResetPasswordProps {
    toggleHandler: () => void;
}



export default function ResetPassword({toggleHandler}: ResetPasswordProps) {
    // Constants
    const [byEmail,setByEmail] = useState<boolean>(true);



    // ** Handlers
    const handleToggle = ()=>{
        setByEmail(prev => !prev)
    }


    return (
        <section className="min-h-screen flex items-center p-4 sm:p-6 lg:py-8 lg:px-22">
            <div className="w-full min-h-fit flex flex-col items-start gap-3 lg:bg-white rounded-4xl p-4 sm:p-6 lg:p-8">
                <Badge>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6663 7.58331C11.6663 10.5 9.62467 11.9583 7.19801 12.8041C7.07094 12.8472 6.9329 12.8451 6.80717 12.7983C4.37467 11.9583 2.33301 10.5 2.33301 7.58331V3.49998C2.33301 3.17803 2.59439 2.91664 2.91634 2.91664C4.08301 2.91664 5.54134 2.21664 6.55634 1.32998C6.81165 1.11185 7.1877 1.11185 7.44301 1.32998C8.46384 2.22248 9.91634 2.91664 11.083 2.91664C11.4052 2.91664 11.6663 3.17781 11.6663 3.49998V7.58331" stroke="#D94A1F" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.25 6.99998L6.41667 8.16665L8.75 5.83331" stroke="#D94A1F" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Enterprise Security • Password Assistance
                </Badge>

                <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#1D1B18]">
                    Reset your password
                </h1>

                <p className="text-sm sm:text-base text-[#625D56]">
                    Enter your registered work email or GCC mobile number to
                    receive an encrypted 6-digit recovery token and immediate
                    unlock credentials.
                </p>

                <div className="w-full flex flex-col sm:flex-row items-center bg-[#EFEAE1] p-1 rounded-lg my-3 relative">
                    <div className={`flex w-1/2 h-full p-1 absolute duration-150 ${byEmail ? "left-0" : "left-[calc(50%-1px)]"} top-0`}>
                        <div className="flex w-full bg-white rounded-lg"></div>
                    </div>
                    <Button className="w-full !rounded-lg z-10" onClick={handleToggle}>
                        Work Email
                    </Button>
                    <Button className="w-full  !rounded-lg z-10" onClick={handleToggle}>
                        GCC Mobile
                    </Button>
                </div>
                {
                    byEmail ?
                        <Input variant="secondary" label="REGISTERED WORK EMAIL" id="email" type="email" placeholder="gm.venue@atlantisdining.ae"/>
                    :
                        <Input variant="secondary" label="REGISTERED GCC Mobile" id="GCC" type="text"  placeholder="05X XXX XXXX"/>
                }
                <p className="text-[11px] text-[#918A81]">Must match your authorized staff or venue administrator profile.</p>
                <Select variant="secondary" id="test" options={[{label: "Need POS Terminal Operator PIN reset?", value: "POS"}]}/>
                <div className="flex w-full border-t border-t-[#E6DED3]/60 mt-5"></div>
                <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <Button className="!text-[#D94A1F] text-[12px] font-semibold" onClick={toggleHandler}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.55 6L6.28333 9.73333L5.33333 10.6667L0 5.33333L5.33333 0L6.28333 0.933333L2.55 4.66667H10.6667V6H2.55Z" fill="#D94A1F"/>
                        </svg>
                        Remember your credentials? Sign In
                    </Button>
                    <h2 className="flex items-center gap-2 text-[12px] text-[#918A81] flex-wrap">
                        ZATCA Phase 2 Verified
                    </h2>
                </div>
            </div>
        </section>
    );
}