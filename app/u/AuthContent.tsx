'use client'
// ** Sections
import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
// ** Hooks && Tools
import { useRouter } from "next/navigation";
import { useState } from "react";



type AuthContentProps = {
  initialMode: "login" | "signup";
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



  return (
    <main className="min-h-screen flex lg:grid grid-cols-2 items-center relative overflow-x-hidden lg:overflow-visible">
      <div className={`w-[300%] shrink-0 min-h-screen flex duration-600 lg:contents ${isLogin ? 'translate-x-0' : '-translate-x-2/3'}`}>
        <div className="w-1/3 shrink-0 flex items-center lg:contents">
          <Login toggleHandler={handleToggle} />
        </div>
        <div className={`w-1/3 shrink-0 bg-primary lg:w-1/2 lg:h-full lg:absolute lg:z-10000000000 top-0 ${isLogin ? 'lg:left-1/2' : 'lg:left-0'} duration-1000`} />
        <div className="w-1/3 shrink-0 flex items-center lg:contents">
          <SignUp toggleHandler={handleToggle} />
        </div>
      </div>
    </main>
  );
}
