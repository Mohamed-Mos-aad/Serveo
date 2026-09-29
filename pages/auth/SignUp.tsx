// ** Components
import Button from "@/components/ui/Button"
// ** Porps
interface SignInProps{
    toggleHandler: ()=> void
}



export default function SignUp({toggleHandler} : SignInProps) {
    return (
        <div>
            SignIn
            <Button onClick={toggleHandler}>LogIn</Button>
        </div>
    )
}