import { motion } from 'framer-motion';
import React from 'react'

function NewTask({ data }) {

    if (!data || !data.tasks) {
        return <div>No tasks available</div>;
    }

    const tasks = [];
    let tasks_len = data.tasks.length;
    let new_tasks = data.task_numbers.new_task;

    for (let i = 0; i < tasks_len; i++) {
        if (data.tasks[i].new_task == true) {
            tasks.push({
                title: data.tasks[i].task_title,
                priority: data.tasks[i].priority,
                desc: data.tasks[i].task_description,
                date: data.tasks[i].task_date,
                color: "bg-cyan-500",
                status: "New Task"
            });
        }
    }

    return (
        <>
            {new_tasks === 0 ? (<></>) : (
                <div>
                    <h3 className='text-2xl font-bold text-white mb-5'>New Tasks</h3>
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
                                    <span className='text-sm text-zinc-200'>{task.date}</span>
                                </div>
                                <h3 className='text-xl font-semibold mb-2'>{task.title}</h3>
                                <p className='text-sm text-zinc-400 line-clamp-2 mb-4'>
                                    {task.desc}
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
                                    <div className='flex gap-2'>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className='px-3 py-2 rounded-lg transition-all duration-300 
                                            bg-gradient-to-r from-cyan-500/20 to-blue-500/10 
                                            hover:from-cyan-500/30 hover:to-blue-500/20
                                            border border-cyan-400/30 hover:border-cyan-300/50
                                            group relative overflow-hidden'
                                            title='Accept Task'
                                        >
                                            <div className='absolute inset-0 bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300' />
                                            <span className='text-sm font-medium text-cyan-300 group-hover:text-cyan-100'>
                                                Accept
                                            </span>
                                        </motion.button>
                                        <button className='p-2 hover:bg-zinc-700 rounded-lg transition-colors'>
                                            <svg className='w-5 h-5' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default NewTask