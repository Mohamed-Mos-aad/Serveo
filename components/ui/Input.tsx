import { useState } from "react";

type InputProps = {
    label: string;
    id: string;
    type?: "text" | "email" | "password";
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    variant?: 'primary' | 'secondary';
};

export default function Input({
                                  label,
                                  id,
                                  type = "text",
                                  placeholder,
                                  variant = 'primary',
                                  value,
                                  onChange,
                              }: InputProps) {
// ** Constants
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;
    const variantStyles = variant === 'primary'
        ? 'bg-white text-charcoal border border-[#D8CEC1]'
        : 'bg-[#FBF9F5] text-[#918A81]] border border-[#E6DED3]';



    return (
        <div className="w-full flex flex-col gap-1.5">
            <label
                htmlFor={id}
                className="text-[12px] font-bold text-[#1D1B18]"
            >
                {label}
            </label>

            <div className="relative w-full">
                <svg
                    className="absolute left-3.5 top-1/2 -translate-y-1/2"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {isPassword ? (
                        <>
                            <path
                                d="M3.33333 7.33331H12.6667C13.4026 7.33331 14 7.93076 14 8.66665V13.3333C14 14.0692 13.4026 14.6666 12.6667 14.6666H3.33333C2.59745 14.6666 2 14.0692 2 13.3333V8.66665C2 7.93076 2.59745 7.33331 3.33333 7.33331V7.33331"
                                stroke="#918A81"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4.66699 7.33331V4.66665C4.66699 2.82693 6.16061 1.33331 8.00033 1.33331C9.84004 1.33331 11.3337 2.82693 11.3337 4.66665V7.33331"
                                stroke="#918A81"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </>
                    ) : (
                        <>
                            <path
                                d="M14.6663 4.66669L8.67234 8.48469C8.25828 8.72518 7.74706 8.72518 7.33301 8.48469L1.33301 4.66669"
                                stroke="#918A81"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M2.66634 2.66669H13.333C14.0689 2.66669 14.6663 3.26413 14.6663 4.00002V12C14.6663 12.7359 14.0689 13.3334 13.333 13.3334H2.66634C1.93045 13.3334 1.33301 12.7359 1.33301 12V4.00002C1.33301 3.26413 1.93045 2.66669 2.66634 2.66669V2.66669"
                                stroke="#918A81"
                                strokeWidth="1.33333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </>
                    )}
                </svg>

                <input
                    type={inputType}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`${variantStyles} w-full border border-[#D8CEC1] outline-0 rounded-xl pl-10 py-3 pr-10 text-[14px] text-[#1D1B18]`}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2"
                    >
                        {showPassword ? (
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.37468 8.232C1.31912 8.08232 1.31912 7.91767 1.37468 7.768C2.48136 5.0846 5.09737 3.33374 8.00001 3.33374C10.9027 3.33374 13.5187 5.0846 14.6253 7.768C14.6809 7.91767 14.6809 8.08232 14.6253 8.232C13.5187 10.9154 10.9027 12.6663 8.00001 12.6663C5.09737 12.6663 2.48136 10.9154 1.37468 8.232"
                                    stroke="#918A81"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 8C6 9.10383 6.89617 10 8 10C9.10383 10 10 9.10383 10 8C10 6.89617 9.10383 6 8 6C6.89617 6 6 6.89617 6 8V8"
                                    stroke="#918A81"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M2 2L14 14"
                                    stroke="#918A81"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.37468 8.232C1.31912 8.08232 1.31912 7.91767 1.37468 7.768C2.48136 5.0846 5.09737 3.33374 8.00001 3.33374C10.9027 3.33374 13.5187 5.0846 14.6253 7.768C14.6809 7.91767 14.6809 8.08232 14.6253 8.232C13.5187 10.9154 10.9027 12.6663 8.00001 12.6663C5.09737 12.6663 2.48136 10.9154 1.37468 8.232"
                                    stroke="#918A81"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 8C6 9.10383 6.89617 10 8 10C9.10383 10 10 9.10383 10 8C10 6.89617 9.10383 6 8 6C6.89617 6 6 6 6 8V8"
                                    stroke="#918A81"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}
