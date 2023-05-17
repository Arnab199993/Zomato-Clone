import React from 'react'
import Navbar from './Components/Navbar'
import LowerNavbar from './Components/LowerNavbar'
import FoodsList from './Components/Pages/FoodsList'
import { useState } from 'react'

const Index = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div>
            <Navbar setSearchQuery={setSearchQuery} />
            <LowerNavbar />
            <FoodsList searchQuery={searchQuery} />
        </div>
    )
}

export default Index