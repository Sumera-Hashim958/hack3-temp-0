import React from 'react'

const FreeDelivery = () => {
  return (
    <div className="w-full">
      {/* Footer Section */}
      <div className="bg-simsmokey px-4 md:px-8 py-8 md:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* First Column - Free Delivery */}
            <div className="text-center md:text-left">
              <div className="space-y-3">
                <h3 className="font-medium text-2xl md:text-[32px] leading-tight md:leading-[48px] font-poppins text-sblack">
                  Free Delivery
                </h3>
                <p className="font-normal text-base md:text-[20px] leading-relaxed md:leading-[30px] font-poppins text-greysame">
                  For all orders over $50, consectetur adipim scing elit.
                </p>
              </div>
            </div>

            {/* Second Column - 90 Days Return */}
            <div className="text-center md:text-left">
              <div className="space-y-3">
                <h3 className="font-medium text-2xl md:text-[32px] leading-tight md:leading-[48px] font-poppins text-sblack">
                  90 Days Return
                </h3>
                <p className="font-normal text-base md:text-[20px] leading-relaxed md:leading-[30px] font-poppins text-greysame">
                  If goods have problems, consectetur adipim scing elit.
                </p>
              </div>
            </div>

            {/* Third Column - Secure Payment */}
            <div className="text-center md:text-left">
              <div className="space-y-3">
                <h3 className="font-medium text-2xl md:text-[32px] leading-tight md:leading-[48px] font-poppins text-sblack">
                  Secure Payment
                </h3>
                <p className="font-normal text-base md:text-[20px] leading-relaxed md:leading-[30px] font-poppins text-greysame">
                  100% secure payment, consectetur adipim scing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreeDelivery