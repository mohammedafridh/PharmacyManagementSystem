import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './Layout/DashboardLayout'
import './App.css'
import AllStock from './Pages/AllStock/AllStock'
import Purchase from './Pages/Purchase/Purchase'
import PurchaseReturns from './Pages/ExpiryReturns/PurchaseReturns'
import DNotes from './Pages/Documents/DNotes'
import Invoice from './Pages/Documents/Invoice'
import Order from './Pages/Documents/Order'
import RcdNotes from './Pages/Documents/RcdNotes'
import Slip from './Pages/Documents/Slip'
import DmgPurchase from './Pages/DamagedReturns/DmgPurchase'
import DmgSales from './Pages/DamagedReturns/DmgSales'
import RetSales from './Pages/ExpiryReturns/RetSales'
import Sales from './Pages/Sales/Sales'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardLayout />}>
        <Route path='allStock' index element={<AllStock />} />
        <Route path='purchase' element={<Purchase />} />
        <Route path='purchaseReturn' element={<PurchaseReturns />} />
        <Route path='dnotes' element={<DNotes />} />
        <Route path='invoice' element={<Invoice/>} />
        <Route path='order' element={<Order />} />
        <Route path='rcdnotes' element={<RcdNotes />} />
        <Route path='packingslip' element={<Slip />} />
        <Route path='dmgpurchase' element={<DmgPurchase />} />
        <Route path='dmgretsales' element={<DmgSales />} />
        <Route path='retsales' element={<RetSales />} />
        <Route path='sales' element={<Sales />} />
      </Route>
    </Routes>
  )
}

export default App