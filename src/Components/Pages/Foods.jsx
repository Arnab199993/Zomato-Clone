import React, { useEffect, useState } from 'react'
// import { Blurhash } from "react-blurhash"
const Foods = (props, { src }) => {
    // const [imageloaded, setimageloaded] = useState(false)
    // useEffect(() => {
    //     const img = new Image()
    //     img.onload = () => {
    //         setimageloaded(!imageloaded)
    //     }
    //     img.src = src
    // }, [src])
    return (
        <>
            <div className=''>
                {/*For Extra Large */}
                <div className='h-[10rem] w-[10rem] border border-transparent m-6  ' >

                    {/* {imageloaded ? (<Blurhash
                        hash='LEHLk~WB2yk8pyo0adR*.7kCMdnj'
                        width={200}
                        height={200}
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    />) : <div className='mt-4'>
                        <img src={props.image} />
                    </div>} */}
                    <div className='mt-4'>
                        <img loading='lazy' src={props.image} />
                    </div>
                    <div className='text-center border border-transparent mt-2 font-medium'>
                        {props.foodname}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foods
