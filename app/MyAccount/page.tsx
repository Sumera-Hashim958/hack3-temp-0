import React from 'react'
import Image from 'next/image'
import FreeDelivery from '../components/FreeDelivery/freedelivery'

const MyAccount = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="h-[200px] md:h-[316px] relative w-full bg-[url('/shop-bg.svg')] bg-cover bg-center flex items-center justify-center">
        <div className="flex flex-col items-center justify-center px-4">
          <Image 
            src="./Meubel House_Logos-05.svg" 
            alt="logo-image" 
            width={60} 
            height={60}
            className="w-[50px] h-[50px] md:w-[77px] md:h-[77px]"
          />
          <p className="text-2xl md:text-[48px] leading-tight md:leading-[50px] font-medium font-poppins text-sblack mb-2">
            My Account
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-sm md:text-base leading-normal font-medium font-poppins">Home</p>
            <Image 
              src="./Vector.svg" 
              alt="logo-image" 
              width={6} 
              height={6}
              className="w-[6px] h-[6px] md:w-[8px] md:h-[8px]"
            />
            <p className="text-sm md:text-base leading-normal font-light font-poppins">My Account</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-10">
          {/* Login Form */}
          <form className="w-full lg:w-[423px] space-y-6">
            <h2 className="text-xl md:text-[24px] font-semibold text-sblack font-poppins">
              Login
            </h2>

            {/* Username/Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="username-left"
                className="block text-sm md:text-base font-medium text-sblack font-poppins"
              >
                Username or Email Address
              </label>
              <input
                id="username-left"
                type="text"
                className="w-full h-[45px] md:h-[75px] px-4 border border-gray-300 rounded-[10px] shadow-sm focus:ring-1 focus:ring-gray-300"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password-left"
                className="block text-sm md:text-base font-medium text-sblack font-poppins"
              >
                Password
              </label>
              <input
                id="password-left"
                type="password"
                className="w-full h-[45px] md:h-[75px] px-4 border border-gray-300 rounded-[10px] shadow-sm focus:ring-1 focus:ring-gray-300"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center gap-2">
              <input
                id="remember-left"
                type="checkbox"
                className="w-4 h-4 md:w-5 md:h-5 text-blue-500 border-greysame rounded focus:ring-2"
              />
              <label
                htmlFor="remember-left"
                className="text-sm md:text-base font-medium text-sblack font-poppins"
              >
                Remember Me
              </label>
            </div>

            {/* Login Button and Lost Password */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <button className="w-full md:w-[215px] h-[48px] md:h-[64px] border-2 rounded-[15px] border-sblack font-normal text-base md:text-[20px] leading-normal hover:bg-sblack hover:text-white transition-colors duration-300">
                Log In
              </button>
              <p className="text-sm md:text-base font-poppins text-greysame">
                Lost Your Password?
              </p>
            </div>
          </form>

          {/* Register Form */}
          <form className="w-full lg:w-[423px] space-y-6">
            <h2 className="text-xl md:text-[24px] font-semibold text-sblack font-poppins">
              Register
            </h2>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email-right"
                className="block text-sm md:text-base font-medium text-sblack font-poppins"
              >
                Email Address
              </label>
              <input
                id="email-right"
                type="email"
                className="w-full h-[45px] md:h-[75px] px-4 border border-gray-300 rounded-[10px] shadow-sm focus:ring-1 focus:ring-gray-300"
              />
            </div>

            {/* Information Text */}
            <div className="space-y-4">
              <p className="text-sm md:text-base font-light text-greysame">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-sm md:text-base font-light text-greysame">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                <span className="text-sblack font-semibold">privacy policy</span>
              </p>
            </div>

            {/* Register Button */}
            <button className="w-full md:w-[215px] h-[48px] md:h-[64px] border-2 rounded-[15px] border-sblack font-normal text-base md:text-[20px] leading-normal hover:bg-sblack hover:text-white transition-colors duration-300 mt-6">
              Register
            </button>
          </form>
        </div>
      </div>
      <FreeDelivery/>
    </div>
  )
}

export default MyAccount
