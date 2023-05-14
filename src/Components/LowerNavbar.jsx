import React from 'react'
import { useNavigate } from "react-router-dom"
const LowerNavbar = () => {
    const Navigate = useNavigate()
    return (
        <div className='max-w-[1240px] h-24 mx-auto'>
            {/*Extra Large */}
            <div className='hidden xl:flex  sm:hidden w-full  '>
                <div className='h-14 w-14 bg-[#F0E68C]  flex justify-center items-center border  border-[#F0E68C] rounded-full ml-9 cursor-pointer '>
                    <img className='h-[30px] w-[30px] ' src='https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp' />
                </div>
                <div className='flex justify-center items-center pl-2 text-xl text-red-500 font-medium md:text-2xl cursor-pointer ' onClick={(() => Navigate("/delivery"))}>
                    <p>Delivery</p>
                </div>
                <div className='h-14 w-14 bg-[#E5F3F3]  flex justify-center items-center border  border-[#E5F3F3] rounded-full ml-9 cursor-pointer  '>
                    <img className='h-[30px] w-[30px] ' src='https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png' />
                </div>
                <div className='flex justify-center items-center pl-2 text-xl text-red-500 font-medium md:text-2xl cursor-pointer ' onClick={() => Navigate("/diningoutlist")}>
                    <p>Dining Out</p>
                </div>
                <div className='h-14 w-14 bg-[#F8F8F8]  flex justify-center items-center border  border-[#F8F8F8] rounded-full ml-9 cursor-pointer '>
                    <img className='h-[30px] w-[30px] ' src='	https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png' />
                </div>
                <div className='flex justify-center items-center pl-2 text-xl text-red-500 font-medium md:text-2xl cursor-pointer ' onClick={() => Navigate("/nightlife")}>
                    <p>Nightlife</p>
                </div>
            </div>
            {/*Large */}
            <div className='hidden lg:flex fixed sm:hidden xl:hidden md:hidden '>
                <div className='h-14 w-14 bg-[#F0E68C]  flex justify-center items-center border  border-[#F0E68C] rounded-full ml-9 cursor-pointer '>
                    <img className='h-[30px] w-[30px] ' src='https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp' />
                </div>
                <div className='flex justify-center items-center pl-2 text-xl text-red-500 font-medium lg:text-xl cursor-pointer' >
                    <p>Delivery</p>
                </div>
                <div className='h-14 w-14 bg-[#E5F3F3]  flex justify-center items-center border  border-[#E5F3F3] rounded-full ml-9 cursor-pointer  '>
                    <img className='h-[30px] w-[30px] ' src='https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png' />
                </div>
                <div className='flex justify-center items-center pl-2 text-xl text-red-500 font-medium md:text-2xl cursor-pointer lg:text-xl '>
                    <p>Dining Out</p>
                </div>
                <div className='h-14 w-14 bg-[#F8F8F8]  flex justify-center items-center border  border-[#F8F8F8] rounded-full ml-9 cursor-pointer '>
                    <img className='h-[30px] w-[30px] ' src='	https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png' />
                </div>
                <div className='flex justify-center items-center pl-2 text-xl text-red-500 font-medium md:text-2xl cursor-pointer lg:text-xl'>
                    <p>Nightlife</p>
                </div>
            </div>
            {/*For medium screen*/}
            <div className='hidden md:flex fixed sm:hidden xl:hidden lg:hidden   '>
                <div className='h-14 w-14 bg-[#F0E68C]  flex justify-center items-center border  border-[#F0E68C] rounded-full ml-9 cursor-pointer '>
                    <img className='h-[30px] w-[30px] ' src='https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp' />
                </div>
                <div className='flex justify-center items-center pl-2 text-xl text-red-500 font-medium lg:text-xl md:text-base cursor-pointer '>
                    <p>Delivery</p>
                </div>
                <div className='h-14 w-14 bg-[#E5F3F3]  flex justify-center items-center border  border-[#E5F3F3] rounded-full ml-9 cursor-pointer  '>
                    <img className='h-[30px] w-[30px] ' src='https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png' />
                </div>
                <div className='flex justify-center items-center pl-2 text-xl text-red-500 font-medium md:text-base cursor-pointer lg:text-xl '>
                    <p>Dining Out</p>
                </div>
                <div className='h-14 w-14 bg-[#F8F8F8]  flex justify-center items-center border  border-[#F8F8F8] rounded-full ml-9 cursor-pointer '>
                    <img className='h-[30px] w-[30px] ' src='	https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png' />
                </div>
                <div className='flex justify-center items-center pl-2 text-xl text-red-500 font-medium md:text-base cursor-pointer lg:text-xl'>
                    <p>Nightlife</p>
                </div>
            </div>
            {/*For Small Screen */}
            <div className='sm:flex md:hidden lg:hidden xl:hidden w-full hidden    '>
                <div className='h-14 w-14 bg-[#F0E68C]  flex justify-center items-center border  border-[#F0E68C] rounded-full ml-9 cursor-pointer '>
                    <img className='h-[30px] w-[30px] ' src='https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp' />
                </div>
                <div className='flex justify-center items-center pl-2 text-xl text-red-500 font-medium lg:text-xl md:text-base sm:text-sm cursor-pointer '>
                    <p>Delivery</p>
                </div>
                <div className='h-14 w-14 bg-[#E5F3F3]  flex justify-center items-center border  border-[#E5F3F3] rounded-full ml-9 cursor-pointer  '>
                    <img className='h-[30px] w-[30px] ' src='https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png' />
                </div>
                <div className='flex justify-center items-center pl-2 text-xl text-red-500 font-medium md:text-base cursor-pointer lg:text-xl sm:text-sm'>
                    <p>Dining Out</p>
                </div>
                <div className='h-14 w-14 bg-[#F8F8F8]  flex justify-center items-center border  border-[#F8F8F8] rounded-full ml-9 cursor-pointer '>
                    <img className='h-[30px] w-[30px] ' src='	https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png' />
                </div>
                <div className='flex justify-center items-center pl-2 text-xl text-red-500 font-medium md:text-base cursor-pointer lg:text-xl sm:text-sm'>
                    <p>Nightlife</p>
                </div>
            </div>
            {/*For Extra small device or Mobile Phones */}
            <div className='sm:hidden md:hidden lg:hidden xl:hidden w-full  flex    '>
                <div className='flex justify-center items-center'>
                    <div className='h-10 w-10 bg-[#F0E68C]  flex justify-center items-center border  border-[#F0E68C] rounded-full ml-9 cursor-pointer '>
                        <img className='h-[20px] w-[20px] ' src='https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp' />
                    </div>
                    <div className='flex justify-center items-center pl-2 text-xs text-red-500 font-medium lg:text-xl md:text-base sm:text-sm cursor-pointer '>
                        <p>Delivery</p>
                    </div>
                </div>
                <div className='flex  justify-center items-center'>
                    <div className='h-10 w-10 bg-[#E5F3F3]  flex justify-center items-center border  border-[#E5F3F3] rounded-full ml-9 cursor-pointer  '>
                        <img className='h-[20px] w-[20px] ' src='https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png' />
                    </div>
                    <div className='flex justify-center items-center pl-2 text-xs text-red-500 font-medium md:text-base cursor-pointer lg:text-xl sm:text-sm'>
                        <p>Dining Out</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='h-10 w-10 bg-[#F8F8F8]  flex justify-center items-center border  border-[#F8F8F8] rounded-full ml-9 cursor-pointer '>
                        <img className='h-[20px] w-[20px] ' src='	https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png' />
                    </div>
                    <div className='flex justify-center items-center pl-2 text-xs text-red-500 font-medium md:text-base cursor-pointer lg:text-xl sm:text-sm pr-10'>
                        <p>Nightlife</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LowerNavbar