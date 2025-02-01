import React from 'react'
import Image from 'next/image'

const OurBlogs = () => {
  return (
    <div className="min-h-screen w-full bg-swhite px-4 md:px-8 py-8 md:py-12">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-medium text-2xl md:text-[36px] leading-tight md:leading-[54px] font-poppins text-sblack">
          Our Blogs
        </h2>
        <p className="font-medium text-sm md:text-base leading-relaxed font-poppins text-greysame mt-2">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Blog Card 1 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-square md:aspect-[1/1]">
              <Image 
                src="/keyboard-blog.svg" 
                alt="blog-image" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 md:mt-6 text-center space-y-3">
              <h3 className="font-normal text-lg md:text-[20px] leading-tight md:leading-[30px] font-poppins text-sblack">
                Going all-in with millennial design
              </h3>
              <p className="font-medium text-xl md:text-[24px] leading-normal md:leading-[36px] font-poppins text-sblack">
                Read More
              </p>
              <div className="flex flex-col items-center space-y-2">
                <Image 
                  src="/line-blog.svg" 
                  alt="line" 
                  width={115} 
                  height={2}
                  className="w-[115px]"
                />
                <Image 
                  src="/clock-blog.svg" 
                  alt="clock" 
                  width={223} 
                  height={24}
                  className="w-[180px] md:w-[223px] h-auto"
                />
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-square md:aspect-[1/1]">
              <Image 
                src="/laptop-blog.svg" 
                alt="blog-image" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 md:mt-6 text-center space-y-3">
              <h3 className="font-normal text-lg md:text-[20px] leading-tight md:leading-[30px] font-poppins text-sblack">
                Going all-in with millennial design
              </h3>
              <p className="font-medium text-xl md:text-[24px] leading-normal md:leading-[36px] font-poppins text-sblack">
                Read More
              </p>
              <div className="flex flex-col items-center space-y-2">
                <Image 
                  src="/line-blog.svg" 
                  alt="line" 
                  width={115} 
                  height={2}
                  className="w-[115px]"
                />
                <Image 
                  src="/clock-blog.svg" 
                  alt="clock" 
                  width={223} 
                  height={24}
                  className="w-[180px] md:w-[223px] h-auto"
                />
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="flex flex-col">
            <div className="relative w-full aspect-square md:aspect-[1/1]">
              <Image 
                src="/lcd-blog.svg" 
                alt="blog-image" 
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="mt-4 md:mt-6 text-center space-y-3">
              <h3 className="font-normal text-lg md:text-[20px] leading-tight md:leading-[30px] font-poppins text-sblack">
                Going all-in with millennial design
              </h3>
              <p className="font-medium text-xl md:text-[24px] leading-normal md:leading-[36px] font-poppins text-sblack">
                Read More
              </p>
              <div className="flex flex-col items-center space-y-2">
                <Image 
                  src="/line-blog.svg" 
                  alt="line" 
                  width={115} 
                  height={2}
                  className="w-[115px]"
                />
                <Image 
                  src="/clock-blog.svg" 
                  alt="clock" 
                  width={223} 
                  height={24}
                  className="w-[180px] md:w-[223px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View All Post Section */}
      <div className="text-center mt-8 md:mt-12 space-y-2">
        <p className="font-medium text-lg md:text-[20px] leading-normal md:leading-[36px] font-poppins text-sblack">
          View All Post
        </p>
        <div className="flex justify-center">
          <Image 
            src="/line-blog.svg" 
            alt="line" 
            width={115} 
            height={2}
            className="w-[115px]"
          />
        </div>
      </div>
    </div>
  )
}

export default OurBlogs
