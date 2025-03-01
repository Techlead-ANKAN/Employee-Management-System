// import React, { useState } from 'react'

// function Login() {

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const submitHandler = (e) => {
//         e.preventDefault();
//         console.log("Email: ", email);
//         console.log("Password: ", password);

//         setEmail("");
//         setPassword("");
//     }

//   return (

//     <div className='flex h-screen w-screen items-center justify-center'>
//         <div className='border-2 rounded-xl border-emerald-600 p-20'>
//             <form 
//             onSubmit={(e) => {
//             submitHandler(e);
//             }}
//             className='flex flex-col items-center justify-center'>

//                 <input 
//                 value={email} 
//                 onChange={(e) => {
//                     setEmail(e.target.value)
//                 }} 
//                 required 
//                 className='text-black outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 text-xl rounded-full placeholder:text-gray-400' type="email" 
//                 placeholder='Enter your email'/>

//                 <input 
//                 value={password}
//                 onChange={(e) => {
//                     setPassword(e.target.value)
//                 }}
//                 required 
//                 className='text-black outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-3 px-5 text-xl rounded-full mt-3 placeholder:text-gray-400' type="password" 
//                 placeholder='Enter your password'/>

//                 <button className='mt-5 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 rounded-full placeholder:text-white'>Login</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login


import { motion } from 'framer-motion';
import { useState } from 'react';

function Login({handleLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4"
    >
      {/* Neon Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#082f4955_1px,transparent_1px),linear-gradient(to_bottom,#082f4955_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute h-full w-full bg-[radial-gradient(#0ea5e955_20%,transparent_60%)] animate-spin [animation-duration:20s]" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-blue-900/10" />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative z-10 backdrop-blur-xl bg-zinc-900/50 border border-cyan-500/30 rounded-2xl p-8 md:p-12 w-full max-w-md shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-shadow"
      >
        {/* Holographic Header */}
        <div className="text-center mb-8 space-y-2">
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
          >
            LOGIN
          </motion.h1>
          <p className="text-zinc-400 text-sm md:text-base">Secure Authentication Required</p>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto w-3/4" />
        </div>

        <form onSubmit={submitHandler} className="space-y-5 md:space-y-6">
          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative group">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-zinc-800/50 border-2 border-cyan-500/20 rounded-lg py-3 px-5 text-white placeholder-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm md:text-base group-hover:border-cyan-500/40"
                type="email"
                placeholder="Email ID"
              />
              <div className="absolute inset-0 rounded-lg pointer-events-none border-2 border-cyan-500/0 group-hover:border-cyan-500/10 transition-all" />
            </div>
          </motion.div>

          {/* Password Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative group">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-zinc-800/50 border-2 border-cyan-500/20 rounded-lg py-3 px-5 text-white placeholder-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm md:text-base group-hover:border-cyan-500/40"
                type="password"
                placeholder="Password"
              />
              <div className="absolute inset-0 rounded-lg pointer-events-none border-2 border-cyan-500/0 group-hover:border-cyan-500/10 transition-all" />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-3 md:py-4 px-6 rounded-lg font-semibold hover:shadow-cyan-glow transition-all group"
            type="submit"
          >
            <span className="relative z-10">INITIATE LOGIN</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </form>

        {/* Footer Link */}
        <motion.div
          className="mt-6 text-center text-zinc-400 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            Forgot Password?{' '}
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4 decoration-cyan-500/30 hover:decoration-cyan-400">
              Request access
            </a>
          </p>
        </motion.div>
      </motion.div>

      {/* Animated Orb Effects */}
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-orb-float" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-orb-float-delayed" />
    </motion.div>
  )
}

export default Login;