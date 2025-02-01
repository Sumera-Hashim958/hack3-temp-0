import React from 'react'
import Image from 'next/image'
import FreeDelivery from '../components/FreeDelivery/freedelivery';

const Shop = () => {
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
            Shop
          </p>
          <div className="flex justify-center items-center gap-2 md:gap-4">
            <p className="text-sm md:text-base leading-normal font-medium font-poppins">Home</p>
            <Image 
              src="./Vector.svg" 
              alt="logo-image" 
              width={6} 
              height={6}
              className="w-[6px] h-[6px] md:w-[8px] md:h-[8px]"
            />
            <p className="text-sm md:text-base leading-normal font-light font-poppins">Shop</p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-simsmokey mt-4 md:mt-10 p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-0">
          {/* Left Section */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <Image 
              src="/vector-shop.svg" 
              alt="filter-icon" 
              width={20} 
              height={20}
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <p className="text-base md:text-[20px] leading-normal font-normal font-poppins">Filter</p>
            <Image 
              src="/dots-shop.svg" 
              alt="dots" 
              width={20} 
              height={20}
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <Image 
              src="/bi_view-list.svg" 
              alt="view" 
              width={20} 
              height={20}
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span className="hidden md:block text-[20px] leading-[30px] font-normal font-poppins">|</span>
            <p className="text-sm md:text-base leading-normal font-normal font-poppins">
              Showing 1–16 of 32 results
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 md:gap-4">
            <p className="text-base md:text-[20px] leading-normal font-normal font-poppins">Show</p>
            <button className="w-[45px] md:w-[55px] h-[45px] md:h-[55px] bg-white text-base md:text-[20px] leading-normal font-poppins text-black border border-gray-300">
              16
            </button>
            <p className="text-base md:text-[20px] leading-normal font-normal font-poppins">Sort by</p>
            <button className="w-[140px] md:w-[188px] h-[45px] md:h-[55px] bg-white text-base md:text-[20px] leading-normal font-poppins text-black border border-gray-300">
              Default
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Product Cards */}
            <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image 
                  src={`/trent-sofa-third.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"/>
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack">
                  Trenton modular sofa_3</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                  Rs.25,000.00</p>
              </div>
            </div>
            {/*end*/}
            {/*first Row*/}
              {/*second image*/}
              <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image src={`/2nd-pic-toppick.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack w-[212px]">
                Granite dining table with dining chair</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                  Rs.25,000.00</p>
              </div>
            </div>
            
            {/*end*/}
            {/*first Row*/}
              {/*third image*/}
              <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image src={`/bar-table-third.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack w-[180px]">
                Outdoor bar table and stool</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                  Rs.25,000.00</p>
              </div>
            </div>
            {/*end*/}
            {/*first Row*/}
              {/*fourth image*/}
              <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image src={`/plain-mirror-third.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack w-[180px]">
                Plain console with teak mirror</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                  Rs.25,000.00</p>
              </div>
            </div>
            {/*end*/}

        </div>
      </div>
      {/* Product Grid */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Product Cards */}
            <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image 
                  src={`/grain-coffee-tab-shop.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"/>
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack">
                Grain coffee table</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                Rs. 15,000.00</p>
              </div>
            </div>
            {/*end*/}
            {/*second Row*/}
              {/*second image*/}
              <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image src={`/kent-coffee-tab-shop.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack w-[212px]">
                Kent coffee table</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                Rs. 225,000.00</p>
              </div>
            </div>
            
            {/*end*/}
            {/*second Row*/}
              {/*third image*/}
              <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image src={`/round-tab-shop.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack w-[180px]">
                Round coffee table_color 2</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                Rs. 251,000.00</p>
              </div>
            </div>
            {/*end*/}
            {/*second Row*/}
              {/*fourth image*/}
              <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image src={`/drawerd-tab-shop.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack w-[180px]">
                Reclaimed teak coffee table</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                Rs. 25,200.00</p>
              </div>
            </div>
            {/*end*/}

        </div>
      </div>
      {/* Product Grid */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Product Cards */}
            <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image 
                  src={`/thin-tab.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"/>
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack">
                Plain console_</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                Rs. 258,200.00</p>
              </div>
            </div>
            {/*end*/}
            {/*third Row*/}
              {/*second image*/}
              <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image src={`/Reclaimed teak Sideboard 1.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack w-[212px]">
                Reclaimed teak Sideboard</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                Rs. 20,000.00</p>
              </div>
            </div>
            
            {/*end*/}
            {/*third Row*/}
              {/*third image*/}
              <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image src={`/Four-seater.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack w-[180px]">
                SJP_0825 </p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                Rs. 200,000.00</p>
              </div>
            </div>
            {/*end*/}
            {/*third Row*/}
              {/*fourth image*/}
              <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image src={`/two-seater.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack w-[180px]">
                Bella chair and table</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                Rs. 100,000.00</p>
              </div>
            </div>
            {/*end*/}

        </div>
      </div>
      {/* Product Grid */}
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Product Cards */}
            <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image 
                  src={`/side-table-shop.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"/>
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack">
                Granite square side table</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                Rs. 258,800.00</p>
              </div>
            </div>
            {/*end*/}
            {/*fourth Row*/}
              {/*second image*/}
              <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image src={`/asgardsofa-shop.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack w-[212px]">
                Asgaard sofa</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                  Rs.25,000.00</p>
              </div>
            </div>
            
            {/*end*/}
            {/*fourth Row*/}
              {/*third image*/}
              <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image src={`/maya-three-seater-sofa.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack w-[180px]">
                Maya sofa three seater</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                  Rs.115,000.00</p>
              </div>
            </div>
            {/*end*/}
            {/*fourth Row*/}
              {/*fourth image*/}
              <div className="flex flex-col space-y-2">
              <div className="relative w-full aspect-square">
                <Image src={`/outdoor-sofa.svg`} alt="product-image" layout="fill" objectFit="cover" className="rounded-lg"
                />
              </div>
              <div className="space-y-1">
                <p className="font-normal text-sm md:text-base leading-normal font-poppins text-sblack w-[180px]">
                Outdoor sofa set</p>
                <p className="font-medium text-lg md:text-2xl leading-normal font-poppins text-sblack">
                  Rs.244,000.00</p>
              </div>
            </div>
            {/*end*/}

        </div>
      </div>
      <div className="flex justify-center items-center mb-10 gap-10 mt-20">
        <button className="w-[60px] h-[60px] rounded-md bg-biscuit font-normal font-poppins text-[20px]">1</button>
        <button className="w-[60px] h-[60px] rounded-md bg-biscuitsame font-normal font-poppins text-[20px]">2</button>
        <button className="w-[60px] h-[60px] rounded-md bg-biscuitsame font-normal font-poppins text-[20px]">3</button>
        <button className="w-[60px] h-[60px] rounded-md bg-biscuitsame font-normal font-poppins text-[20px]">Next</button>
      </div>

      <FreeDelivery/>
    </div>
  )
}

export default Shop
