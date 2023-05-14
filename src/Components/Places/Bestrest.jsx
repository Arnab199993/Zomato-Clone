import React, { useEffect, useState } from 'react'
import BestIndianRes from "../Api/BestIndianRes.json"
import axios from 'axios'
const Bestrest = () => {
    const [data, setdata] = useState([])
    console.log(BestIndianRes.Restaurants.Famous_Restaurants)
    useEffect(() => {
        setdata(BestIndianRes.Restaurants.Famous_Restaurants)
    }, [])
    return (
        <div className='max-w-[1240px] h-[1500px] p-4 m-4 mx-auto'>
            <div className='w-[100%] h-[20rem] '>

                <div className='relative bg-cover bg-no-repeat h-full     w-full bg-[url("https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/l-intro-1645057933.jpg")]'>
                    <div className='absolute top-0 right-0 bottom-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)]'></div>
                    <div className='absolute mt-[10rem] ml-7 '>
                        <h1 className='text-5xl font-bold text-white  '>Best Indian Restaurants</h1>
                        <p className='mt-2 text-xl  text-white'>Experience the incredible burst of Indian flavours with Butter Chicken, Biryani, Dal Makhani, Gulab Jamun and other Indian delicacies at these spots</p>
                        <span className=' text-white'>9 Places</span>
                    </div>
                </div>
            </div>
            {/**Hotels */}

            {
                <div className='grid grid-cols-4 gap-4 mt-4 ml-6'>
                    {
                        data.map((ele) => (
                            <div key={ele.No}>
                                <div className='h-[12rem] w-[16rem] mt-3   object-cover cursor-pointer'>
                                    <img className='h-full w-full rounded-md' src={ele.Restaurant_Image} />
                                </div>
                                <div className='text-lg font-medium'>
                                    <h1>{ele.Name}</h1>
                                </div>
                                <div className='flex'>
                                    <div className='h-5  py-1 w-12  rounded-md bg-green-800 text-white flex justify-center items-center text-center leading-none '>
                                        <span >{ele.Dining}</span>
                                        <span className='mt-2 text-2xl ml-[0.1rem] '>*</span>
                                    </div>
                                    <div className='leading-none ml-1 mt-[0.1rem]'>
                                        <span>Delivery</span>
                                    </div>
                                    <div>

                                    </div>
                                    <div className='h-5  py-1 w-12  rounded-md bg-green-600 text-white flex justify-center items-center text-center leading-none ml-5'>
                                        <span >{ele.Delivery}</span>
                                        <span className='mt-2 text-2xl ml-[0.1rem] '>*</span>
                                    </div>
                                    <div className='leading-none ml-1 mt-[0.1rem]'>
                                        <span>Dining</span>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            }

            {/**Hotels */}
        </div>
    )
}

export default Bestrest







