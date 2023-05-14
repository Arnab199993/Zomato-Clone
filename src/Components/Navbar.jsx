import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const Navigate = useNavigate()
    return (
        <div>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 '>
                {/* For Pc */}
                <div className='hidden md:flex fixed sm:hidden xl:hidden lg:hidden  '>xl
                    <div className='w-full flex '>
                        <div className='w-[5.5rem] flex justify-center items-center ' >
                            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' />
                        </div>
                        <div className='w-[30rem]'>
                            <input placeholder='Search for restaurant cuisine or dish' className="px-6 mx-6 h-10 w-full border rounded-md outline-none " type='text' />
                        </div>
                    </div>
                    <div className=' flex w-full ml-5 justify-center items-center text-[#696969]  text-sm px-4' >
                        <button className='flex'>Login</button>
                        <button className='ml-4'>Sign Up</button>
                        {/* For Small Device */}
                    </div>


                </div>

                <div className='hidden xl:flex  sm:hidden  '>
                    <div className='w-full flex'>
                        <div className='w-[8.5rem] flex justify-center items-center cursor-pointer '>
                            <img onClick={(() => Navigate("/delivery"))} src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' />
                        </div>
                        {/*Searchbar with icons */}

                        <div className='w-[40rem] flex '>
                            <input placeholder='Search for restaurant cuisine or dish' className="px-6 mx-6 h-14 w-full border rounded-md outline-none xl:text-lg" type='text' />
                        </div>

                    </div>
                    <div className=' flex w-full ml-20 justify-center items-center text-[#696969]  text-lg px-4 lg:flex' >
                        <button className='flex'>Login</button>
                        <button className='ml-4'>Sign Up</button>
                    </div>

                    {/* Extra Large */}
                </div>



                <div className='hidden lg:flex  sm:hidden xl:hidden md:hidden  '>
                    <div className='w-full flex'>
                        <div className='w-[6.5rem] flex justify-center items-center '>
                            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' />

                        </div>
                        <div className='w-[40rem]'>
                            <input placeholder='Search for restaurant cuisine or dish' className="px-6 mx-6 h-12 w-full border rounded-md outline-none lg:text-xl" type='text' />
                        </div>
                    </div>
                    <div className=' flex w-full ml-10 justify-center items-center text-[#696969]  text-base px-4 lg:flex' >
                        <button className='flex'>Login</button>
                        <button className='ml-4'>Sign Up</button>
                    </div>
                    {/* Large */}
                </div>





                {/*For tablet */}
                <div className='sm:flex md:hidden lg:hidden xl:hidden w-full hidden   '>
                    <div className='w-full flex'>
                        <div className='w-[5.5rem] flex justify-center items-center '>
                            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' />
                        </div>
                        <div className='w-[23rem]'>
                            <input placeholder='Search for restaurant cuisine or dish ' className="px-6 mx-6 h-10 w-full border rounded-md outline-none sm:text-sm " type='text' />
                        </div>
                    </div>
                    <div className=' flex w-full ml-5 justify-center items-center text-[#696969]  text-sm px-4' >
                        <button className='flex'>Login</button>
                        <button className='ml-4'>Sign Up</button>
                        {/* extra small */}
                    </div>

                </div>
                {/*For extra extra small */}
                <div className='sm:hidden md:hidden lg:hidden xl:hidden w-full  flex '>
                    <div className='flex'>
                        <div className='full flex justify-center items-center '>
                            <img className='w-[5.5rem]' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' />
                        </div>
                        <div className='w-[70%] h-10 text-xs'>
                            <input className='w-100% px-6 mx-6 h-10 w-full border rounded-md outline-none sm:text-sm' placeholder='Search for restaurant cuisine or dish ' />
                        </div>
                        <div className='ml-9  text-sm  w-[20rem]'>
                            <button className="mt-3">Login</button>
                            <button className="ml-2">Sign Up</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Navbar