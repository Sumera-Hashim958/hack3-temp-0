import React from 'react'
import Image from 'next/image'
import FreeDelivery from '../components/FreeDelivery/freedelivery';

const cart = () => {
  return (
    <div className="min-h-[600px]">
    <div className="h-[200px] md:h-[316px] relative w-full bg-[url('/shop-bg.svg')] bg-cover bg-center flex items-center justify-center">
    {/* Content Overlay */}
    <div className="flex flex-col justify-center items-center">
        <Image src="./Meubel House_Logos-05.svg" alt="logo-image" width={50} height={50} className="items-center md:w-[77px] md:h-[77px]"/>
        <p className="text-[32px] md:text-[48px] leading-[40px] md:leading-[50px] font-medium font-poppings text-sblack mb-2">Cart</p>
        <div className="flex justify-center items-center gap-2 md:gap-4">
        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-medium font-poppins">Home</p>
        <Image src="./Vector.svg" alt="logo-image" width={6} height={6} className="md:w-[8px] md:h-[8px]"/>
        <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-[300px] font-poppins">Cart</p>
        </div>
      </div>
      </div>       

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row justify-between mt-5 md:mt-10 mx-4 md:mx-10">
        {/* Left Section */}
        <div className="w-full md:w-2/3">
          {/* Table Header */}
          <div className="grid grid-cols-4 mt-5 md:mt-10 w-full h-[60px] md:h-[72px] items-center bg-biscuitsame px-2 md:px-4">
            <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-left">Product</p> 
            <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-center">Price</p>
            <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-center">Quantity</p>
            <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-right">Subtotal</p>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-4 items-center h-[60px] md:h-[72px] mt-4 border-gray-300 px-2 md:px-4">
            <div className="flex items-center gap-1 md:gap-2">
              <Image src="./asg-sofa-cart.svg" alt="monitor-image" width={60} height={60} className="md:w-[80px] md:h-[80px]" />
              <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-greysame">Asgard Sofa</p>
            </div>
            <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] justify-self-center text-greysame">Rs.250,000.00</p>
            <Image src="./button cart.svg" alt="quantity-image" width={28} height={28}
              className="justify-self-center md:w-[32px] md:h-[32px]"
            />
            <p className="font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] justify-self-end">Rs.250,000.00</p>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 mb-10">
          <Image src="./box-cart.svg" alt="table-cart-image" width={300} height={300} className="mx-auto md:ml-10 md:w-[393px] md:h-[390px]"/>
        </div>
      </div>
      <FreeDelivery/>
    </div>
  )
}

export default cart