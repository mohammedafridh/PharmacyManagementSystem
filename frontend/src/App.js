import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './Layout/DashboardLayout'
import './App.css'
import AllStock from './Pages/AllStock/AllStock'
import Purchase from './Pages/Purchase/Purchase'
import PurchaseReturns from './Pages/ExpiryReturns/PurchaseReturns'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardLayout />}>
        <Route path='allStock' element={<AllStock />} />
        <Route path='purchase' element={<Purchase />} />
        <Route path='purchaseReturn' element={<PurchaseReturns />} />
      </Route>
    </Routes>
  )
}

export default App