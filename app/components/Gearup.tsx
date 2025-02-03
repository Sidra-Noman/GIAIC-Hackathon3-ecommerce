import React from 'react'
import Image from 'next/image'

const Gearup = () => {
  return (
    <div className="pb-6 sm:pb-12">
    {/* Best Of Air Max start */}
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-12">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <h3 className="text-[18px] md:text-[23px] font-medium">
        Gear Up
        </h3>

        <div className="flex gap-2 mt-2 md:mt-0 pr-[58px]">
          <p className="text-[14px] md:text-[15px] pt-1 md:pt-4 pr-2">Shop Men's</p>
          <Image
            src="/images/Frame (1).png"
            alt="frame1"
            width={32}
            height={32}
            className="w-8  h-8 md:w-12 md:h-12"
          />
          <Image
            src="/images/Frame (2).png"
            alt="frame2"
            width={32}
            height={32}
                className="w-8  h-8 md:w-12 md:h-12"
          />
        </div>



        <div className="flex gap-2 mt-2 md:mt-0 pr-[58px]">
          <p className="text-[14px] md:text-[15px] pt-1 md:pt-4 pr-2">Shop Women's</p>
          <Image
            src="/images/Frame (1).png"
            alt="frame1"
            width={32}
            height={32}
            className="w-8  h-8 md:w-12 md:h-12"
          />
          <Image
            src="/images/Frame (2).png"
            alt="frame2"
            width={32}
            height={32}
                className="w-8  h-8 md:w-12 md:h-12"
          />
        </div>
      </div>
    </div>
    {/* Best Of Air Max end */}

{/* Products Section */}
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Image 1 start */}
        <div className="w-full">
         <Image
            src="/images/Image (5).png"
            alt="image 1"
            width={441.36}
            height={441.36}
            className="w-full sm:h-auto " 
          />
          <div className="flex justify-between pt-4">
            <p className="text-[14px] md:text-[15px] font-medium">
            Nike Dri-FIT ADV TechKnit Ultra
            </p>
            <p className="text-[14px] md:text-[15px] font-medium">₹ 3 895</p>
          </div>
          <p className="text-[14px] md:text-[15px] pt-2 text-[#757575] w-[180px]">
          Men's Short-Sleeve Running Top
          </p>
        </div>
      
        {/* Image 2 start */}
        <div className="w-full ">
          <Image
            src="/images/Image (6).png"
            alt="image 2"
            width={441.36}
            height={441.36}
            className="w-full h-auto"
          />
          <div className="flex justify-between pt-4">
            <p className="text-[14px] md:text-[15px] font-medium">
            Nike Dri-FIT Challenger
            </p>
            <p className="text-[14px] md:text-[15px] font-medium">
            ₹ 2 495
            </p>
          </div>
          <p className="text-[14px] md:text-[15px] pt-2 text-[#757575] w-[240px]">
          Men's 18cm (approx.) 2-in-1 Versatile Shorts
          </p>
        </div>
        
        {/* Image 3 start */}
        <div className="w-full">
          <Image
            src="/images/Image (7).png"
            alt="image 1"
            width={441.36}
            height={441.36}
            className="w-full h-auto"
          />
          <div className="flex justify-between pt-4">
            <p className="text-[14px] md:text-[15px] font-medium">
            Nike Dri-FIT ADV Run Division
            </p>
            <p className="text-[14px] md:text-[15px] font-medium">₹ 5 295</p>
          </div>
          <p className="text-[14px] md:text-[15px] pt-2 text-[#757575] w-[200px]">
          Women's Long-Sleeve Running Top
          </p>

        </div>
         {/* Image 4 start */}
         <div className="w-full">
          <Image
            src="/images/Image (8).png"
            alt="image 1"
            width={441.36}
            height={441.36}
            className="w-full h-auto"
          />
          <div className="flex justify-between pt-4">
            <p className="text-[14px] md:text-[15px] font-medium">
            Nike Fast
            </p>
            <p className="text-[14px] md:text-[15px] font-medium">₹ 3 795</p>
          </div>
          <p className="text-[14px] md:text-[15px] pt-2 text-[#757575] w-[220px]">
          Women's Mid-Rise 7/8 Running Leggings with Pockets
          </p>
        </div>
        
      </div>
    </div>
  </div>



       
            
 
  )
}

export default Gearup
