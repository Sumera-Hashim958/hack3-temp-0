import React from 'react'
import Image from 'next/image'

const productdetail = () => {
  return (
    <div className="h-[2200px] bg-swhite">
        <div className="flex ml-36 mt-8 gap-8">
      <p className="font-normal text-[16px] leading-[24px] text-greysame font-poppins">Home</p>
      <Image src="./Vector.svg" alt="vector-image" width={8} height={8}/>
      <p className="font-normal text-[16px] leading-[24px] text-greysame font-poppins">Shop</p>
      <p className="font-normal text-[16px] leading-[24px] text-greysame font-poppins">|</p>
      <p className="font-normal text-[16px] leading-[24px] text-sblack font-poppins">Asgard Sofa</p>
      </div>
      <div className="flex justify-center gap-4 mt-10">
        <div className="">
            <Image src="./asg-sofa1.svg" alt="product-detail" width={100} height={80} className="mb-8"/>
            <Image src="./asg-sofa2.svg" alt="product-detail" width={100} height={80} className="mb-8"/>
            <Image src="./asg-sofa3.svg" alt="product-detail" width={100} height={80} className="mb-8"/>
            <Image src="./asg-sofa4.svg" alt="product-detail" width={100} height={80} className="mb-8"/>
        </div>
        <div className="ml-0">
        <Image src="./big-sofa.svg" alt="big-sofa-image" width={500} height={600}/>
        </div>
        <div className="box">
        <p className="font-semibold text-[24px] leading-[24px] text-sblack">Asgard Sofa</p>
        <p className="font-medium text-[24px] leading-[36px] text-greysame font-poppins mt-4">Rs.250,000.00</p>
        <div className="flex">
        <Image src="/star-asg.svg" alt="big-gampad-image" width={124} height={20}/>
        <p className="font-medium text-[24px] leading-[36px] text-greysame font-poppins ml-4">|<span className="font-normal text-[13px] leading[19.5] ml-4">5 Customer Review</span></p>
        </div>
        <p className="font-normal text-[14px] leading-[21px] text-sblack mt-4 w-[373px] h-[63px] text-justify">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
        <p className="font-normal text-[14px] leading-[21px] text-greysame font-poppins mt-10">Size</p>
        <div className="flex gap-4 mt-4">
        <button className="w-8 h-8 rounded-[4px] border-sblack opacity-50 border-2 bg-biscuit">L</button>
        <button className="w-8 h-8 rounded-[4px] border-sblack opacity-50 border-2">XL</button>
        <button className="w-8 h-8 rounded-[4px] border-sblack opacity-50 border-2">XS</button>
        </div>
        <p className="font-normal text-[14px] leading-[21px] text-greysame font-poppins mt-4">Colors</p>
        <div className="flex gap-4 mt-4">
        <div className="w-[30px] h-[30px] rounded-full bg-blue"></div>
        <div className="w-[30px] h-[30px] rounded-full bg-sblack"></div>
        <div className="w-[30px] h-[30px] rounded-full bg-brown"></div>
        </div>
        <div className="flex gap-6 mt-6">
        <button className="w-[123px] h-[64px] rounded-[10px] border-greysame border-2 font-poppins text-[16px] leading-[24px] font-medium">-<span className="ml-8">1</span><span className="ml-8">+</span></button>
        <button className="w-[215px] h-[64px] rounded-[10px] border-sblack border-2 font-poppins text-[20px] leading-[30px] font-normal">Add To Cart</button>
        </div>
        <div className="flex gap-4">
        </div>
        </div>
    </div>
    <div className="font-normal text-greysame font-poppins text-[16px] leading-[24px] ml-[790px]">
        <p className="mb-4">SKU<span className="ml-8">:</span><span className="ml-8">SS001</span></p>
        <p className="mb-4">Category<span className="ml-8">:</span><span className="ml-8">Sofas</span></p>
        <p className="mb-4">Tags<span className="ml-8">:</span><span className="ml-8">Sofa, Chair, HOme, Shop</span></p>
        <p className="mb-4">Share<span className="ml-8">:</span></p>
    </div>
    {/*Description*/}
    <div className="min-h-screen w-full bg-swhite px-4 md:px-8 py-8 md:py-12">
          {/* Navigation Tabs */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8 md:mb-12">
            <p className="text-lg md:text-[24px] leading-normal md:leading-[36px] font-normal font-poppins text-sblack">
              Description
            </p>
            <p className="text-lg md:text-[24px] leading-normal md:leading-[36px] font-normal font-poppins text-greysame">
              Additional Information
            </p>
            <p className="text-lg md:text-[24px] leading-normal md:leading-[36px] font-normal font-poppins text-greysame">
              Reviews[5]
            </p>
          </div>
    
          {/* Description Text */}
          <div className="container mx-auto max-w-4xl space-y-4 md:space-y-6">
            <div className="text-sm md:text-base leading-relaxed md:leading-[24px] text-greysame">
              <p className="text-justify">
                Embodying the raw, wayward spirit of rock and roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              </p>
            </div>
    
            <div className="text-sm md:text-base leading-relaxed md:leading-[24px] text-greysame">
              <p className="text-justify">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
          </div>
    
          {/* Images Section */}
          <div className="mt-8 md:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="relative w-full aspect-[605/348]">
                <Image 
                  src="./white-sofa-asg.svg" 
                  alt="white-asg-image" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="relative w-full aspect-[605/348]">
                <Image 
                  src="./white-sofa-asg.svg" 
                  alt="white-asg-image" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
    {/*Toppics*/}
    <div className="min-h-[700px] bg-swhite px-4 md:px-8 lg:px-0">
            {/* TopPics Title*/}
            <div className="text-center mt-8">
              <p className="font-medium text-[28px] md:text-[32px] lg:text-[36px] leading-[46px] lg:leading-[56px] font-poppins">
                Related Products
              </p>
              {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:mt-16 lg:mt-8 max-w-7xl mx-auto">
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
                  <p className="font-normal text-[16px] leading-[24px] font-poppins text-sblack w-[212px]">Granite dining table with dining chair</p>
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
    </div>
    
  );
};

export default productdetail
