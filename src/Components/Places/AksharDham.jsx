import React, { useEffect, useState } from 'react'
import Akshardham from "../Api/AksharDham.json"
import axios from 'axios'
const AksharDham = () => {
    const [data, setdata] = useState([])
    console.log(Akshardham.Restaurants.Famous_Restaurants)
    useEffect(() => {
        setdata(Akshardham.Restaurants.Famous_Restaurants)
    }, [])
    return (
        <div className='max-w-[1240px] h-[1500px] p-4 m-4 mx-auto '>
            <div className='w-[100%] h-[20rem]     '>
                <div className='relative bg-cover bg-no-repeat h-full  w-full bg-[url("https://www.hindugodwallpaper.com/downloadfiles.php?id=2898")]'>
                    <div className='absolute mt-[10rem] ml-7'>
                        <h1 className='text-5xl font-bold text-white '>Wah Akshardham</h1>
                        <p className='mt-2 text-xl  text-white'>Restaurants near the Taj Mahal</p>
                        <span className=' text-white'>6 places</span>
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

export default AksharDham







