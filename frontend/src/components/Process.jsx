import React, { useState, useEffect } from 'react'
import { Check } from 'lucide-react'

// STEPS constant array with all required data
const STEPS = [
	{
		id: 1,
		label: 'Market Scanning',
		description: 'Identifying trending AI sectors',
		logMessages: [
			'Analyzing NASDAQ technicals...',
			'Scanning sector momentum...',
			'Identifying AI trend leaders...',
			'Processing market data...',
			'Building technical score matrix...',
		],
	},
	{
		id: 2,
		label: 'Financial Deep-Dive',
		description: 'Analyzing revenue & balance sheets',
		logMessages: [
			'Fetching financial statements...',
			'Calculating Sharpe Ratio...',
			'Analyzing revenue growth...',
			'Evaluating cash flow metrics...',
			'Computing debt-to-equity ratios...',
		],
	},
	{
		id: 3,
		label: 'Risk Analysis',
		description: 'Evaluating moats & volatility',
		logMessages: [
			'Evaluating competitive moats...',
			'Calculating volatility indices...',
			'Assessing market risks...',
			'Computing beta coefficients...',
			'Analyzing risk-reward profiles...',
		],
	},
	{
		id: 4,
		label: 'Finalizing Strategy',
		description: 'Packaging investment thesis',
		logMessages: [
			'Compiling research findings...',
			'Generating investment thesis...',
			'Creating portfolio recommendations...',
			'Finalizing verdict summary...',
			'Process complete!',
		],
	},
]

const Process = ({ isLoading, onComplete }) => {
	const [currentStep, setCurrentStep] = useState(1)
	const [displayedLogs, setDisplayedLogs] = useState([])
	const [logIndex, setLogIndex] = useState(0)

	// Progress through steps every 10 seconds when loading
	useEffect(() => {
		if (!isLoading) return

		const stepInterval = setInterval(() => {
			setCurrentStep((prev) => {
				if (prev < 3) {
					return prev + 1
				}
				return prev
			})
		}, 10000) // 10 seconds

		return () => clearInterval(stepInterval)
	}, [isLoading])

	// Typeout effect for logs
	useEffect(() => {
		if (!isLoading) return

		const currentStepData = STEPS[currentStep - 1]
		const currentLogs = currentStepData.logMessages

		// Reset logs when step changes
		if (displayedLogs.length === 0) {
			setLogIndex(0)
		}

		if (logIndex >= currentLogs.length) return

		const typeoutTimer = setTimeout(() => {
			setDisplayedLogs((prev) => {
				const newLogs = [...prev]
				if (!newLogs.includes(currentLogs[logIndex])) {
					newLogs.push(currentLogs[logIndex])
				}
				return newLogs
			})
			setLogIndex((prev) => prev + 1)
		}, 800) // 800ms between log messages

		return () => clearTimeout(typeoutTimer)
	}, [isLoading, logIndex, displayedLogs, currentStep])

	// When API result returns, jump to step 4
	useEffect(() => {
		if (!isLoading && currentStep < 4) {
			setCurrentStep(4)
			setDisplayedLogs([])
			setLogIndex(0)
			if (onComplete) {
				onComplete()
			}
		}
	}, [isLoading, onComplete, currentStep])

	return (
		<div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
			{/* Steps Progress */}
			<div>
				<h3 className="mb-6 text-lg font-bold text-white">Research Progress</h3>

				<div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
					{STEPS.map((step) => {
						const isActive = step.id === currentStep
						const isCompleted = step.id < currentStep
						const isPending = step.id > currentStep

						return (
							<div
								key={step.id}
								className={`relative rounded-xl border p-4 transition-all duration-300 ${
									isActive
										? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
										: isCompleted
											? 'border-emerald-500/30 bg-emerald-500/10'
											: 'border-slate-700 bg-slate-800/50'
								}`}
								style={
									isActive
										? {
												animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
											}
										: {}
								}
							>
								{/* Step Number or Checkmark */}
								<div
									className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
										isCompleted
											? 'bg-emerald-500 text-white'
											: isActive
												? 'bg-cyan-500 text-white'
												: isPending
													? 'bg-slate-700 text-slate-400'
													: ''
									}`}
								>
									{isCompleted ? <Check size={18} /> : step.id}
								</div>

								<h4 className={`mt-3 text-sm font-semibold ${isActive ? 'text-cyan-300' : 'text-slate-200'}`}>
									{step.label}
								</h4>
								<p className="mt-1 text-xs text-slate-400">{step.description}</p>
							</div>
						)
					})}
				</div>
			</div>

			{/* Status Logs Terminal */}
			<div>
				<h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">Status Logs</h3>
				<div className="max-h-80 min-h-64 overflow-y-auto rounded-xl border border-slate-700 bg-slate-950/80 p-5 font-mono text-base text-slate-200">
					{displayedLogs.length > 0 ? (
						<div className="space-y-1">
							{displayedLogs.map((log, idx) => (
								<div key={idx} className="text-cyan-400">
									{'> '} {log}
								</div>
							))}
							{isLoading && <div className="mt-2 animate-pulse text-slate-400">Processing...</div>}
						</div>
					) : (
						<div className="text-slate-500">Awaiting analysis start...</div>
					)}
				</div>
			</div>

			{/* Style for pulse animation */}
			<style>{`
				@keyframes pulse {
					0%, 100% {
						opacity: 1;
					}
					50% {
						opacity: 0.7;
					}
				}
			`}</style>
		</div>
	)
}

export default Process
