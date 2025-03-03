// import React from 'react'

// function TaskListNumbers() {
//   return (
//     <div className='flex mt-10 justify-between gap-5 screen'>
//         <div className='rounded-xl w-[45%] px-9 py-6 bg-red-400'>
//             <h2 className='text-2xl font-semibold'>0</h2>
//             <h3 className='text-2xl font-medium'>New Task</h3>
//         </div>
//         <div className='rounded-xl w-[45%] px-9 py-6 bg-blue-400'>
//             <h2 className='text-2xl font-semibold'>0</h2>
//             <h3 className='text-2xl font-medium'>New Task</h3>
//         </div>
//         <div className='rounded-xl w-[45%] px-9 py-6 bg-green-400'>
//             <h2 className='text-2xl font-semibold'>0</h2>
//             <h3 className='text-2xl font-medium'>New Task</h3>
//         </div>
//         <div className='rounded-xl w-[45%] px-9 py-6 bg-yellow-400'>
//             <h2 className='text-2xl font-semibold'>0</h2>
//             <h3 className='text-2xl font-medium'>New Task</h3>
//         </div>
//     </div>
//   )
// }

// export default TaskListNumbers


// TaskListNumbers.jsx
import { motion } from 'framer-motion';


function TaskListNumbers({data}) {

  const stats = [
    { label: 'New Tasks', value: `${data.task_numbers.new_task}`, color: 'from-cyan-500 to-blue-600' },
    { label: 'Active', value: `${data.task_numbers.active}`, color: 'from-purple-500 to-fuchsia-600' },
    { label: 'Completed', value: `${data.task_numbers.completed}`, color: 'from-green-500 to-emerald-600' },
    { label: 'Failed', value: `${data.task_numbers.failed}`, color: 'from-red-500 to-rose-600' },
  ];

  return (
    <motion.div 
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 relative overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
        >
          <div className='absolute inset-0 bg-noise opacity-10' />
          <div className='relative'>
            <h2 className='text-5xl font-bold mb-2'>{stat.value}</h2>
            <p className='text-sm font-medium text-white/80'>{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default TaskListNumbers;