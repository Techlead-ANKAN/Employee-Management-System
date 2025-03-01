// import React from 'react'

// function TaskList() {
//     return (
//         <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
//             <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
//                     <h4 className='text-sm'>28 Feb 2025</h4>
//                 </div>
//                 <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
//                 <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, perspiciatis at ea dolore laborum iste?</p>
//             </div>
//             <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
//                     <h4 className='text-sm'>28 Feb 2025</h4>
//                 </div>
//                 <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
//                 <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, perspiciatis at ea dolore laborum iste?</p>
//             </div>
//             <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
//                     <h4 className='text-sm'>28 Feb 2025</h4>
//                 </div>
//                 <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
//                 <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, perspiciatis at ea dolore laborum iste?</p>
//             </div>
//             <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
//                     <h4 className='text-sm'>28 Feb 2025</h4>
//                 </div>
//                 <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
//                 <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, perspiciatis at ea dolore laborum iste?</p>
//             </div>
//             <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
//                     <h4 className='text-sm'>28 Feb 2025</h4>
//                 </div>
//                 <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
//                 <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, perspiciatis at ea dolore laborum iste?</p>
//             </div>
//             <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
//                     <h4 className='text-sm'>28 Feb 2025</h4>
//                 </div>
//                 <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
//                 <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, perspiciatis at ea dolore laborum iste?</p>
//             </div>
//             <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
//                     <h4 className='text-sm'>28 Feb 2025</h4>
//                 </div>
//                 <h2 className='mt-5 text-2xl font-semibold'>make a youtube video</h2>
//                 <p className='text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, perspiciatis at ea dolore laborum iste?</p>
//             </div>
//         </div>
//     )
// }

// export default TaskList


// TaskList.jsx
import { motion } from 'framer-motion';

const tasks = [
  { title: 'Video Production', priority: 'High', date: '28 Feb 2025', color: 'bg-cyan-500', status: 'In Progress' },
  { title: 'UI Design Review', priority: 'Medium', date: '1 Mar 2025', color: 'bg-purple-500', status: 'New' },
  { title: 'Client Meeting', priority: 'Critical', date: '25 Feb 2025', color: 'bg-red-500', status: 'Overdue' },
  { title: 'Code Deployment', priority: 'High', date: '2 Mar 2025', color: 'bg-green-500', status: 'Completed' },
  { title: 'Code Deployment', priority: 'High', date: '2 Mar 2025', color: 'bg-green-500', status: 'Completed' },
  { title: 'Code Deployment', priority: 'High', date: '2 Mar 2025', color: 'bg-green-500', status: 'Completed' },
  { title: 'Code Deployment', priority: 'High', date: '2 Mar 2025', color: 'bg-green-500', status: 'Completed' },
  { title: 'Code Deployment', priority: 'High', date: '2 Mar 2025', color: 'bg-green-500', status: 'Completed' },
  { title: 'Code Deployment', priority: 'High', date: '2 Mar 2025', color: 'bg-green-500', status: 'Completed' },
  { title: 'Code Deployment', priority: 'High', date: '2 Mar 2025', color: 'bg-green-500', status: 'Completed' },
  { title: 'Code Deployment', priority: 'High', date: '2 Mar 2025', color: 'bg-green-500', status: 'Completed' },
  { title: 'Code Deployment', priority: 'High', date: '2 Mar 2025', color: 'bg-green-500', status: 'Completed' },
  { title: 'Code Deployment', priority: 'High', date: '2 Mar 2025', color: 'bg-green-500', status: 'Completed' },
  { title: 'Code Deployment', priority: 'High', date: '2 Mar 2025', color: 'bg-green-500', status: 'Completed' },
  { title: 'Code Deployment', priority: 'High', date: '2 Mar 2025', color: 'bg-green-500', status: 'Completed' },
];

function TaskList() {
  return (
    <div className='space-y-6'>
      <h3 className='text-2xl font-bold text-white'>Active Tasks</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {tasks.map((task, index) => (
          <motion.div
            key={task.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative group p-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800/50 backdrop-blur-lg border border-zinc-800 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-cyan-glow`}
          >
            <div className='flex justify-between items-start mb-4'>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${task.color} bg-opacity-20 text-${task.color.split('-')[1]}-300`}>
                {task.priority}
              </span>
              <span className='text-sm text-zinc-400'>{task.date}</span>
            </div>
            <h3 className='text-xl font-semibold mb-2'>{task.title}</h3>
            <p className='text-sm text-zinc-400 line-clamp-2 mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='h-2 w-24 bg-zinc-700 rounded-full overflow-hidden'>
                  <motion.div 
                    className={`h-full ${task.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 40 + 60}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <span className='text-xs text-zinc-400'>{task.status}</span>
              </div>
              <button className='p-2 hover:bg-zinc-700 rounded-lg transition-colors'>
                <svg className='w-5 h-5' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TaskList;