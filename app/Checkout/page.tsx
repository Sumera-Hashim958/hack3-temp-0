import React from 'react'
import Image from 'next/image'
import FreeDelivery from "../components/FreeDelivery/freedelivery";

const Checkout = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="h-[200px] md:h-[316px] relative w-full bg-[url('/shop-bg.svg')] bg-cover bg-center flex items-center justify-center">
        <div className="flex flex-col justify-center items-center px-4">
          <Image 
            src="./Meubel House_Logos-05.svg" 
            alt="logo-image" 
            width={60} 
            height={60} 
            className="w-[50px] h-[50px] md:w-[77px] md:h-[77px]"
          />
          <p className="text-2xl md:text-[48px] leading-tight md:leading-[50px] font-medium font-poppins text-sblack mb-2">
            Checkout
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
            <p className="text-sm md:text-base leading-normal font-light font-poppins">Checkout</p>
          </div>
        </div>
      </div>

      {/* Form container */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-10">
          {/* Left Section: Form */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-6">
              <h2 className="text-xl md:text-[24px] font-semibold text-sblack font-poppins">
                Billing Details
              </h2>

              {/* Name Fields */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2 space-y-2">
                  <label className="text-sm md:text-base font-medium text-sblack font-poppins">
                    First Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full h-[45px] md:h-[75px] px-4 border border-gray-300 rounded-[10px] shadow-sm"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-2">
                  <label className="text-sm md:text-base font-medium text-sblack font-poppins">
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full h-[45px] md:h-[75px] px-4 border border-gray-300 rounded-[10px] shadow-sm"
                  />
                </div>
              </div>

              {/* Other Form Fields */}
              {['Company Name (Optional)', 'Country / Region', 'Street Address', 
                'Town / City', 'Province', 'Zip Code', 'Phone', 'Email Address', 
                'Additional Information'].map((label, index) => (
                <div key={index} className="space-y-2">
                  <label className="text-sm md:text-base font-medium text-sblack font-poppins">
                    {label}
                  </label>
                  <input 
                    type={label === 'Email Address' ? 'email' : 'text'}
                    className="w-full h-[45px] md:h-[75px] px-4 border border-gray-300 rounded-[10px] shadow-sm"
                  />
                </div>
              ))}
            </form>
          </div>

          {/* Right Section: Order Summary */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="space-y-6">
              {/* Product Summary */}
              <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-8">
                <div className="space-y-4">
                  <h2 className="font-bold font-poppins text-xl md:text-[24px] leading-tight text-sblack">
                    Product
                  </h2>
                  <p className="font-poppins text-sm md:text-base text-greysame">
                    Asgard Sofa <span className="text-sblack">X 1</span>
                  </p>
                  <p className="font-poppins text-sm md:text-base text-sblack">Subtotal</p>
                  <p className="font-poppins text-sm md:text-base text-sblack">Total</p>
                </div>

                <div className="space-y-4 text-right">
                  <h2 className="font-bold font-poppins text-xl md:text-[24px] leading-tight text-sblack">
                    Subtotal
                  </h2>
                  <p className="font-poppins text-sm md:text-base text-sblack">Rs. 250,000.00</p>
                  <p className="font-poppins text-sm md:text-base text-sblack">Rs. 250,000.00</p>
                  <p className="font-poppins text-xl md:text-[24px] text-orange-500 font-bold">
                    Rs. 250,000.00
                  </p>
                </div>
              </div>

              {/* Payment Options */}
              <div className="space-y-4">
                {['Direct Bank Transfer', 'Direct Bank Transfer', 'Cash On Delivery'].map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Image 
                      src="./black-dot-asg.svg" 
                      alt="payment-option" 
                      width={14} 
                      height={14}
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                    />
                    <p className="text-sm md:text-base text-greysame font-poppins">
                      {option}
                    </p>
                  </div>
                ))}
              </div>

              {/* Information Text */}
              <div className="space-y-4">
                <p className="text-sm md:text-base text-greysame font-light text-justify">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
                <p className="text-sm md:text-base text-sblack font-light text-justify">
                  Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                </p>
              </div>

              {/* Place Order Button */}
              <div className="flex justify-center">
                <button className="w-full md:w-[215px] h-[50px] md:h-[64px] border-2 rounded-[15px] border-sblack font-normal text-base md:text-[20px] leading-normal hover:bg-sblack hover:text-white transition-colors duration-300">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FreeDelivery/>
    </div>
  )
}

export default Checkout
