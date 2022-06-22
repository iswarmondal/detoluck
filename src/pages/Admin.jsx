import React from 'react'
import { Route, Routes } from 'react-router'
import AdminAddNewProduct from '../components/AdminAddNewProduct'
import AdminDashboardNavigation from '../components/AdminDashboardNavigation'
import AdminOrders from '../components/AdminOrders'
import AdminProducts from '../components/AdminProducts'

function Admin() {
  return (
    <div className='flex justify-between min-h-screen'>
      <AdminDashboardNavigation />
      <div className='border-2 flex-grow flex justify-center items-center'>
        <Routes>
          <Route path='orders' element={<AdminOrders />} />
          <Route path='admin-products' element={<AdminProducts />} />
          <Route path='admin-products/add-new-product' element={<AdminAddNewProduct />} />
        </Routes>
      </div>
    </div>
  )
}

export default Admin