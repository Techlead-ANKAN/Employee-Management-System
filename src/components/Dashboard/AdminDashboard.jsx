import React from 'react'
import Header from '../others/Header'

function AdminDashboard() {
  return (
    <div className='h-screen w-full p-10'>
        <Header/>

        <div>
            <form action="">
                <h3>Task Title</h3>
                <input type="text" placeholder='make a ui design'/>
                
                <h3>Description</h3>
                <input name="" id="" cols="30" rows="10" type="textarea" />

                <h3>Date</h3>
                <input type="date" />

                <h3>Assign To</h3>
                <input type="text" placeholder="employee name"/>
                
                <h3>Category</h3>
                <input type="text" placeholder='design/dev/...'/>

                <button>Create Task</button>
            </form>
        </div>
    </div>
  )
}

export default AdminDashboard