import React, { useState } from 'react'
import TajMahal from "../Videos/TajMahal.mp4"
import AksharDham from "../Videos/AksharDham.mp4"
import FancyRestaurant from "../Videos/FancyRestaurant.mp4"
import IndianFoods from "../Videos/IndianFoods.mp4"
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router-dom'
const DiningOut = () => {
    const Navigate = useNavigate()
    const [loading, setloading] = useState(false)

    const [playing, setplaying] = useState(false)
    const [playing1, setplaying1] = useState(false)
    const [playing2, setplaying2] = useState(false)
    const [playing3, setplaying3] = useState(false)
    const toggleplaying = (() => {
        setplaying(!playing)
        setloading(!loading)
    })
    const toggleplaying1 = (() => {
        setplaying1(!playing1)
    })
    const toggleplaying2 = (() => {
        setplaying2(!playing2)
    })
    const toggleplaying3 = (() => {
        setplaying3(!playing3)
    })
    return (
        <div>
            <div >
                <div className='grid grid-cols-4  m-4 gap-4 '>

                    <div onMouseEnter={toggleplaying} onMouseLeave={toggleplaying} className=' h-[10rem] w-[28rem ]  box-border cursor-pointer  relative' onClick={() => Navigate("/taj")} >
                        <div className='object-cover '>
                            {playing ? (<ReactPlayer url={TajMahal} playing={playing} height={"100%"} width={"100%"} loop />) : (<ReactPlayer url={TajMahal} height={"100%"} width={"100%"} loop />)}
                            <div className='absolute top-0 right-0 bottom-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.4)]'></div>
                        </div>
                        <div className='absolute h-[32%]  w-[96%]  top-0 text-white ml-3 mt-[7rem] leading-3'>
                            <h1 className='text-lg '>Wah Taj!</h1>
                            <span >6 Places</span>
                        </div>

                    </div>
                    <div onMouseEnter={toggleplaying1} onMouseLeave={toggleplaying1} className=' h-[10rem] w-[28rem  ]  box-border cursor-pointer object-cover relative' onClick={() => Navigate("/akshardham")} >
                        <div>
                            {playing1 ? (<ReactPlayer url={AksharDham} playing={playing1} height={"100%"} width={"100%"} />) : (<ReactPlayer url={AksharDham} height={"100%"} width={"100%"} />)}
                            <div className='absolute top-0 right-0 bottom-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)]'></div>
                        </div>
                        <div className='absolute  h-[32%] w-[96%] top-0 text-white ml-3 mt-[7rem] leading-3   '>
                            <h1 className='text-lg'>Wah Akshardham</h1>
                            <span >6 Places</span>
                        </div>
                    </div>

                    <div onMouseEnter={toggleplaying2} onMouseLeave={toggleplaying2} className=' h-[10rem] w-[28rem ]  box-border cursor-pointer object-cover relative' onClick={() => Navigate("/mustvisitrestaurantinagra")} >
                        <div>
                            {playing2 ? (<ReactPlayer url={FancyRestaurant} playing={playing2} height={"100%"} width={"100%"} />) : (<ReactPlayer url={FancyRestaurant} height={"100%"} width={"100%"} />)}
                            <div className='absolute top-0 right-0 bottom-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)]'></div>
                        </div>
                        <div className='absolute w-[100%] h-[32%] top-0 text-white mt-[7rem]  ml-3'>
                            <h1>Must Visit restaurants in India</h1>
                            <span >10 Places</span>
                        </div>
                    </div>

                    <div onMouseEnter={toggleplaying3} onMouseLeave={toggleplaying3} className=' h-[10rem] w-[28rem ]  box-border cursor-pointer object-cover relative' onClick={() => Navigate("/bestindianrestaurant")} >
                        <div >
                            {playing3 ? (<ReactPlayer url={IndianFoods} playing={playing3} height={"100%"} width={"100%"} />) : (<ReactPlayer url={IndianFoods} height={"100%"} width={"100%"} />)}
                            <div className='absolute top-0 right-0 bottom-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)]'></div>
                            <div className='absolute w-[100%] h-[32%] top-0 text-white mt-[7rem]  ml-3'>
                                <h1>Best Indian restaurants</h1>
                                <span>9 places!</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default DiningOut