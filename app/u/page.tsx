'use client'
// ** Sections
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
// ** Hooks && Tools
import { useRouter, useSearchParams } from "next/navigation";



export default function Auth() {
  // ** Constants
  const router = useRouter();
  const searchParams = useSearchParams();

  const mode = searchParams?.get("mode");
  


  // ** States
  const isLogin = mode === null || mode === "login";



  // ** Handlers
  const handleToggle = ()=>{
    const nextMode = isLogin ? "signup" : "login";
    router.replace(`/u?mode=${nextMode}`, {
      scroll: false,
    });
  }

  

  return (
    <main className="min-h-screen grid grid-cols-2 items-center relative">
      <Login toggleHandler={handleToggle}/>
      <div className={`w-1/2 h-full bg-primary absolute top-0 ${isLogin ? 'left-1/2' : 'left-0'} duration-1000`}>

      </div>
      <SignUp toggleHandler={handleToggle}/>
    </main>
  );
}
