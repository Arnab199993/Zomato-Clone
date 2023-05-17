import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Login = () => {
    const Navigate = useNavigate()
    const [passwords, setpasswords] = useState("")
    const [recpassword, setrecpassword] = useState("")
    const error = "Password will be the same"
    const [state, setState] = useState({
        username: "",
        email: "",
        input: "",
        inputs: ""
    })
    // https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png

    const Change = ((event) => {
        const data = event.target.value
        setState({ ...state, [event.target.name]: data })
    })

    console.log(state)



    const Click = ((event) => {
        event.preventDefault()
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZJmxfeSRvmYJo4VNzCCT39LdZ5Tru9c0",
            {
                email: state.email,
                password: state.input,
                returnSecureToken: true
            }
        ).then((data) => {
            console.log(data)
            Navigate("/")
        }).catch((error) => {
            console.log(error)
            alert((error.response.data.error.message))
        })
    })
    const pwd = ((event) => {
        setpasswords(event.target.value)
        const data = event.target.value
        setState({ ...state, [event.target.name]: data })
        console.log(state)
    })



    return (
        <div className='bg-[url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")] bg-no-repeat bg-cover py-[4rem]'>
            <div className=' border-gray-500 h-[30.75rem] w-[28rem] mx-auto mt-[10rem]   rounded-md '>
                <h3 className=' text-3xl font-medium text-white'>Login For Tomato</h3>
                <div className=' mt-9 text-gray-500'>
                    <form>


                        <input className='border  border-gray-300 w-full py-2 px-3 text-xl rounded-md mt-6 outline-none' value={state.email} onChange={Change} name={"email"} required placeholder={"Email"} type={"email"} /><br></br>
                        <input className='border  border-gray-300 w-full py-2 px-3 text-xl rounded-md mt-6 outline-none' value={state.input} name={"input"} onChange={pwd} placeholder={"Password"} type={"password"} /><br></br>


                        <div>
                            <button onClick={Click} className=' w-full py-2 rounded-md bg-red-500 text-white text-xl mt-4' >Login</button>
                        </div>
                    </form>
                </div>
                <div className='flex mt-4 text-lg ' >
                    <p className='text-white'>Not a member?</p>
                    <p onClick={() => Navigate("/register")} className='ml-2 cursor-pointer text-red-500'>Register</p>
                </div>
            </div>
        </div>
    )
}

export default Login