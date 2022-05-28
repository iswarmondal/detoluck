import React from 'react'
import AdminDashboardNavigation from '../components/AdminDashboardNavigation'

function Admin() {
  return (
    <div className='flex justify-between min-h-screen'>
        <AdminDashboardNavigation />
        <div className='border-2 flex-grow flex justify-center items-center'>
            <h1>Admin</h1>
        </div>
    </div>
  )
}

export default Admin