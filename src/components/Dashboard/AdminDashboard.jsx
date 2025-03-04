import { motion } from 'framer-motion';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';
import { AuthContext } from '../../context/AuthProvider';
import React, {useContext} from "react"

function AdminDashboard() {

  const authData = useContext(AuthContext)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0 bg-grid-cyan-500/[0.02]' />
      <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/05 to-transparent opacity-15' />
      
      <div className='relative container mx-auto p-6 xl:p-10 space-y-8'>
        <Header />
        <CreateTask authData={authData}/>
        <AllTask authData={authData}/>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
    </motion.div>
  )
}

export default AdminDashboard;