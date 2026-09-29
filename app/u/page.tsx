'use client'
// ** Sections
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
// ** Hooks && Tools
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";



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
    <Suspense fallback={null}>
      <main className="min-h-screen flex lg:grid grid-cols-2 items-center relative overflow-x-hidden lg:overflow-visible">
        <div className={`w-[300%] shrink-0 min-h-screen flex duration-1000 lg:contents ${isLogin ? 'translate-x-0' : '-translate-x-2/3'}`}>
          <div className="w-1/3 shrink-0 flex items-center lg:contents">
            <Login toggleHandler={handleToggle}/>
          </div>
          <div className={`w-1/3 shrink-0 bg-primary lg:w-1/2 lg:h-full lg:absolute top-0 ${isLogin ? 'lg:left-1/2' : 'lg:left-0'} duration-1000`}>

          </div>
          <div className="w-1/3 shrink-0 flex items-center lg:contents">
            <SignUp toggleHandler={handleToggle}/>
          </div>
        </div>
      </main>
    </Suspense>
  );
}