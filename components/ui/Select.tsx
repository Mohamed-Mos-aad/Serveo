import React from "react";

type SelectOption = {
    value: string;
    label: string;
};

type SelectProps = {
    label?: string;
    id: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    variant?: 'primary' | 'secondary';
};

export default function Select({
                                   label,
                                   id,
                                   placeholder = "Select an option",
                                   variant = 'primary',
                                   value,
                                   onChange,
                                   options,
                               }: SelectProps) {
    // ** Constants
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
                <select
                    id={id}
                    value={value}
                    onChange={onChange}
                    className={`${variantStyles} w-full appearance-none   outline-0 rounded-xl pl-4 py-3 pr-10 text-[14px] cursor-pointer`}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>

                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
                <svg
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 6L8 10L12 6"
                        stroke="#918A81"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
}