"use client"

// ** Components
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"

// ** Props
interface PasswordChangedProps {
    loginHandler: () => void;
}

export default function PasswordChanged({
                                            loginHandler,
                                        }: PasswordChangedProps) {
    return (
        <section className="min-h-screen flex items-center p-4 sm:p-6 lg:col-start-2 lg:py-8 lg:px-22">
            <div className="w-full min-h-fit flex flex-col items-center text-center gap-4 lg:bg-white rounded-4xl p-4 sm:p-6 lg:p-8">
                <Badge>
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.6663 7.58331C11.6663 10.5 9.62467 11.9583 7.19801 12.8041C7.07094 12.8472 6.9329 12.8451 6.80717 12.7983C4.37467 11.9583 2.33301 10.5 2.33301 7.58331V3.49998C2.33301 3.17803 2.59439 2.91664 2.91634 2.91664C4.08301 2.91664 5.54134 2.21664 6.55634 1.32998C6.81165 1.11185 7.1877 1.11185 7.44301 1.32998C8.46384 2.22248 9.91634 2.91664 11.083 2.91664C11.4052 2.91664 11.6663 3.17781 11.6663 3.49998V7.58331"
                            stroke="#3D8B55"
                            strokeWidth="1.16667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M5.25 6.99998L6.41667 8.16665L8.75 5.83331"
                            stroke="#3D8B55"
                            strokeWidth="1.16667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Password Updated Successfully
                </Badge>

                <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#1D1B18]">
                    Your password has been changed!
                </h1>

                <p className="text-sm sm:text-base text-[#625D56] max-w-lg leading-7">
                    Your password has been updated successfully.
                    You can now sign in to your account using your
                    new password.
                </p>

                <div className="w-full max-w-lg flex items-start gap-3 text-left mt-2">
                    <svg
                        className="shrink-0 mt-0.5"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 1.5L15 4V8.5C15 12.25 12.45 14.95 9 16.5C5.55 14.95 3 12.25 3 8.5V4L9 1.5Z"
                            stroke="#3D8B55"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.5 8.75L8 10.25L11.5 6.75"
                            stroke="#3D8B55"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <div className="flex flex-col gap-1">
                        <span className="text-[13px] sm:text-sm font-bold text-[#1D1B18]">
                            Your account is secure
                        </span>
                        <span className="text-[11px] sm:text-[12px] text-[#625D56] leading-5">
                            Your new password is ready to use.
                            Keep it private and never share it with anyone.
                        </span>
                    </div>
                </div>

                <Button
                    variant="primary"
                    className="w-full max-w-lg py-3.5 mt-2"
                    onClick={loginHandler}
                >
                    Sign In to Your Account

                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.33301 8H12.6663"
                            stroke="white"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8 3.33334L12.6667 8.00001L8 12.6667"
                            stroke="white"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Button>

                <div className="flex w-full max-w-lg border-b border-[#E6DED3] my-2" />

                <p className="text-[11px] sm:text-[12px] text-[#918A81] leading-5">
                    For your security, make sure you sign in using
                    your new password.
                </p>
            </div>
        </section>
    )
}
