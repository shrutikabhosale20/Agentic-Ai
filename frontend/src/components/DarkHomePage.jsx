import React, { useState } from 'react'

const DarkHomePage = ({ setCurrentPage }) => {
	const [activeTab, setActiveTab] = useState('home')
	const [query, setQuery] = useState('')

	return (
		<main className="min-h-screen bg-linear-to-b from-[#020817] via-[#030d20] to-[#01050f]">
			<div className="mx-auto max-w-7xl px-4 py-6">
				{/* Header with Back Button */}
				<div className="mb-8 flex items-center justify-between">
					<button
						onClick={() => setCurrentPage('landing')}
						className="h-10 rounded-lg border border-slate-700 px-4 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-slate-100"
					>
						← Back to Home
					</button>
					<h1 className="text-center text-4xl font-bold text-white">AI Stock Picker Agent</h1>
					<div className="h-10 w-24"></div>
				</div>

				{/* Tabs */}
				<div className="mb-8 flex justify-center gap-4">
					<button
						onClick={() => setActiveTab('home')}
						className={`h-12 rounded-xl px-8 font-semibold transition ${
							activeTab === 'home'
								? 'bg-cyan-500 text-black'
								: 'border border-slate-700 bg-slate-900/50 text-slate-200 hover:border-slate-600'
						}`}
					>
						Home
					</button>
					<button
						onClick={() => setActiveTab('process')}
						className={`h-12 rounded-xl px-8 font-semibold transition ${
							activeTab === 'process'
								? 'bg-cyan-500 text-black'
								: 'border border-slate-700 bg-slate-900/50 text-slate-200 hover:border-slate-600'
						}`}
					>
						Process
					</button>
					<button
						onClick={() => setActiveTab('results')}
						className={`h-12 rounded-xl px-8 font-semibold transition ${
							activeTab === 'results'
								? 'bg-cyan-500 text-black'
								: 'border border-slate-700 bg-slate-900/50 text-slate-200 hover:border-slate-600'
						}`}
					>
						Results
					</button>
				</div>

				{/* Content Area */}
				<div className="grid gap-6 lg:grid-cols-4">
					{/* Left Sidebar */}
					<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 lg:col-span-1">
						<p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
							{activeTab === 'home' && 'Start'}
							{activeTab === 'process' && 'Process Steps'}
							{activeTab === 'results' && 'Result Sections'}
						</p>

						{activeTab === 'home' && (
							<div className="space-y-3">
								<button className="w-full rounded-lg bg-cyan-500/20 px-4 py-3 text-left font-semibold text-cyan-300 transition hover:bg-cyan-500/30">
									New Analysis
								</button>
								<button className="w-full rounded-lg px-4 py-3 text-left font-medium text-slate-300 transition hover:bg-slate-800/70">
									Examples
								</button>
							</div>
						)}

						{activeTab === 'process' && (
							<div className="space-y-4">
								<div className="flex gap-3">
									<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-black">
										●
									</div>
									<div>
										<p className="font-semibold text-slate-100">Planning</p>
										<p className="text-xs text-slate-400">Defining research objective</p>
									</div>
								</div>
								<div className="flex gap-3">
									<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-500/50 bg-cyan-500/10 text-sm font-bold text-cyan-300">
										◆
									</div>
									<div>
										<p className="font-semibold text-slate-100">Searching</p>
										<p className="text-xs text-slate-400">Analyzing stock data</p>
									</div>
								</div>
								<div className="flex gap-3">
									<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-600 text-sm font-bold text-slate-500">
										◯
									</div>
									<div>
										<p className="font-semibold text-slate-100">Finalizing</p>
										<p className="text-xs text-slate-400">Preparing results</p>
									</div>
								</div>
							</div>
						)}

						{activeTab === 'results' && (
							<div className="space-y-3">
								<button className="w-full rounded-lg bg-cyan-500/20 px-4 py-3 text-left font-semibold text-cyan-300 transition hover:bg-cyan-500/30">
									Summary
								</button>
								<button className="w-full rounded-lg px-4 py-3 text-left font-medium text-slate-300 transition hover:bg-slate-800/70">
									Companies
								</button>
								<button className="w-full rounded-lg px-4 py-3 text-left font-medium text-slate-300 transition hover:bg-slate-800/70">
									Back To Process
								</button>
							</div>
						)}
					</div>

					{/* Main Content */}
					<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 lg:col-span-3">
						{activeTab === 'home' && (
							<div className="flex flex-col items-center justify-center gap-6 py-12">
								<p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Mission Brief</p>
								<h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
									Which stocks should the agent analyze?
								</h2>
								<div className="w-full max-w-xl">
									<textarea
										value={query}
										onChange={(e) => setQuery(e.target.value)}
										placeholder="e.g., Find bullish tech stocks with strong fundamentals..."
										className="h-32 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-base text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
									/>
								</div>
								<button
									onClick={() => setCurrentPage('stock-picker')}
									className="h-12 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-12 text-base font-semibold text-white transition hover:from-cyan-400 hover:to-blue-500"
								>
									Start Agent
								</button>
							</div>
						)}

						{activeTab === 'process' && (
							<div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
								{/* Left: Process Details */}
								<div>
									<h3 className="mb-6 text-2xl font-bold text-white">Process</h3>
									<div className="space-y-6">
										<div>
											<p className="flex items-center gap-2 text-lg font-bold text-white">
												<span className="text-cyan-500">●</span> Planning
											</p>
											<p className="mt-2 text-slate-300">Building research strategy and constraints.</p>
										</div>
										<div>
											<p className="flex items-center gap-2 text-lg font-bold text-white">
												<span className="text-cyan-500">◆</span> Searching
											</p>
											<p className="mt-2 text-slate-300">Gathering stock data and analyzing patterns.</p>
										</div>
										<div>
											<p className="flex items-center gap-2 text-lg font-bold text-white">
												<span className="text-slate-500">◯</span> Finalizing
											</p>
											<p className="mt-2 text-slate-300">Synthesizing results for export.</p>
										</div>
									</div>
								</div>

								{/* Right: Status Logs */}
								<div>
									<div className="min-h-96 rounded-xl border border-slate-700 bg-slate-950 p-7">
										<div className="mb-4 flex items-center gap-2">
											<span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
											<span className="inline-block h-3 w-3 rounded-full bg-yellow-500"></span>
											<span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
											<span className="ml-auto text-xs font-semibold text-slate-500 uppercase">Status Logs</span>
										</div>
										<div className="space-y-3 text-base font-mono text-green-400">
											<p>{'>'} Booting agent runtime...</p>
											<p>{'>'} Mission target: AI Stock Analysis</p>
											<p>{'>'} Building execution plan...</p>
											<p>{'>'} Running market analysis...</p>
											<p>{'>'} Consolidating findings...</p>
											<p>{'>'} Packaging results for export...</p>
										</div>
									</div>
								</div>
							</div>
						)}

						{activeTab === 'results' && (
							<div>
								<h3 className="mb-8 text-2xl font-bold text-white">Top Stock Picks</h3>
								<div className="space-y-4">
									{[
										{ symbol: 'NVDA', verdict: 'Strong Buy', score: 9.2, risk: 'Medium' },
										{ symbol: 'MSFT', verdict: 'Buy', score: 8.8, risk: 'Low' },
										{ symbol: 'AMZN', verdict: 'Buy', score: 8.5, risk: 'Medium' },
										{ symbol: 'GOOGL', verdict: 'Hold', score: 7.9, risk: 'Low' },
									].map((stock) => (
										<div key={stock.symbol} className="rounded-lg border border-slate-700 bg-slate-950 p-4">
											<div className="flex items-center justify-between">
												<div>
													<p className="text-lg font-bold text-white">{stock.symbol}</p>
													<p className="text-sm text-slate-400">{stock.verdict}</p>
												</div>
												<div className="text-right">
													<p className="text-2xl font-bold text-cyan-400">{stock.score}</p>
													<p className="text-sm text-slate-400">{stock.risk} Risk</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}

export default DarkHomePage
