"use client"

// ** Components
import Button from "@/components/ui/Button"

// ** Interfaces
interface PasswordChangedTipsProps {
    loginHandler: () => void
}

export default function PasswordChangedTips({
                                                loginHandler,
                                            }: PasswordChangedTipsProps) {
    return (
        <div className="h-full flex justify-center items-center p-4 sm:p-6 lg:py-8 lg:px-16">
            <div className="w-full min-h-fit flex flex-col items-start gap-8 p-4 sm:p-6 lg:p-8">

                <div className="flex flex-col gap-4">
                    <h1 className="text-[32px] sm:text-[36px] font-bold leading-tight text-white">
                        Your Account,
                        <br />
                        Secured.
                    </h1>

                    <p className="text-sm leading-7 text-white/75">
                        Your password has been changed successfully.
                        Your account is ready for secure access using
                        your new credentials. Sign in to continue
                        managing your operations with Serveo.
                    </p>
                </div>

                <div className="w-full flex flex-col gap-4 bg-white/10 border border-white/15 rounded-2xl p-5">

                    <div className="flex items-center gap-2.5">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 3L20 6.5V12C20 16.5 16.5 19.5 12 21C7.5 19.5 4 16.5 4 12V6.5L12 3Z"
                                stroke="#4ADE80"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9 12L11 14L15.5 9.5"
                                stroke="#4ADE80"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span className="text-[10px] font-semibold tracking-[0.15em] text-white/60">
                            ACCOUNT SECURITY
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#4ADE80]/10">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 10V7A5 5 0 0117 7V10"
                                    stroke="#4ADE80"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                />
                                <rect
                                    x="5"
                                    y="10"
                                    width="14"
                                    height="11"
                                    rx="2"
                                    stroke="#4ADE80"
                                    strokeWidth="1.7"
                                />
                                <path
                                    d="M12 14V17"
                                    stroke="#4ADE80"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-white">
                                Password Successfully Updated
                            </span>
                            <span className="text-[11px] text-white/60">
                                Your new credentials are ready to use.
                            </span>
                        </div>
                    </div>

                    <div className="border-b border-white/10" />

                    <ul className="flex flex-col gap-4">
                        <li className="flex items-start gap-2.5 text-[12px] leading-5 text-white/80">
                            <svg
                                className="shrink-0 mt-0.5"
                                width="16"
                                height="16"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="10"
                                    cy="10"
                                    r="9"
                                    fill="white"
                                    fillOpacity="0.12"
                                />
                                <path
                                    d="M14 7L8.5 12.5L6 10"
                                    stroke="#86EFAC"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Use your new password the next time you sign in.
                        </li>

                        <li className="flex items-start gap-2.5 text-[12px] leading-5 text-white/80">
                            <svg
                                className="shrink-0 mt-0.5"
                                width="16"
                                height="16"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="10"
                                    cy="10"
                                    r="9"
                                    fill="white"
                                    fillOpacity="0.12"
                                />
                                <path
                                    d="M14 7L8.5 12.5L6 10"
                                    stroke="#86EFAC"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Keep your credentials private and secure.
                        </li>

                        <li className="flex items-start gap-2.5 text-[12px] leading-5 text-white/80">
                            <svg
                                className="shrink-0 mt-0.5"
                                width="16"
                                height="16"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="10"
                                    cy="10"
                                    r="9"
                                    fill="white"
                                    fillOpacity="0.12"
                                />
                                <path
                                    d="M14 7L8.5 12.5L6 10"
                                    stroke="#86EFAC"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Never share your password or verification codes.
                        </li>
                    </ul>

                </div>

                <div>
                    <span className="text-[12px] text-white/70">
                        Ready to get back to work?
                    </span>

                    <Button
                        className="bg-white !text-[#D94A1F] font-semibold mt-3"
                        onClick={loginHandler}
                    >
                        Sign In to Serveo
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.333 8H12.667"
                                stroke="#B83B18"
                                strokeWidth="1.333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M8 3.333L12.667 8L8 12.667"
                                stroke="#B83B18"
                                strokeWidth="1.333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Button>
                </div>

            </div>
        </div>
    )
}