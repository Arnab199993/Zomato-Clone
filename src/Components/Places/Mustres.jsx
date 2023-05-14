import React, { useEffect, useState } from 'react'
import Mustvisitres from "../Api/Mustres.json"
import axios from 'axios'
const Mustres = () => {
    const [data, setdata] = useState([])
    console.log(Mustvisitres.Restaurants.Famous_Restaurants)
    useEffect(() => {
        setdata(Mustvisitres.Restaurants.Famous_Restaurants)
    }, [])
    return (
        <div className='max-w-[1240px] h-[1500px] p-4 m-4 mx-auto'>
            <div className='w-[100%] h-[20rem] '>

                <div className='relative bg-cover bg-no-repeat h-full     w-full bg-[url("https://d4t7t8y8xqo0t.cloudfront.net/app/eazymedia/restaurant%2F110025%2Frestaurant020160519143002.jpg")]'>
                    <div className='absolute top-0 right-0 bottom-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)]'></div>
                    <div className='absolute mt-[10rem] ml-7 '>
                        <h1 className='text-5xl font-bold text-white  '>Must Visit Restaurants In Agra</h1>
                        <p className='mt-2 text-xl  text-white'>These restaurants in Agra will want you to keep coming back for more</p>
                        <span className=' text-white'>10 places</span>
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

export default Mustres







