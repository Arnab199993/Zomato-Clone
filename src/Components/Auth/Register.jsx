import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
const Register = () => {
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


    const Change = ((event) => {
        const data = event.target.value
        setState({ ...state, [event.target.name]: data })
    })

    console.log(state)



    const Click = ((event) => {
        event.preventDefault()
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZJmxfeSRvmYJo4VNzCCT39LdZ5Tru9c0",
            {
                email: state.email,
                password: state.input,
                returnSecureToken: true
            }
        ).then((data) => {
            console.log(data)
            Navigate("/login")
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
    const pwd2 = ((event) => {
        setrecpassword(event.target.value)
        const data = event.target.value
        setState({ ...state, [event.target.name]: data })
        console.log(state)
    })


    return (
        <div >
            <div className='bg-[url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")] bg-no-repeat bg-cover py-[7rem]'>

                <div className='  h-[30.75rem] w-[28rem] mx-auto mt-[3rem] px-6 py-2 rounded-md '>

                    <h3 className=' text-3xl font-medium text-white'>Sign Up For Tomato</h3>

                    <div className=' mt-9 text-gray-500'>
                        <form>
                            <input className='border border-gray-300 w-full py-2 px-3 text-xl rounded-md outline-none' value={state.username} onChange={Change} name={"username"} required placeholder={"User name"} type={"text"} /><br></br>
                            <input className='border  border-gray-300 w-full py-2 px-3 text-xl rounded-md mt-6 outline-none' value={state.email} onChange={Change} name={"email"} required placeholder={"Email"} type={"email"} /><br></br>
                            <input className='border  border-gray-300 w-full py-2 px-3 text-xl rounded-md mt-6 outline-none' value={state.input} name={"input"} onChange={pwd} placeholder={"Password"} type={"password"} /><br></br>
                            <input className='border  border-gray-300 w-full py-2 px-3 text-xl rounded-md mt-6 outline-none' value={state.inputs} name={"inputs"} onChange={pwd2} placeholder={"Confirm new password"} type={"password"} /><br></br>
                            {passwords === recpassword ? "" : <p className='text-white'>{error}</p>}
                            <div>
                                <button onClick={Click} className=' w-full py-2 rounded-md bg-red-500 text-white text-xl mt-4' >Create Account</button>

                            </div>
                        </form>
                    </div>

                    <div className='flex mt-4 text-lg ml-[6rem]' >

                        <p className='text-white'>Already a member?</p>

                        <p onClick={() => Navigate("/login")} className='ml-2 cursor-pointer text-red-500'>Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register