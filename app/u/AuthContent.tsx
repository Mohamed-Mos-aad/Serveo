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
  const [mode, setMode] = useState(initialMode);
  const [panelOnLoginSide, setPanelOnLoginSide] = useState(initialMode === "login");
  const [isTransitioning, setIsTransitioning] = useState(false);



  // ** Handlers
  const transitionTo = (nextMode: AuthContentProps["initialMode"]) => {
    if (isTransitioning || nextMode === mode) return;

    setIsTransitioning(true);

    const updateMode = () => {
      setMode(nextMode);
      router.replace(`/u?mode=${nextMode}`, { scroll: false });
    };

    if (mode === "resetPassword" && nextMode === "login") {
      window.requestAnimationFrame(() => {
        setPanelOnLoginSide(true);
        window.setTimeout(() => {
          updateMode();
          setIsTransitioning(false);
        }, 700);
      });
      return;
    }

    updateMode();
    window.requestAnimationFrame(() => {
      setPanelOnLoginSide(nextMode === "login");
      window.setTimeout(() => setIsTransitioning(false), 700);
    });
  };

  const handleToggle = () => {
    transitionTo(mode === "login" ? "signup" : "login");
  };
  const handleResetPasswordToggle = () => {
    transitionTo("resetPassword");
  };



  return (
    <main className="min-h-screen flex lg:grid grid-cols-2 items-center relative overflow-x-hidden lg:overflow-visible">
      <div className={`w-[300%] shrink-0 min-h-screen flex transition-transform duration-700 lg:contents ${panelOnLoginSide ? 'translate-x-0' : '-translate-x-2/3'}`}>
        <div className="w-1/3 shrink-0 flex items-center lg:contents">
          <Login toggleHandler={handleToggle} resetPasswordHandler={handleResetPasswordToggle}/>
        </div>
          <section className={`w-1/3 lg:hidden shrink-0 bg-primary lg:w-1/2 lg:h-full lg:absolute lg:z-10000000000 top-0 ${panelOnLoginSide ? 'lg:left-1/2' : 'lg:left-0'} transition-all duration-700`} >
              <div className="h-full flex justify-center items-center p-4 sm:p-6 lg:py-8 lg:px-16">
                  <Image src={logo} alt="Logo"/>
              </div>
          </section>
          <div className="hidden lg:contents">
              {
                  mode === "login" ?
                      <section className={`w-1/3 shrink-0 bg-primary lg:w-1/2 lg:h-full lg:absolute lg:z-10000000000 top-0 ${panelOnLoginSide ? 'lg:left-1/2' : 'lg:left-0'} transition-all duration-700`} >
                          <LoginTips handleToggle={handleToggle}/>
                      </section>
                      :
                      mode === "resetPassword" ?
                          <section className={`w-1/3 shrink-0 bg-primary lg:w-1/2 lg:h-full lg:absolute lg:z-10000000000 top-0 ${panelOnLoginSide ? 'lg:left-1/2' : 'lg:left-0'} transition-all duration-700`} >
                              <ResetPasswordTips handleToggle={handleToggle}/>
                          </section>
                      :
                        <section className={`w-1/3 shrink-0 bg-primary lg:w-1/2 lg:h-full lg:absolute lg:z-10000000000 top-0 ${panelOnLoginSide ? 'lg:left-1/2' : 'lg:left-0'} transition-all duration-700`} >
                          <div className="h-full flex justify-center items-center p-4 sm:p-6 lg:py-8 lg:px-16">

                          </div>
                        </section>
              }
          </div>
        <div className="w-1/3 shrink-0 flex items-center lg:contents">
            { (mode === "signup" || mode === "login") && <SignUp toggleHandler={handleToggle} /> }
            { mode === "resetPassword" && <ResetPassword toggleHandler={handleToggle}/>}
        </div>
      </div>

    </main>
  );
}
