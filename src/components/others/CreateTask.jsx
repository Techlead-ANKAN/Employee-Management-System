// import React from 'react'

// function CreateTask() {
//     return (
//         <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
//             <form action="" className='flex flex-wrap w-full items-start justify-between '>
//                 <div className='w-1/2'>
//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
//                         <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='make a ui design' />
//                     </div>

//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
//                         <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
//                     </div>

//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
//                         <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="employee name" />
//                     </div>

//                     <div>
//                         <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
//                         <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design/dev/...' />
//                     </div>
//                 </div>

//                 <div className='w-2/5 flex flex-col items-start'>
//                     <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
//                     <textarea className='text-sm w-full h-44 py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols="30" rows="10" type="textarea" />
//                     <button className='bg-emerald-500 py-3 hover:bgemerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
//                 </div>

//             </form>
//         </div>
//     )
// }

// export default CreateTask


// CreateTask.jsx
import { motion } from 'framer-motion';

function CreateTask() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative backdrop-blur-lg bg-zinc-900/50 border border-cyan-500/30 rounded-2xl p-6 md:p-8"
    >
      {/* Holographic Top Bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rounded-t-2xl" />

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium text-cyan-400 mb-2">Task Title</label>
            <input
              className="w-full bg-zinc-800/30 border-2 border-cyan-500/20 rounded-lg py-3 px-4 text-white placeholder-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50 transition-all"
              type="text"
              placeholder="Enter task title"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium text-cyan-400 mb-2">Due Date</label>
            <input
              className="w-full bg-zinc-800/30 border-2 border-cyan-500/20 rounded-lg py-3 px-4 text-white placeholder-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50 transition-all"
              type="date"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-cyan-400 mb-2">Assign To</label>
            <input
              className="w-full bg-zinc-800/30 border-2 border-cyan-500/20 rounded-lg py-3 px-4 text-white placeholder-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50 transition-all"
              type="text"
              placeholder="Select team member"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-sm font-medium text-cyan-400 mb-2">Category</label>
            <select className="w-full bg-zinc-800/30 border-2 border-cyan-500/20 rounded-lg py-3 px-4 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50 transition-all">
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
              <option>Research</option>
            </select>
          </motion.div>
        </div>

        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-sm font-medium text-cyan-400 mb-2">Description</label>
            <textarea
              className="w-full h-40 bg-zinc-800/30 border-2 border-cyan-500/20 rounded-lg py-3 px-4 text-white placeholder-zinc-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50 transition-all"
              placeholder="Task details..."
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-cyan-glow transition-all self-end"
          >
            Create Task
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}

export default CreateTask;