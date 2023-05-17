import React, { useState } from 'react'
import NightLife from './NightLife'
import ReactPlayer from 'react-player'
import Bar from "../Videos/Bar.mp4"
import { useNavigate } from 'react-router-dom'
const NightLifeList = () => {
    const Navigate = useNavigate()
    const [playing, setplaying] = useState(false)
    const play = () => {
        setplaying(!playing)
        Navigate("/pubs")
    }
    const toggleplay = () => {
        setplaying(!playing)
    }
    return (
        <div className='max-w-[1240px] h-[900px] border border-black mx-auto my-4'>
            <NightLife />
            <div className='h-[20rem] w-[16.25rem]  ml-6 mt-4 '>
                <div onClick={play} className='cursor-pointer relative' onMouseEnter={toggleplay} onMouseLeave={toggleplay} >
                    {playing ? (<ReactPlayer url={Bar} playing={playing} height={"100%"} width={"100%"} />) : (<ReactPlayer url={Bar} height={"100%"} width={"100%"} />)}
                    <div className='absolute top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.3)]'></div>
                    <div className='absolute top-0 bottom-0 left-0 right-0 text-white mt-[6rem] ml-3  '>
                        <p className='text-lg leading-tight'>Best Bars and Pubs</p>
                        <p className='text-base'>7 Places</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NightLifeList