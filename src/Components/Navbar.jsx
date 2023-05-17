import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({ setSearchQuery }) => {
    const Navigate = useNavigate()
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <div>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 '>
                <div className=' xl:flex    '>
                    <div className='w-full flex'>

                        <div className='w-[8.5rem] flex justify-center items-center cursor-pointer '>
                            <img onClick={(() => Navigate("/"))} src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' />
                        </div>
                        {/*Searchbar with icons */}
                        <div className='w-[40rem] flex '>
                            <input onChange={handleInputChange} placeholder='Search for restaurant cuisine or dish' className="px-6 mx-6 h-14 w-full border rounded-md outline-none xl:text-lg" type='text' />
                        </div>
                        <div>                        </div>

                    </div>
                    <div className=' flex w-full ml-20 justify-center items-center text-[#696969]  text-lg px-4 lg:flex' >
                        <button className='flex' onClick={(() => Navigate("/login"))}>Login</button>
                        <button className='ml-4' onClick={(() => Navigate("/register"))}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar