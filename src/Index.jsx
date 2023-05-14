import React from 'react'
import Navbar from './Components/Navbar'
import LowerNavbar from './Components/LowerNavbar'
import FoodsList from './Components/Pages/FoodsList'


const Index = () => {
    return (
        <div>
            <Navbar />
            <LowerNavbar />
            <FoodsList />
        </div>
    )
}

export default Index