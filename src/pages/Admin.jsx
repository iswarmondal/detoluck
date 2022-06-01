import React from 'react'
import { Route, Routes } from 'react-router'
import AdminDashboardNavigation from '../components/AdminDashboardNavigation'
import AdminOrders from '../components/AdminOrders'

function Admin() {
  return (
    <div className='flex justify-between min-h-screen'>
      <AdminDashboardNavigation />
      <div className='border-2 flex-grow flex justify-center items-center'>
        <Routes>
              <Route path='orders' element={<AdminOrders />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin