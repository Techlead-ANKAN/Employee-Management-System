import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import {AuthContext} from "../../context/AuthProvider"

function CreateTask() {

  const [userData, setUserData] = useContext(AuthContext)
  // console.log("Checking: ", userData.employees.length)

  const emps = []
  let str = ""
  for (let i = 0; i < userData.length; i++) {
    str = `${userData[i].first_name}`;
    emps.push(str)
  }
  
  
  const [taskData, setTaskData] = useState({
    task_title: '',
    task_date: '',
    assigned_to: '',
    priority: '',
    task_description: '',
    active: false,
    new_task: true,
    completed: false,
    failed: false
  })
  
  // const createTaskHandler = (e) => {
  //   e.preventDefault()
    
  //   const data = userData
  //   console.log(data)

  //   data.forEach(function(emp){
  //     if(taskData.assigned_to == emp.first_name){
  //       emp.tasks.push(taskData);
  //       emp.task_numbers.new_task = emp.task_numbers.new_task+1;
  //     }
  //   })
  //   setUserData(taskData)


  //   setTaskData({
  //     title: '',
  //     date: '',
  //     assigned_to: '',
  //     priority: '',
  //     desc: '',
  //     active: true,
  //     new_task: true,
  //     completed: false,
  //     failed: false
  //   });
  // }

  const createTaskHandler = (e) => {
    e.preventDefault()
  
    const updatedUserData = userData.map((emp) => {
      if (emp.first_name === taskData.assigned_to) {
        emp.tasks.push(taskData);
        emp.task_numbers.new_task = emp.task_numbers.new_task + 1;
      }
      return emp;
    });
  
    setUserData(updatedUserData);
  
    setTaskData({
      task_title: '',
      task_date: '',
      assigned_to: '',
      priority: '',
      task_description: '',
      active: false,
      new_task: true,
      completed: false,
      failed: false
    });
  };


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
              value={taskData.title}
              onChange={(e) => { setTaskData({ ...taskData, title: e.target.value }) }}
              required
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
              value={taskData.date}
              onChange={(e) => { setTaskData({ ...taskData, date: e.target.value }) }}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium text-cyan-400 mb-2">Assign To</label>
            <select className="w-full bg-zinc-800/30 border-2 border-cyan-500/20 rounded-lg py-3 px-4 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50 transition-all"
              value={taskData.assigned_to}
              onChange={(e) => { setTaskData({ ...taskData, assigned_to: e.target.value }) }}
              required
            >
              <option value="" disabled selected>Choose an option</option>
              {emps.map((employee, index) => (
                <option key={index}>{employee}</option>
              ))
              }
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block text-sm font-medium text-cyan-400 mb-2">Priority</label>
            <select className="w-full bg-zinc-800/30 border-2 border-cyan-500/20 rounded-lg py-3 px-4 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50 transition-all"
              value={taskData.priority}
              onChange={(e) => { setTaskData({ ...taskData, priority: e.target.value }) }}
              required
            >
              <option value="" disabled selected>Choose an option</option>
              <option>High</option>
              <option>Critical</option>
              <option>Medium</option>
              <option>Low</option>
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
              value={taskData.desc}
              onChange={(e) => {setTaskData({...taskData, desc: e.target.value})}}
              required
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-cyan-glow transition-all self-end"
            onClick={(e) => {createTaskHandler(e)}}
          >
            Create Task
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}

export default CreateTask;