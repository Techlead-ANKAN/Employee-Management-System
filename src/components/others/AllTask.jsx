// import React from 'react'

// function AllTask() {
//   return (
//     <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-52 overflow-auto'>
//         <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
//             <h2>Ankan</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className="bg-green-400 mb-2 py-2 px-4 flex justify-between rounded">
//             <h2>Ankan</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className="bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded">
//             <h2>Ankan</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className="bg-brown-400 mb-2 py-2 px-4 flex justify-between rounded">
//             <h2>Ankan</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className="bg-yellow-400 mb-2 py-2 px-4 flex justify-between rounded">
//             <h2>Ankan</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className="bg-gray-400 mb-2 py-2 px-4 flex justify-between rounded">
//             <h2>Ankan</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//     </div>
//   )
// }

// export default AllTask


// AllTask.jsx
import { motion } from 'framer-motion';

const tasks = [
  { id: 1, assignee: 'Ankan', title: 'UI Design', status: 'In Progress', priority: 'high' },
  { id: 2, assignee: 'John', title: 'API Integration', status: 'Completed', priority: 'medium' },
  { id: 3, assignee: 'Sarah', title: 'Marketing Plan', status: 'Pending', priority: 'low' },
  { id: 4, assignee: 'Mike', title: 'User Testing', status: 'Overdue', priority: 'critical' },
];

function AllTask() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative backdrop-blur-lg bg-zinc-900/50 border border-cyan-500/30 rounded-2xl p-6 md:p-8 mt-6"
    >
      <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
        Active Tasks
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-xl bg-zinc-800/30 border-2 ${
              task.priority === 'high' ? 'border-red-500/30' :
              task.priority === 'critical' ? 'border-purple-500/30' :
              'border-cyan-500/30'
            } hover:border-cyan-400/50 transition-all`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="text-lg font-semibold">{task.title}</h4>
                <p className="text-sm text-cyan-400">{task.assignee}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                task.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                task.status === 'Overdue' ? 'bg-red-500/20 text-red-400' :
                'bg-cyan-500/20 text-cyan-400'
              }`}>
                {task.status}
              </span>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Priority:</span>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  task.priority === 'high' ? 'bg-red-500' :
                  task.priority === 'critical' ? 'bg-purple-500' :
                  'bg-cyan-500'
                }`} />
                <span className="capitalize">{task.priority}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default AllTask;