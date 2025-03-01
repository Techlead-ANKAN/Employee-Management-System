// import React from 'react'
// import Header from '../others/Header'
// import TaskListNumbers from '../others/TaskListNumbers'
// import TaskList from '../TaskList/TaskList'

// function EmployeeDashboard() {
//   return (
//     <div className='p-10 bg-[#1c1c1c] h-screen'>
//         <Header />
//         <TaskListNumbers/>
//         <TaskList />
//     </div>

//   )
// }

// export default EmployeeDashboard


// EmployeeDashboard.jsx
import { motion } from 'framer-motion';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

function EmployeeDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='min-h-screen bg-[#0a0a0a] relative overflow-hidden'
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0 bg-grid-white/[0.04]' />
      <div className='absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent opacity-10 blur-3xl' />

      <div className='relative container mx-auto p-6 xl:p-10 space-y-8'>
        <Header />
        <TaskListNumbers />
        <TaskList />
      </div>
    </motion.div>
  )
}

export default EmployeeDashboard;