import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";

// ** Props
interface SignUpProps {
    toggleHandler: () => void;
}

export default function SignUp({ toggleHandler }: SignUpProps) {
    return (
        <section className="min-h-screen flex items-center p-4 sm:p-6 lg:col-start-2 lg:py-8 lg:px-22">
            <div className="w-full min-h-fit flex flex-col items-start gap-3 lg:bg-white rounded-4xl p-4 sm:p-6 lg:p-8">

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
                            stroke="#D94A1F"
                            strokeWidth="1.16667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M5.25 6.99998L6.41667 8.16665L8.75 5.83331"
                            stroke="#D94A1F"
                            strokeWidth="1.16667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Enterprise Secure Account
                </Badge>

                <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-bold text-[#1D1B18]">
                    Create your account
                </h1>

                <p className="text-sm sm:text-base text-[#625D56]">
                    Set up your account to access live operations, POS
                    stations, and GCC kitchen pipeline.
                </p>
                <div className="w-full flex flex-col sm:flex-row items-center gap-3">
                    <Button className="w-full !bg-[#FBF9F5] border border-[#E6DED3] font-semibold">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_27_20)">
                                <path
                                    d="M15.83 8.17999C15.83 7.71332 15.79 7.24665 15.7033 6.79999H8V9.80665H12.4C12.2067 10.82 11.64 11.6733 10.8 12.2467V14.28H13.3867C14.9 12.8867 15.8267 10.8333 15.8267 8.17999H15.83Z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M8.00001 16C10.16 16 11.9667 15.28 13.2867 14.06L10.7 12.0266C9.98001 12.5066 9.06668 12.8 8.00001 12.8C5.92001 12.8 4.15335 11.4 3.52001 9.51331H0.84668V11.6133C2.16668 14.2066 4.87335 16 8.00001 16Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M3.52 9.51332C3.35333 9.03332 3.26667 8.51999 3.26667 7.99999C3.26667 7.47999 3.35333 6.96666 3.52 6.48666V4.38666H0.846667C0.306667 5.47332 0 6.69999 0 7.99999C0 9.29999 0.306667 10.5267 0.846667 11.6133L3.52 9.51332Z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M8.00001 3.16667C9.18001 3.16667 10.2333 3.57333 11.0667 4.36667L13.3467 2.08667C11.9667 0.793333 10.16 0 8.00001 0C4.87335 0 2.16668 1.79333 0.84668 4.38667L3.52001 6.48667C4.15335 4.6 5.92001 3.16667 8.00001 3.16667Z"
                                    fill="#EA4335"
                                />
                            </g>

                            <defs>
                                <clipPath id="clip0_27_20">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Sign up with Google
                    </Button>

                    <Button className="w-full !bg-[#FBF9F5] border border-[#E6DED3] font-semibold">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.4732 13C11.9199 13.8267 11.3332 14.6333 10.4399 14.6467C9.54657 14.6667 9.2599 14.12 8.24657 14.12C7.22657 14.12 6.91323 14.6333 6.06657 14.6667C5.19323 14.7 4.53323 13.7867 3.97323 12.98C2.83323 11.3333 1.9599 8.3 3.13323 6.26C3.71323 5.24666 4.75323 4.60666 5.8799 4.58666C6.73323 4.57333 7.54657 5.16666 8.07323 5.16666C8.59323 5.16666 9.5799 4.45333 10.6132 4.56C11.0466 4.58 12.2599 4.73333 13.0399 5.88C12.9799 5.92 11.5932 6.73333 11.6066 8.42C11.6266 10.4333 13.3732 11.1067 13.3932 11.1133C13.3732 11.16 13.1132 12.0733 12.4732 13ZM10.6466 4.24C11.0732 3.72 11.3666 2.99333 11.2866 2.26666C10.6199 2.29333 9.8399 2.71333 9.39323 3.23333C9.00657 3.68 8.6599 4.41333 8.75323 5.12666C9.4999 5.18667 10.2199 4.76 10.6466 4.24Z"
                                fill="#1D1B18"
                            />
                        </svg>
                        Sign up with Apple
                    </Button>
                </div>
                <div className="w-full flex items-center gap-3">
                    <span className="flex w-full border-b border-[#E6DED3]" />

                    <h2 className="text-[10px] sm:text-[12px] text-[#918A81] text-nowrap">
                        OR SIGN UP WITH EMAIL
                    </h2>

                    <span className="flex w-full border-b border-[#E6DED3]" />
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input
                        label="FIRST NAME"
                        id="firstName"
                        type="text"
                    />

                    <Input
                        label="LAST NAME"
                        id="lastName"
                        type="text"
                    />
                </div>

                <Input
                    label="WORK EMAIL ADDRESS"
                    id="email"
                    type="email"
                />

                <Input
                    label="PASSWORD"
                    id="password"
                    type="password"
                />

                <Input
                    label="CONFIRM PASSWORD"
                    id="confirmPassword"
                    type="password"
                />
                <div className="w-full flex items-start gap-2">
                    <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        className="mt-0.5"
                    />

                    <label
                        htmlFor="terms"
                        className="text-[12px] text-[#918A81] leading-5"
                    >
                        I agree to the{" "}
                        <span className="font-semibold text-[#1D1B18]">
                            Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="font-semibold text-[#1D1B18]">
                            Privacy Policy
                        </span>
                    </label>
                </div>
                <Button
                    variant="primary"
                    className="w-full py-3.5"
                >
                    Create Serveo Hub Account

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
                <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <h2 className="flex items-center gap-2 text-[12px] text-[#918A81] flex-wrap">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.6663 5.83332C11.6663 8.74591 8.43526 11.7792 7.35026 12.7161C7.14261 12.8722 6.85674 12.8722 6.64909 12.7161C5.56409 11.7792 2.33301 8.74591 2.33301 5.83332C2.33301 3.25772 4.42407 1.16666 6.99967 1.16666C9.57528 1.16666 11.6663 3.25772 11.6663 5.83332"
                                stroke="#918A81"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.25 5.83334C5.25 6.79919 6.03415 7.58334 7 7.58334C7.96585 7.58334 8.75 6.79919 8.75 5.83334C8.75 4.86749 7.96585 4.08334 7 4.08334C6.03415 4.08334 5.25 4.86749 5.25 5.83334V5.83334"
                                stroke="#918A81"
                                strokeWidth="1.16667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        Default Venue:

                        <span className="font-bold text-[#1D1B18]">
                            Dubai Marina (Flagship)
                        </span>
                    </h2>

                    <Button
                        className="!text-[#D94A1F] font-semibold"
                        onClick={toggleHandler}
                    >
                        Already have an account?
                    </Button>
                </div>
            </div>
        </section>
    );
}
