import React, { useState } from 'react'
import SimpleLanding from './components/SimpleLanding'
import DarkHomePage from './components/DarkHomePage'
import StockPickerPage from './components/pages/StockPickerPage'
import FinalResultPage from './components/pages/FinalResultPage'

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing')
  
  // This state is updated in StockPickerPage and read in FinalResultPage
  const [finalAnalysis, setFinalAnalysis] = useState({
    summary: '',
    verdicts: [],
    topic: '',
    riskTolerance: '',
  })

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <SimpleLanding setCurrentPage={setCurrentPage} />
      
      case 'agent-console':
        return <DarkHomePage setCurrentPage={setCurrentPage} />
      
      case 'stock-picker':
        return (
          <StockPickerPage 
            setCurrentPage={setCurrentPage} 
            setFinalAnalysis={setFinalAnalysis} 
          />
        )
      
      case 'final-result':
        return (
          <FinalResultPage 
            setCurrentPage={setCurrentPage} 
            finalAnalysis={finalAnalysis} 
          />
        )
      
      default:
        return <SimpleLanding setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30">
      {renderPage()}
    </div>
  )
}

export default App