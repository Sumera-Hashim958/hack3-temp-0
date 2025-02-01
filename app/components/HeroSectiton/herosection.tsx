import React from 'react'
import Image from 'next/image'

const homePage = () => {
  return (
    <div className="min-h-screen bg-biscuit px-4 md:px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start mt-10 md:mt-40 md:ml-[150px] space-y-4">
      <p className="text-3xl md:text-5xl lg:text-[64px] leading-tight md:leading-[96px] font-medium font-poppins text-center md:text-left max-w-[440px]">Rocket Single Seater</p>
      <p className="text-xl md:text-2xl lg:text-[24px] leading-relaxed md:leading-[36px] font-medium font-poppins">Shop Now</p>
      <Image src="Line 1.svg" alt="line image" width={121} height={70} className="w-auto h-auto"/>
      </div>
      <div className="mt-8 md:mt-0">
      <Image src={"/Rocket single seater 1.png"} alt="next-image" width={863} height={900}/>
      </div>
      </div>
    </div>
  )
}

export default homePage
