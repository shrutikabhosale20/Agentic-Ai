import React, { useState } from 'react'
import DarkFooter from '../DarkFooter'
import Process from '../Process'

const StockPickerPage = ({ setCurrentPage, setFinalAnalysis }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [activeTab, setActiveTab] = useState('research')
    const [fullSummary, setFullSummary] = useState('') 
    const [topic, setTopic] = useState('') 
    const [riskTolerance, setRiskTolerance] = useState('Medium')

    const handleSendQuery = async () => {
        if (!topic.trim()) {
            alert('Please enter a sector')
            return
        }

        setIsLoading(true)
        setActiveTab('research')
        
        try {
            const response = await fetch('http://127.0.0.1:8000/api/research', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    topic: topic.trim(),
                    risk_tolerance: riskTolerance 
                })
            });

            if (!response.ok) throw new Error("Backend is offline");
            
            const data = await response.json();
            setFullSummary(data.result);
            
        } catch (error) {
            console.error("Fetch error:", error);
            alert("Connection to API failed. Is the Python server running?");
        } finally {
            // Note: We don't set isLoading(false) here immediately if we want 
            // the <Process /> component to finish its animation sequence.
        }
    }

    const handleProcessComplete = () => {
        setIsLoading(false);
        setActiveTab('results');
    }

    const openFinalResultPage = () => {
        if (!fullSummary) {
            alert("Please run analysis first.");
            return;
        }
        setFinalAnalysis({
            summary: fullSummary,
            verdicts: [], // You can expand this later
            topic,
            riskTolerance,
        })
        setCurrentPage('final-result')
    }

    return (
        <main className="mx-auto max-w-6xl px-4 py-12">
            {/* Header Section */}
            <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-white">AlgoMinds AI Picker</h1>
                    <button onClick={openFinalResultPage} className="bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-4 py-2 rounded-xl hover:bg-cyan-500/20">
                        View Full Report
                    </button>
                </div>
            </div>

            {/* Main Interface */}
            <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                    {/* Tabs */}
                    <div className="mb-6 flex gap-4 border-b border-slate-700">
                        <button onClick={() => setActiveTab('research')} className={`pb-2 ${activeTab === 'research' ? 'border-b-2 border-cyan-500 text-cyan-300' : 'text-slate-400'}`}>Research</button>
                        <button onClick={() => setActiveTab('results')} className={`pb-2 ${activeTab === 'results' ? 'border-b-2 border-cyan-500 text-cyan-300' : 'text-slate-400'}`}>Results</button>
                    </div>

                    {activeTab === 'research' ? (
                        <div className="space-y-4">
                            <input 
                                className="w-full bg-slate-950 border border-slate-700 p-3 rounded-xl text-white"
                                placeholder="Enter sector (e.g. AI, Biotech)"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                            />
                            <select 
                                className="w-full bg-slate-950 border border-slate-700 p-3 rounded-xl text-white"
                                value={riskTolerance}
                                onChange={(e) => setRiskTolerance(e.target.value)}
                            >
                                <option value="Low">Low Risk</option>
                                <option value="Medium">Medium Risk</option>
                                <option value="High">High Risk</option>
                            </select>
                            <button 
                                onClick={handleSendQuery}
                                disabled={isLoading}
                                className="w-full bg-blue-600 hover:bg-blue-500 p-3 rounded-xl font-bold disabled:opacity-50"
                            >
                                {isLoading ? 'Processing...' : 'Start Analysis'}
                            </button>
                        </div>
                    ) : (
                        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 min-h-[200px]">
                            {fullSummary ? (
                                <pre className="text-sm text-slate-300 whitespace-pre-wrap">{fullSummary.substring(0, 500)}...</pre>
                            ) : (
                                <p className="text-slate-500 text-center mt-10">Run analysis to see a preview.</p>
                            )}
                        </div>
                    )}
                </div>

                {/* The Progress Sidebar */}
                <div className="relative">
                    <Process isLoading={isLoading} onComplete={handleProcessComplete} />
                </div>
            </section>
            <DarkFooter />
        </main>
    )
}

export default StockPickerPage