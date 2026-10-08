"use client"

// ** React
import { useEffect, useRef, useState } from "react"
// ** Components
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
// ** Props
interface VerifyOtpProps{
    verifyHandler: (otp: string)=> void;
    resendHandler: ()=> void;
    whatsappHandler: ()=> void;
    authenticatorHandler: ()=> void;
    managerOverrideHandler: ()=> void;
}



export default function VerifyOtp({verifyHandler, resendHandler, whatsappHandler, authenticatorHandler, managerOverrideHandler} : VerifyOtpProps) {
    // ** Constants
    const OTP_LENGTH = 6;
    const RESEND_SECONDS = 40;



    // ** States
    const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
    const [activeIndex, setActiveIndex] = useState(0);
    const [seconds, setSeconds] = useState(RESEND_SECONDS);
    const [trustDevice, setTrustDevice] = useState(true);



    // ** Refs
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);



    // ** Resend Timer
    useEffect(() => {
        if (seconds <= 0) return;
        const timer = setTimeout(() => setSeconds((prev) => prev - 1), 1000);
        return () => clearTimeout(timer);
    }, [seconds]);



    // ** Handlers
    const changeHandler = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < OTP_LENGTH - 1) inputsRef.current[index + 1]?.focus();
    }
    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) inputsRef.current[index - 1]?.focus();
    }
    const pasteHandler = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
        if (!pasted) return;
        const newOtp = Array(OTP_LENGTH).fill("");
        pasted.split("").forEach((digit, i) => (newOtp[i] = digit));
        setOtp(newOtp);
        inputsRef.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus();
    }
    const resendClickHandler = () => {
        setSeconds(RESEND_SECONDS);
        resendHandler();
    }



    return (
        <section className="min-h-screen flex items-center p-4 sm:p-6 lg:py-8 lg:px-22">
            <div className="w-full min-h-fit flex flex-col items-start gap-3 lg:bg-white rounded-4xl p-4 sm:p-6 lg:p-8">
                <Badge>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6663 7.58331C11.6663 10.5 9.62467 11.9583 7.19801 12.8041C7.07094 12.8472 6.9329 12.8451 6.80717 12.7983C4.37467 11.9583 2.33301 10.5 2.33301 7.58331V3.49998C2.33301 3.17803 2.59439 2.91664 2.91634 2.91664C4.08301 2.91664 5.54134 2.21664 6.55634 1.32998C6.81165 1.11185 7.1877 1.11185 7.44301 1.32998C8.46384 2.22248 9.91634 2.91664 11.083 2.91664C11.4052 2.91664 11.6663 3.17781 11.6663 3.49998V7.58331" stroke="#D94A1F" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.25 6.99998L6.41667 8.16665L8.75 5.83331" stroke="#D94A1F" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Two-Factor Authentication Required
                </Badge>

                <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#1D1B18]">
                    Verify your identity
                </h1>

                <p className="text-sm sm:text-base text-[#625D56]">
                    A 6-digit verification code has been dispatched to{" "}
                    <span className="font-bold text-[#1D1B18]">Tariq Al-Mansoor</span>{" "}
                    via registered device and SMS (+971 58 ••• ••984).
                </p>

                <h2 className="text-[10px] sm:text-[12px] font-semibold text-[#918A81] mt-2">
                    ENTER 6-DIGIT PASSCODE (OTP)
                </h2>

                <div className="w-full flex items-center gap-2 sm:gap-3">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => { inputsRef.current[index] = el }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            placeholder="•"
                            onChange={(e) => changeHandler(e.target.value, index)}
                            onKeyDown={(e) => keyDownHandler(e, index)}
                            onPaste={pasteHandler}
                            onFocus={() => setActiveIndex(index)}
                            className={`w-full min-w-0 aspect-square max-h-16 text-center text-xl sm:text-2xl font-bold text-[#1D1B18] placeholder:text-[#C9C2B8] bg-[#FBF9F5] rounded-xl outline-none border-2 transition-colors ${activeIndex === index ? "border-[#D94A1F]" : "border-[#E6DED3]"}`}
                        />
                    ))}
                </div>

                <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    {seconds > 0 ? (
                        <span className="flex items-center gap-2 text-[12px] text-[#918A81]">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 3.5V7L9.33333 8.16667" stroke="#918A81" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7 12.8333C10.2217 12.8333 12.8333 10.2217 12.8333 7C12.8333 3.77834 10.2217 1.16667 7 1.16667C3.77834 1.16667 1.16667 3.77834 1.16667 7C1.16667 10.2217 3.77834 12.8333 7 12.8333Z" stroke="#918A81" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Resend code in {seconds}s
                        </span>
                    ) : (
                        <button className="text-[12px] font-bold text-[#D94A1F] cursor-pointer" onClick={resendClickHandler}>
                            Resend code
                        </button>
                    )}

                    <button className="flex items-center gap-2 text-[12px] font-bold text-[#D94A1F] cursor-pointer" onClick={whatsappHandler}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.16667 12.8333L1.99967 9.83333C1.47117 8.93089 1.19267 7.90367 1.19434 6.85833C1.19434 3.60675 3.84109 0.958328 7.09267 0.958328C8.66934 0.958328 10.1518 1.57208 11.2652 2.68716C12.3787 3.80225 12.9917 5.28525 12.9917 6.86191C12.9917 10.1135 10.345 12.7619 7.09342 12.7619C6.10676 12.7619 5.13934 12.5143 4.28009 12.0466L1.16667 12.8333Z" stroke="#D94A1F" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.25 4.66667C5.25 4.66667 5.25 6.41667 6.41667 7.58333C7.58333 8.75 9.33333 8.75 9.33333 8.75L9.04167 7.875L8.16667 7.58333L7.875 7.875C7.875 7.875 7.29167 7.58333 6.70833 7C6.125 6.41667 5.83333 5.83333 5.83333 5.83333L6.125 5.54167L5.83333 4.66667H5.25Z" stroke="#D94A1F" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Send via WhatsApp Business
                    </button>
                </div>

                <label htmlFor="trust" className="w-full flex items-start gap-3 bg-[#FFF4EF] border border-[#F3D5C8] rounded-xl p-3 cursor-pointer">
                    <input
                        type="checkbox"
                        id="trust"
                        checked={trustDevice}
                        onChange={(e) => setTrustDevice(e.target.checked)}
                        className="mt-1 accent-[#D94A1F]"
                    />
                    <span className="flex flex-col gap-1">
                        <span className="text-[13px] sm:text-sm font-bold text-[#1D1B18]">
                            Trust this POS station & terminal for 30 days
                        </span>
                        <span className="text-[11px] sm:text-[12px] text-[#918A81]">
                            Recommended only on dedicated floor hardware with biometric lock
                        </span>
                    </span>
                </label>

                <Button variant="primary" className="w-full py-3.5" onClick={() => verifyHandler(otp.join(""))}>
                    Verify & Enter Command Center
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33301 8H12.6663" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Button>

                <div className="w-full flex items-center gap-3">
                    <span className="flex w-full border-b border-[#E6DED3]"></span>
                    <h2 className="text-[10px] sm:text-[12px] text-[#918A81] text-nowrap">ALTERNATIVE VERIFICATION OPTIONS</h2>
                    <span className="flex w-full border-b border-[#E6DED3]"></span>
                </div>

                <div className="w-full flex flex-col sm:flex-row items-center gap-3">
                    <Button className="w-full !bg-[#FBF9F5] border border-[#E6DED3] !justify-start text-left" onClick={authenticatorHandler}>
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                            <path d="M12.6667 6.66667C12.6667 10 8.00001 14.6667 8.00001 14.6667C8.00001 14.6667 3.33334 10 3.33334 6.66667C3.33334 4.08934 5.42268 2 8.00001 2C10.5773 2 12.6667 4.08934 12.6667 6.66667Z" stroke="#625D56" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 6.66667L7.33333 8L10 5.33333" stroke="#625D56" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="flex flex-col items-start">
                            <span className="text-[12px] font-bold text-[#1D1B18]">Authenticator App</span>
                            <span className="text-[10px] font-normal text-[#918A81]">Google Authenticator / Duo</span>
                        </span>
                    </Button>

                    <Button className="w-full !bg-[#FBF9F5] border border-[#E6DED3] !justify-start text-left" onClick={managerOverrideHandler}>
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                            <path d="M10.6667 5.33333C10.6667 6.80609 9.47277 8 8.00001 8C6.52725 8 5.33334 6.80609 5.33334 5.33333C5.33334 3.86057 6.52725 2.66667 8.00001 2.66667C9.47277 2.66667 10.6667 3.86057 10.6667 5.33333Z" stroke="#625D56" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.66667 13.3333C2.66667 11.1242 5.0553 9.33333 8.00001 9.33333C10.9447 9.33333 13.3333 11.1242 13.3333 13.3333" stroke="#625D56" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="flex flex-col items-start">
                            <span className="text-[12px] font-bold text-[#1D1B18]">Manager Override</span>
                            <span className="text-[10px] font-normal text-[#918A81]">Requires General Manager key</span>
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    )
}