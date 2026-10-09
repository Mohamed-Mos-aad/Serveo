'use client'
import React from "react";

type SearchInputProps = {
    id: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch?: () => void;
};

export default function SearchInput({
                                        id,
                                        placeholder = "Search burgers, pizza, drinks...",
                                        value,
                                        onChange,
                                        onSearch,
                                    }: SearchInputProps) {
    return (
        <div className="w-full">
            <div className="relative w-full">
                <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.375 5.6875C11.3568 6.96354 10.9922 8.08464 10.2812 9.05078L13.7539 12.4961C13.918 12.6784 14 12.888 14 13.125C14 13.362 13.918 13.5716 13.7539 13.7539C13.5716 13.918 13.362 14 13.125 14C12.888 14 12.6784 13.918 12.4961 13.7539L9.05078 10.2812C8.08464 10.9922 6.96354 11.3568 5.6875 11.375C4.08333 11.3385 2.74349 10.7826 1.66797 9.70703C0.592448 8.63151 0.0364583 7.29167 0 5.6875C0.0364583 4.08333 0.592448 2.74349 1.66797 1.66797C2.74349 0.592448 4.08333 0.0364583 5.6875 0C7.29167 0.0364583 8.63151 0.592448 9.70703 1.66797C10.7826 2.74349 11.3385 4.08333 11.375 5.6875ZM5.6875 9.625C6.39844 9.625 7.05469 9.45182 7.65625 9.10547C8.25781 8.75911 8.74089 8.27604 9.10547 7.65625C9.45182 7.03646 9.625 6.38021 9.625 5.6875C9.625 4.99479 9.45182 4.33854 9.10547 3.71875C8.74089 3.09896 8.25781 2.61589 7.65625 2.26953C7.05469 1.92318 6.39844 1.75 5.6875 1.75C4.97656 1.75 4.32031 1.92318 3.71875 2.26953C3.11719 2.61589 2.63411 3.09896 2.26953 3.71875C1.92318 4.33854 1.75 4.99479 1.75 5.6875C1.75 6.38021 1.92318 7.03646 2.26953 7.65625C2.63411 8.27604 3.11719 8.75911 3.71875 9.10547C4.32031 9.45182 4.97656 9.625 5.6875 9.625Z"
                        fill="#A8A29E"
                    />
                </svg>

                <input
                    id={id}
                    type="text"
                    value={value}
                    onChange={onChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            onSearch?.();
                        }
                    }}
                    placeholder={placeholder}
                    className="w-full bg-white text-charcoal border border-[#D8CEC1] rounded-full pl-10 pr-24 py-2.5 text-[14px] outline-none focus:border-[#D94A1F] transition-colors"
                />

                <button
                    type="button"
                    onClick={onSearch}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#D94A1F] text-white text-[13px] font-semibold px-4 py-1.5 rounded-full hover:bg-[#35312C] transition-colors"
                >
                    Search
                </button>
            </div>
        </div>
    );
}