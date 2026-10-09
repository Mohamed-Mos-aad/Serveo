"use client"

// ** Components
import Button from "@/components/ui/Button"

// ** Interfaces
interface VerifyOtpTipsProps {
    handleToggle: () => void
}

export default function VerifyOtpTips({
                                          handleToggle,
                                      }: VerifyOtpTipsProps) {
    return (
        <div className="flex justify-center items-center p-4 sm:p-6 lg:py-8 lg:px-16">
            <div className="w-full flex flex-col items-start gap-8 p-4 sm:p-6 lg:p-8">

                <div className="flex flex-col gap-4">
                    <h1 className="text-[32px] sm:text-[36px] font-bold leading-tight text-white">
                        Secure Terminal
                        <br />
                        Verification
                    </h1>

                    <p className="text-sm leading-7 text-white/75">
                        Cryptographic tokens are secured within local
                        hardware enclaves. Under UAE Central Bank POS
                        frameworks and ZATCA Phase-2 regulations,
                        high-privilege operations require multi-factor
                        physical clearance.
                    </p>
                </div>

                <div className="w-full flex flex-col gap-4 bg-white/10 border border-white/15 rounded-2xl p-5">

                    <div className="flex items-center justify-between gap-3">
                        <span className="text-[10px] font-semibold tracking-[0.15em] text-white/60">
                            SESSION CLEARANCE
                        </span>

                        <span className="flex items-center gap-2 text-[10px] font-semibold text-[#86EFAC]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]" />
                            Live POS Active
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-[#D94A1F] text-sm font-bold text-white">
                            TA
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-white">
                                Tariq Al-Mansoor
                            </span>
                            <span className="text-[11px] text-white/60">
                                General Operations Director
                            </span>
                        </div>
                    </div>

                    <div className="border-b border-white/10" />

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-white/50">
                                Active Branch
                            </span>
                            <span className="text-[12px] font-semibold text-white">
                                Dubai Marina Flagship
                            </span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-white/50">
                                Terminal Node
                            </span>
                            <span className="text-[12px] font-semibold text-white">
                                DXB-POS-04 (Floor)
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-3 rounded-xl bg-black/10 border border-white/10 p-3">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] text-white/50">
                                    Gateway Latency
                                </span>
                                <span className="text-[12px] font-bold text-white">
                                    14ms stable
                                </span>
                            </div>

                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 18L8 13L12 16L20 6"
                                    stroke="#4ADE80"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15 6H20V11"
                                    stroke="#4ADE80"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <span className="text-[12px] text-white/70">
                        Need another verification method?
                    </span>

                    <Button
                        className="bg-white !text-[#D94A1F] font-semibold mt-3"
                        onClick={handleToggle}
                    >
                        Return to Sign In
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 3.333L12.667 8L8 12.667"
                                stroke="#B83B18"
                                strokeWidth="1.333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.333 8H12.667"
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