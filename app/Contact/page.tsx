import React from 'react'
import Image from 'next/image'
import FreeDelivery from '../components/FreeDelivery/freedelivery'

const Contact = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="h-[200px] md:h-[316px] relative w-full bg-[url('/shop-bg.svg')] bg-cover bg-center flex items-center justify-center">
        {/* Content Overlay */}
        <div className="flex flex-col justify-center items-center px-4 text-center">
          <Image 
            src="./Meubel House_Logos-05.svg" 
            alt="logo-image" 
            width={60} 
            height={60} 
            className="w-[50px] h-[50px] md:w-[77px] md:h-[77px]"
          />
          <p className="text-2xl md:text-[48px] leading-tight md:leading-[50px] font-medium font-poppins text-sblack mb-2">
            Contact
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-sm md:text-base leading-normal font-medium font-poppins">
              Home
            </p>
            <Image 
              src="./Vector.svg" 
              alt="logo-image" 
              width={6} 
              height={6} 
              className="w-[6px] h-[6px] md:w-[8px] md:h-[8px]"
            />
            <p className="text-sm md:text-base leading-normal font-light font-poppins">
              Contact
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <p className="font-poppins font-bold text-xl md:text-[36px] leading-tight md:leading-[54px] text-sblack">
            Get In Touch With Us
          </p>
          <p className="font-poppins font-normal text-sm md:text-base leading-relaxed text-greysame max-w-[544px] mx-auto mt-2">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="space-y-8">
              {/* Address */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Image 
                    src="./location-cont.svg" 
                    alt="loc-image" 
                    width={20} 
                    height={20} 
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  <p className="font-poppins font-semibold text-lg md:text-2xl">
                    Address
                  </p>
                </div>
                <p className="font-poppins text-sm md:text-base leading-relaxed ml-7">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Image 
                    src="./bxs_phone.svg" 
                    alt="phone-image" 
                    width={20} 
                    height={20} 
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  <p className="font-poppins font-semibold text-lg md:text-2xl">
                    Phone
                  </p>
                </div>
                <div className="ml-7">
                  <p className="font-poppins text-sm md:text-base leading-relaxed">
                    Mobile: +(84) 546-6789
                  </p>
                  <p className="font-poppins text-sm md:text-base leading-relaxed">
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>

              {/* Working Time */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Image 
                    src="./bi_clock-fill.svg" 
                    alt="clock-image" 
                    width={20} 
                    height={20} 
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                  <p className="font-poppins font-semibold text-lg md:text-2xl">
                    Working Time
                  </p>
                </div>
                <div className="ml-7">
                  <p className="font-poppins text-sm md:text-base leading-relaxed">
                    Monday-Friday: 9:00 - 22:00
                  </p>
                  <p className="font-poppins text-sm md:text-base leading-relaxed">
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm md:text-base font-medium text-sblack font-poppins">
                  Your Name
                </label>
                <input 
                  id="name" 
                  type="text" 
                  placeholder="abc" 
                  className="w-full h-[45px] md:h-[75px] px-4 border border-gray-300 rounded-[10px] shadow-sm focus:ring-1 focus:ring-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm md:text-base font-medium text-sblack font-poppins">
                  Email Address
                </label>
                <input 
                  id="email" 
                  type="email" 
                  placeholder="Abc@def.com" 
                  className="w-full h-[45px] md:h-[75px] px-4 border border-gray-300 rounded-[10px] shadow-sm focus:ring-1 focus:ring-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm md:text-base font-medium text-sblack font-poppins">
                  Subject
                </label>
                <input 
                  id="subject" 
                  type="text" 
                  placeholder="This is optional" 
                  className="w-full h-[45px] md:h-[75px] px-4 border border-gray-300 rounded-[10px] shadow-sm focus:ring-1 focus:ring-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm md:text-base font-medium text-sblack font-poppins">
                  Message
                </label>
                <textarea 
                  id="message" 
                  placeholder="Hi! i'd like to ask about" 
                  className="w-full h-[75px] md:h-[75px] px-4 py-2 border border-gray-300 rounded-[10px] shadow-sm focus:ring-1 focus:ring-gray-300 resize-none"
                />
              </div>

              <button className="w-full md:w-[237px] h-[48px] border-2 rounded-[15px] border-greysame font-normal text-sm md:text-base hover:bg-greysame hover:text-white transition-colors duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <FreeDelivery/>
    </div>
  )
}

export default Contact
