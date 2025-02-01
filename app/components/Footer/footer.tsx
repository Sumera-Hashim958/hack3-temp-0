import React from 'react'
import Image from "next/image"

const Footer = () => {
  return (
    <div className="min-h-[400px] md:h-[555px] w-full">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Address Section */}
          <div className="w-full md:w-[285px]">
            <p className="font-normal text-base md:text-[20px] leading-normal md:leading-6 text-greysame">
              400 University Drive Suite 200 Coral Gables,
              FL 33134 USA
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full md:ml-[135px]">
            {/* Links Column */}
            <div className="space-y-6 md:space-y-8">
              <p className="font-medium text-base md:text-[16px] leading-normal md:leading-[24px] text-greysame">
                Links
              </p>
              <nav className="space-y-4 md:space-y-8">
                <p className="font-medium text-base md:text-[16px] leading-normal md:leading-[24px] text-sblack">
                  Home
                </p>
                <p className="font-normal text-base md:text-[16px] leading-normal md:leading-[24px] text-sblack">
                  Shop
                </p>
                <p className="font-normal text-base md:text-[16px] leading-normal md:leading-[24px] text-sblack">
                  About
                </p>
                <p className="font-normal text-base md:text-[16px] leading-normal md:leading-[24px] text-sblack">
                  Contact
                </p>
              </nav>
            </div>

            {/* Help Column */}
            <div className="space-y-6 md:space-y-8">
              <p className="font-medium text-base md:text-[16px] leading-normal md:leading-[24px] text-greysame">
                Help
              </p>
              <nav className="space-y-4 md:space-y-8">
                <p className="font-medium text-base md:text-[16px] leading-normal md:leading-[24px] text-sblack">
                  Payment Options
                </p>
                <p className="font-normal text-base md:text-[16px] leading-normal md:leading-[24px] text-sblack">
                  Returns
                </p>
                <p className="font-normal text-base md:text-[16px] leading-normal md:leading-[24px] text-sblack">
                  Privacy Policies
                </p>
              </nav>
            </div>

            {/* Newsletter Column */}
            <div className="col-span-2 md:col-span-1 space-y-6 md:space-y-8">
              <p className="font-medium text-base md:text-[16px] leading-normal md:leading-[24px] text-greysame font-poppins">
                Newsletter
              </p>
              <div className="space-y-4 md:space-y-8">
                <p className="font-medium text-base md:text-[16px] leading-normal md:leading-[24px] text-greysame font-poppins">
                  Enter Your Email Address
                </p>
                <button className="font-medium text-base md:text-[16px] leading-normal md:leading-[24px] text-sblack font-poppins">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 md:mt-10">
          {/* Divider Line */}
          <div className="w-full">
            <Image 
              src="Line 4.svg" 
              alt="line-image" 
              width={1240} 
              height={2}
              className="w-full"
            />
          </div>
          
          {/* Copyright Text */}
          <p className="font-normal text-sm md:text-[16px] leading-normal md:leading-[24px] text-sblack mt-4 md:mt-8 text-center md:text-left">
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
