import React from 'react'
import Image from 'next/image'

const homePage = () => {
  return (
    <div className="min-h-[400px] md:h-[800px] bg-simsmokey">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start mt-10 md:mt-40">
          <Image 
            src={"/side-table-third.svg"} 
            alt="next-image" 
            width={605} 
            height={562}
            className="w-[300px] md:w-[605px] h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-40 flex justify-center md:justify-start">
          <Image 
            src={"/side-sofa-third.svg"} 
            alt="next-image" 
            width={605} 
            height={562}
            className="w-[300px] md:w-[605px] h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default homePage