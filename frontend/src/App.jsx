import React, { useState } from 'react'
import SimpleLanding from './components/SimpleLanding'
import DarkHomePage from './components/DarkHomePage'
import StockPickerPage from './components/pages/StockPickerPage'

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing')

  const renderPage = () => {
    if (currentPage === 'landing') {
      return <SimpleLanding setCurrentPage={setCurrentPage} />
    }
    if (currentPage === 'agent-console') {
      return <DarkHomePage setCurrentPage={setCurrentPage} />
    }
    if (currentPage === 'stock-picker') {
      return <StockPickerPage setCurrentPage={setCurrentPage} />
    }
    return <SimpleLanding setCurrentPage={setCurrentPage} />
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {renderPage()}
    </div>
  )
}

export default App