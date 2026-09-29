// ** Components
import Button from "@/components/ui/Button"
// ** Porps
interface LoginProps{
    toggleHandler: ()=> void
}



export default function Login({toggleHandler} : LoginProps) {
    return (
        <div>
            Login
            <Button onClick={toggleHandler}>SignUp</Button>
        </div>
    )
}