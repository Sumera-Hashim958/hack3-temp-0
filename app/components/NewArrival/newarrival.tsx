import React from 'react'
import Image from 'next/image'

const NewArrival = () => {
  return (
    <div className="min-h-[400px] md:h-[800px] w-full bg-biscuitsame">
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Section */}
        <div className="w-full md:w-2/3 relative h-[300px] md:h-auto">
          <Image 
            src="/Asgaard sofa 1.svg" 
            alt="sofa-image" 
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center px-4 md:px-6 py-8 md:py-0 space-y-4 md:space-y-6">
          <p className="text-xl md:text-[24px] leading-normal md:leading-[36px] font-medium font-poppins text-center">
            New Arrival
          </p>
          <h2 className="text-3xl md:text-[48px] leading-tight md:leading-[72px] font-bold font-poppins text-center">
            Asgaard Sofa
          </h2>
          <button className="w-full max-w-[255px] h-[48px] md:h-[64px] border border-sblack font-normal text-base md:text-[20px] leading-normal md:leading-[30px] hover:bg-sblack hover:text-white transition-colors duration-300 rounded-lg">
            Order Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewArrival