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
        // resendHandler();
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

                <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-[#FBF9F5] border border-[#E6DED3] px-3.5 py-2.5 rounded-xl">
                    {seconds > 0 ? (
                        <span className="flex items-center gap-2 text-[12px] text-[#918A81]">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.86667 9.8L9.8 8.86667L7.33333 6.4V3.33333H6V6.93333L8.86667 9.8ZM6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45555 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333ZM6.66667 12C8.14444 12 9.40278 11.4806 10.4417 10.4417C11.4806 9.40278 12 8.14444 12 6.66667C12 5.18889 11.4806 3.93056 10.4417 2.89167C9.40278 1.85278 8.14444 1.33333 6.66667 1.33333C5.18889 1.33333 3.93056 1.85278 2.89167 2.89167C1.85278 3.93056 1.33333 5.18889 1.33333 6.66667C1.33333 8.14444 1.85278 9.40278 2.89167 10.4417C3.93056 11.4806 5.18889 12 6.66667 12Z" fill="#D94A1F"/>
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

                <label htmlFor="trust" className="w-full flex items-start gap-3 rounded-xl p-3 cursor-pointer">
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

                <div className="flex w-full border-b border-[#E6DED3] my-2"></div>
                <h2 className="text-[10px] sm:text-[12px] font-semibold text-[#918A81] text-nowrap">ALTERNATIVE VERIFICATION OPTIONS</h2>
                <div className="w-full flex flex-col sm:flex-row items-center gap-3">
                    <Button className="w-full !bg-[#FBF9F5] border border-[#E6DED3] !justify-start text-left" onClick={authenticatorHandler}>
                        <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 16.5C1.0875 16.5 0.734375 16.3531 0.440625 16.0594C0.146875 15.7656 0 15.4125 0 15V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H9C9.4125 0 9.76562 0.146875 10.0594 0.440625C10.3531 0.734375 10.5 1.0875 10.5 1.5V3.825C10.725 3.9125 10.9062 4.05 11.0437 4.2375C11.1812 4.425 11.25 4.6375 11.25 4.875V6.375C11.25 6.6125 11.1812 6.825 11.0437 7.0125C10.9062 7.2 10.725 7.3375 10.5 7.425V15C10.5 15.4125 10.3531 15.7656 10.0594 16.0594C9.76562 16.3531 9.4125 16.5 9 16.5H1.5ZM1.5 15H9V1.5H1.5V15ZM1.5 15V1.5V15ZM3.6375 11.25H6.8625C7.0375 11.25 7.1875 11.1875 7.3125 11.0625C7.4375 10.9375 7.5 10.7875 7.5 10.6125V8.1375C7.5 7.9625 7.4375 7.8125 7.3125 7.6875C7.1875 7.5625 7.0375 7.5 6.8625 7.5H6.75V6.75C6.75 6.3375 6.60312 5.98438 6.30937 5.69063C6.01562 5.39688 5.6625 5.25 5.25 5.25C4.8375 5.25 4.48438 5.39688 4.19063 5.69063C3.89688 5.98438 3.75 6.3375 3.75 6.75V7.5H3.6375C3.4625 7.5 3.3125 7.5625 3.1875 7.6875C3.0625 7.8125 3 7.9625 3 8.1375V10.6125C3 10.7875 3.0625 10.9375 3.1875 11.0625C3.3125 11.1875 3.4625 11.25 3.6375 11.25ZM4.5 7.5V6.75C4.5 6.5375 4.57187 6.35938 4.71562 6.21562C4.85938 6.07187 5.0375 6 5.25 6C5.4625 6 5.64062 6.07187 5.78438 6.21562C5.92813 6.35938 6 6.5375 6 6.75V7.5H4.5Z" fill="#625D56"/>
                        </svg>
                        <span className="flex flex-col items-start">
                            <span className="text-[12px] font-bold text-[#1D1B18]">Authenticator App</span>
                            <span className="text-[10px] font-normal text-[#918A81]">Google Authenticator / Duo</span>
                        </span>
                    </Button>

                    <Button className="w-full !bg-[#FBF9F5] border border-[#E6DED3] !justify-start text-left" onClick={managerOverrideHandler}>
                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 9C3.25 9 2.1875 8.5625 1.3125 7.6875C0.4375 6.8125 0 5.75 0 4.5C0 3.25 0.4375 2.1875 1.3125 1.3125C2.1875 0.4375 3.25 0 4.5 0C5.325 0 6.08125 0.20625 6.76875 0.61875C7.45625 1.03125 8 1.575 8.4 2.25H16.5V6.75H15V9H10.5V6.75H8.4C8 7.425 7.45625 7.96875 6.76875 8.38125C6.08125 8.79375 5.325 9 4.5 9ZM4.5 7.5C5.325 7.5 5.9875 7.24687 6.4875 6.74062C6.9875 6.23438 7.2875 5.7375 7.3875 5.25H12V7.5H13.5V5.25H15V3.75H7.3875C7.2875 3.2625 6.9875 2.76562 6.4875 2.25938C5.9875 1.75313 5.325 1.5 4.5 1.5C3.675 1.5 2.96875 1.79375 2.38125 2.38125C1.79375 2.96875 1.5 3.675 1.5 4.5C1.5 5.325 1.79375 6.03125 2.38125 6.61875C2.96875 7.20625 3.675 7.5 4.5 7.5ZM4.5 6C4.9125 6 5.26562 5.85312 5.55937 5.55937C5.85312 5.26562 6 4.9125 6 4.5C6 4.0875 5.85312 3.73438 5.55937 3.44062C5.26562 3.14687 4.9125 3 4.5 3C4.0875 3 3.73438 3.14687 3.44062 3.44062C3.14687 3.73438 3 4.0875 3 4.5C3 4.9125 3.14687 5.26562 3.44062 5.55937C3.73438 5.85312 4.0875 6 4.5 6Z" fill="#625D56"/>
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