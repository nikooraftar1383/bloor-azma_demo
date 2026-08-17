import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeftLong } from "react-icons/fa6";

const LoginTemp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fc] flex items-center justify-center px-4 sm:px-6 py-35 sm:py-30 lg:py-25  ">
  <div className="w-full max-w-[1180px] min-h-[650px] bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#ecedf3] shadow-[0_25px_80px_rgba(20,20,40,0.08)] flex flex-col lg:flex-row">
    
    {/* فرم */}
    <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-6 lg:px-10 flex flex-col justify-center">
      <Link to="/" className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-full bg-[#6d5bf0] flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-center">+</span>
        </div>

        <div>
          <h2 className="font-bold text-[17px] leading-none">Bloor Azma</h2>
          <p className="text-[10px] text-[#84879a] mt-1">Lab & Science</p>
        </div>
      </Link>

      <div className="mb-6 sm:mb-8">
        <h1 className="font-fa text-[26px] sm:text-[32px] font-bold text-[#171820]">
          Welcome back
        </h1>
        <p className="font-fa text-[13px] text-[#84879a] mt-2">
          Sign in to access your account
        </p>
      </div>

      <form className="space-y-4 sm:space-y-5">
        <div>
          <label className="font-fa block text-[12px] font-semibold mb-2">
            Email-Adress
          </label>

          <div className="relative">
            <FiMail
              size={17}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a6a9b7]"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="h-[48px] sm:h-[50px] w-full rounded-[14px] border border-[#e7e8ee] bg-white pr-11 pl-4 text-[13px] outline-none transition-all focus:border-[#6d5bf0] focus:ring-4 focus:ring-[#6d5bf0]/10"
            />
          </div>
        </div>

        <div>
          <label className="font-fa block text-[12px] font-semibold mb-2">
            password
          </label>

          <div className="relative">
            <FiLock
              size={17}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a6a9b7]"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="enter your password"
              className="w-full h-[48px] sm:h-[50px] rounded-[14px] border border-[#e7e8ee] bg-white pr-11 pl-12 text-[13px] outline-none transition-all focus:border-[#6d5bf0] focus:ring-4 focus:ring-[#6d5bf0]/10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a6a9b7] hover:text-[#6d5bf0] transition"
            >
              {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 accent-[#6d5bf0]" />
            <span className="font-fa text-[12px] text-[#555866]">
              Remember me
            </span>
          </label>

          <Link className="font-fa text-[12px] text-[#6d5bf0] hover:underline">
            Forget Password
          </Link>
        </div>

        <button
          type="submit"
          className="w-full h-[48px] sm:h-[50px] rounded-full bg-[#6d5bf0] text-white font-fa text-[13px] flex items-center justify-center gap-3 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(109,91,240,0.25)] transition-all duration-300"
        >
          sign in
          <FaArrowLeftLong size={12} />
        </button>
      </form>

      <div className="flex items-center gap-4 my-6">
        <div className="h-px bg-[#ecedf3] flex-1" />
        <span className="text-[11px] text-[#a3a6b2]">or</span>
        <div className="h-px bg-[#ecedf3] flex-1" />
      </div>

      <button className="w-full h-[48px] sm:h-[50px] rounded-full border border-[#e7e8ee] flex items-center justify-center gap-3 text-[12px] hover:bg-[#fafafe] transition">
        <FcGoogle size={18} />
        Continue with Google
      </button>

      <p className="font-fa text-[12px] text-center text-[#84879a] mt-7">
        dont have an account
        <Link
          to="/register"
          className="text-[#6d5bf0] font-semibold mr-2 hover:underline"
        >
          creat an account
        </Link>
      </p>
    </div>

    {/* بخش تصویر - فقط از lg به بالا نمایش داده میشه */}
    <div className="hidden lg:flex w-1/2 relative bg-gradient-to-br from-[#f5f5ff] via-[#f8f9ff] to-[#eefcf9] overflow-hidden">
      <div
        className="absolute top-20 left-20 w-[120px] h-[120px] opacity-40"
        style={{
          backgroundImage: "radial-gradient(#6d5bf0 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="absolute w-[420px] h-[420px] rounded-full border border-[#6d5bf0]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="flex justify-center items-center w-full">
        <img
          src="/public/images/NotFound/ChatGPT Image Aug 11, 2026, 08_41_49 AM.png"
          alt=""
          className="max-w-full h-auto"
        />
      </div>
    </div>
  </div>
</div>
  );
};

export default LoginTemp;

