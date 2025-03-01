import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);

        setEmail("");
        setPassword("");
    }

  return (

    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e) => {
            submitHandler(e);
            }}
            className='flex flex-col items-center justify-center'>

                <input 
                value={email} 
                onChange={(e) => {
                    setEmail(e.target.value)
                }} 
                required 
                className='text-black outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 text-xl rounded-full placeholder:text-gray-400' type="email" 
                placeholder='Enter your email'/>

                <input 
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                required 
                className='text-black outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-3 px-5 text-xl rounded-full mt-3 placeholder:text-gray-400' type="password" 
                placeholder='Enter your password'/>

                <button className='mt-5 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 rounded-full placeholder:text-white'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login