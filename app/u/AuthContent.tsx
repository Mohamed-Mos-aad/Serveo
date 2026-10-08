'use client'
// ** Sections
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import ResetPassword from "@/pages/auth/ResetPassword";
import LoginTips from "@/pages/auth/LoginTips";
// ** Assets
import logo from '@/public/favicon.svg'
// ** Hooks && Tools
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import ResetPasswordTips from "@/pages/auth/ResetPasswordTips";
// ** Interfaces
type AuthContentProps = {
  initialMode: "login" | "signup" | "resetPassword";
};



export default function AuthContent({ initialMode }: AuthContentProps) {
  // ** Constants
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(initialMode === "login");



  // ** Handlers
  const handleToggle = () => {
    const nextMode = isLogin ? "signup" : "login";
    setIsLogin(!isLogin);
    router.replace(`/u?mode=${nextMode}`, { scroll: false });
  };
  const handleResetPasswordToggle = () => {
    setIsLogin(false);
    router.replace(`/u?mode=resetPassword`, { scroll: false });
  };



  return (
    <main className="min-h-screen flex lg:grid grid-cols-2 items-center relative overflow-x-hidden lg:overflow-visible">
      <div className={`w-[300%] shrink-0 min-h-screen flex duration-600 lg:contents ${isLogin ? 'translate-x-0' : '-translate-x-2/3'}`}>
        <div className="w-1/3 shrink-0 flex items-center lg:contents">
          <Login toggleHandler={handleToggle} resetPasswordHandler={handleResetPasswordToggle}/>
        </div>
          <section className={`w-1/3 lg:hidden shrink-0 bg-primary lg:w-1/2 lg:h-full lg:absolute lg:z-10000000000 top-0 ${isLogin ? 'lg:left-1/2' : 'lg:left-0'} duration-1000`} >
              <div className="h-full flex justify-center items-center p-4 sm:p-6 lg:py-8 lg:px-16">
                  <Image src={logo} alt="Logo"/>
              </div>
          </section>
          <div className="hidden lg:contents">
              {
                  initialMode === "login" ?
                      <section className={`w-1/3 shrink-0 bg-primary lg:w-1/2 lg:h-full lg:absolute lg:z-10000000000 top-0 ${isLogin ? 'lg:left-1/2' : 'lg:left-0'} duration-1000`} >
                          <LoginTips handleToggle={handleToggle}/>
                      </section>
                      :
                      initialMode === "resetPassword" ?
                          <section className={`w-1/3 shrink-0 bg-primary lg:w-1/2 lg:h-full lg:absolute lg:z-10000000000 top-0 ${isLogin ? 'lg:left-1/2' : 'lg:left-0'} duration-1000`} >
                              <ResetPasswordTips handleToggle={handleToggle}/>
                          </section>
                      :
                        <section className={`w-1/3 shrink-0 bg-primary lg:w-1/2 lg:h-full lg:absolute lg:z-10000000000 top-0 ${isLogin ? 'lg:left-1/2' : 'lg:left-0'} duration-1000`} >
                          <div className="h-full flex justify-center items-center p-4 sm:p-6 lg:py-8 lg:px-16">

                          </div>
                        </section>
              }
          </div>
        <div className="w-1/3 shrink-0 flex items-center lg:contents">
            { initialMode === "signup" && <SignUp toggleHandler={handleToggle} /> || initialMode === "login" && <SignUp toggleHandler={handleToggle} /> }
            { initialMode === "resetPassword" && <ResetPassword toggleHandler={handleToggle}/>}
        </div>
      </div>
    </main>
  );
}
