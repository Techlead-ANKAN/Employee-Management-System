import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

function AllTask( {authData} ) {
  // const [employeesData, setEmployeesData] = useState([]);

  // console.log("AllTask: ", authData)

  // useEffect(() => {
  //   setEmployeesData(authData);
  // }, [authData]);

  // console.log("emp: ", employeesData.authData)

  console.log(authData)



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative backdrop-blur-lg bg-zinc-900/50 border border-cyan-500/30 rounded-2xl p-4 md:p-8 mt-6"
    >
      <div className="overflow-x-auto pb-2">
        <table className="w-full table-auto border-collapse">
          <thead className="bg-zinc-800/50">
            <tr>
              {['ID', 'Name', 'Email', 'Active', 'New', 'Completed', 'Failed'].map((header) => (
                <th 
                  key={header}
                  className="px-2 py-2 md:px-4 md:py-3 text-center text-cyan-400 border-b border-cyan-500/30 text-xs sm:text-sm font-medium"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {authData.map((employee) => (
              <tr 
                key={employee.id}
                className="hover:bg-zinc-800/20 transition-colors"
              >
                <td className="px-2 py-2 md:px-4 md:py-3 border-b border-cyan-500/30 text-xs sm:text-sm text-zinc-300 text-center">
                  {employee.id}
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 border-b border-cyan-500/30 text-xs sm:text-sm text-zinc-300 text-center">
                  {employee.first_name}
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 border-b border-cyan-500/30 text-xs sm:text-sm text-zinc-300 text-center">
                  {employee.email}
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 border-b border-cyan-500/30 text-xs sm:text-sm text-center">
                  <span className="text-cyan-400">{employee.task_numbers.active}</span>
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 border-b border-cyan-500/30 text-xs sm:text-sm text-center">
                  <span className="text-emerald-400">{employee.task_numbers.new_task}</span>
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 border-b border-cyan-500/30 text-xs sm:text-sm text-center">
                  <span className="text-green-400">{employee.task_numbers.completed}</span>
                </td>
                <td className="px-2 py-2 md:px-4 md:py-3 border-b border-cyan-500/30 text-xs sm:text-sm text-center">
                  <span className="text-red-400">{employee.task_numbers.failed}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default AllTask;