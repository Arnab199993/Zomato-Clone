import React, { useEffect, useState } from 'react'
import Foods from './Foods'
import axios from "axios"
const FoodsList = () => {
    const [array, setarray] = useState([])
    const [post, setpost] = useState(false)
    const SearchApi = (() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((response) => {
                console.log(response)
                setarray(response.data.categories)
                console.log(array)
                setpost(response)

            }).catch((err) => {
                console.log(err)
            })
    })
    console.log("Hi")
    useEffect(() => {
        SearchApi()
    }, [])
    return (
        <>
            <div className='h-[1040px] max-w-[1240px] mx-auto border border-transparent p-4 my-4'>
                <div className='text-3xl font-[400]'>
                    {post ? "" : (<h1 >Loading...</h1>)}
                    {post ? <h3 className='ml-4'>Inspiration for your first order</h3> : ""}
                </div>
                <div className='grid grid-cols-6'>
                    {array.map((ele) => (
                        <div key={ele.idCategory}><Foods image={ele.strCategoryThumb} foodname={ele.strCategory} /></div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default FoodsList