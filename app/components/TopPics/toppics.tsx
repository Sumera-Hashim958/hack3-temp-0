import React from 'react'
import Image from 'next/image'

const topPics = () => {
  return (
    <div className="min-h-[700px] bg-swhite px-4 md:px-8 lg:px-0">
        {/* TopPics Title*/}
        <div className="text-center mt-8">
          <p className="font-medium text-[28px] md:text-[32px] lg:text-[36px] leading-[46px] lg:leading-[56px] font-poppins">
            Top Pics For You
          </p>
          <p className="font-medium text-[14px] md:text-[15px] lg:text-[16px] leading-6 font-poppins text-greysame px-4 md:px-8 lg:px-0">
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16 lg:mt-20 max-w-7xl mx-auto">
          {/* First Product */}
          <div className="w-full max-w-[287px] mx-auto">
            <Image src="/trent-sofa-third.svg" alt="course-image" width={287} height={287} className="w-full" />
            <div className="text-left mt-4">
              <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack">Trenton modular sofa_3</p>
              <p className="font-medium text-[20px] md:text-[22px] lg:text-[24px] leading-[32px] lg:leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
            </div>
          </div>
          {/* Second Product */}
          <div className="w-full max-w-[287px] mx-auto">
            <Image src="/2nd-pic-toppick.svg" alt="course-image" width={287} height={287} className="w-full" />
            <div className="text-left mt-4">
              <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack">Granite dining table with dining chair</p>
              <p className="font-medium text-[20px] md:text-[22px] lg:text-[24px] leading-[32px] lg:leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
            </div>
          </div>
          {/* Third Product */}
          <div className="w-full max-w-[287px] mx-auto">
            <Image src="/bar-table-third.svg" alt="course-image" width={287} height={287} className="w-full" />
            <div className="text-left mt-4">
              <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack">Outdoor bar table and stool</p>
              <p className="font-medium text-[20px] md:text-[22px] lg:text-[24px] leading-[32px] lg:leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
            </div>
          </div>
          {/* Fourth Product */}
          <div className="w-full max-w-[287px] mx-auto">
            <Image src="/plain-mirror-third.svg" alt="course-image" width={287} height={287} className="w-full" />
            <div className="text-left mt-4">
              <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack">Plain console with teak mirror</p>
              <p className="font-medium text-[20px] md:text-[22px] lg:text-[24px] leading-[32px] lg:leading-[36px] font-poppins text-sblack">Rs.25,000.00</p>
            </div>
          </div>
        </div>
        </div>
        <div className="text-center mt-12 md:mt-14 lg:mt-16">
          <p className="font-medium text-[18px] md:text-[19px] lg:text-[20px] leading-[32px] lg:leading-[36px] font-poppins text-sblack">View More</p>
        </div>
        <div className="flex flex-col items-center mt-2">
          <Image src="/line-blog.svg" alt="course-image" width={115} height={2} />
        </div>
    </div>
  )
}

export default topPics