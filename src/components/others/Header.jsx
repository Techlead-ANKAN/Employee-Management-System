// import React from 'react'

// function Header() {
//   return (
//     <div className="flex items-end justify-between">
//         <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>Ankan</span></h1>
//         <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small'>Logout</button>
//     </div>
//   )
// }

// export default Header

// Header.jsx
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-col md:flex-row justify-between items-start gap-4"
    >
      <div className='space-y-2'>
        <motion.h1 
          className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'
          whileHover={{ scale: 1.02 }}
        >
          Welcome Back,<br/>Ankan
        </motion.h1>
        <p className='text-zinc-400'>You have 8 tasks remaining</p>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl font-semibold flex items-center gap-2 hover:shadow-cyan-glow'
      >
        <svg className='w-5 h-5' fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Logout
      </motion.button>
    </motion.div>
  )
}

export default Header;