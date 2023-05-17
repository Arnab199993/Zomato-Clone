import React from 'react'
import Navbar from "../Navbar"
import LowerNavbar from "../LowerNavbar"
const NightLife = () => {
    return (
        <div >
            <Navbar />
            <LowerNavbar />
            <div className='ml-6'>
                <h2 className='font-normal text-3xl'>Collections</h2><br></br>
                <h2 className='text-xl font-light'>Explore curated lists of top restaurants, cafes, pubs, and bars in Agra, based on trends</h2>
            </div>

        </div>
    )
}

export default NightLife