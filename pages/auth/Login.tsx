// ** Components
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
// ** Porps
interface LoginProps{
    toggleHandler: ()=> void
}



export default function Login({toggleHandler} : LoginProps) {
    return (
        <section className="h-screen p-8">
            <div className="h-full flex flex-col items-start gap-3 lg:bg-white rounded-4xl p-8">
                <Badge>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6663 7.58331C11.6663 10.5 9.62467 11.9583 7.19801 12.8041C7.07094 12.8472 6.9329 12.8451 6.80717 12.7983C4.37467 11.9583 2.33301 10.5 2.33301 7.58331V3.49998C2.33301 3.17803 2.59439 2.91664 2.91634 2.91664C4.08301 2.91664 5.54134 2.21664 6.55634 1.32998C6.81165 1.11185 7.1877 1.11185 7.44301 1.32998C8.46384 2.22248 9.91634 2.91664 11.083 2.91664C11.4052 2.91664 11.6663 3.17781 11.6663 3.49998V7.58331" stroke="#D94A1F" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.25 6.99998L6.41667 8.16665L8.75 5.83331" stroke="#D94A1F" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Enterprise Secure Login
                </Badge>
                <h1 className="text-[36px] font-bold text-[#1D1B18]">Welcome back</h1>
                <Button onClick={toggleHandler}>SignUp</Button>
            </div>
        </section>
    )
}