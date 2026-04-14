import React from 'react'
import DarkFooter from './DarkFooter'

const SimpleLanding = ({ setCurrentPage }) => {
	return (
		<main className="min-h-screen bg-linear-to-b from-[#020817] via-[#030d20] to-[#01050f]">
			{/* Mobile Top Nav */}
			<div className="flex lg:hidden gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/70">
				<div className="flex-1">
					<div className="text-xl font-extrabold text-indigo-400">Stock Picker Agent</div>
				</div>
				<button
					onClick={() => setCurrentPage('agent-console')}
					className="h-9 rounded-lg bg-indigo-600/20 px-3 text-xs font-semibold text-indigo-300 transition hover:bg-indigo-600/30"
				>
					AI Picker
				</button>
			</div>

			<div className="mx-auto flex max-w-7xl gap-4 px-3 py-3 sm:px-4">
				{/* Sidebar - Desktop Only */}
				<aside className="hidden w-64 shrink-0 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 lg:flex lg:flex-col">
					<div className="mb-6 text-2xl font-extrabold tracking-tight text-indigo-400">Stock Picker Agent</div>
					<nav className="space-y-2 text-slate-300">
						<button className="w-full rounded-lg bg-slate-800/80 px-4 py-2 text-sm text-left font-medium text-white">
							Home
						</button>
						<button
							onClick={() => setCurrentPage('agent-console')}
							className="w-full rounded-lg bg-indigo-600/20 px-4 py-2 text-sm text-left font-semibold text-indigo-300 transition hover:bg-indigo-600/30"
						>
							AI Stock Picker
						</button>
					</nav>

					<div className="mt-auto space-y-3 pt-6">
						<button className="w-full rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400">
							Sign Up
						</button>
						<button className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-500">
							Log In
						</button>
					</div>
				</aside>

				{/* Main Content */}
				<section className="relative flex-1 rounded-2xl border border-slate-900 bg-[#020b1d]/80 p-4 sm:p-6 lg:p-10">
					{/* Badge */}
					<div className="mb-8 flex items-center gap-2">
						<div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-300">
							AI Stock Picker Agent
						</div>
					</div>

					{/* Top Right Nav - Desktop Only */}
					<div className="absolute right-4 top-4 hidden sm:flex lg:right-10 lg:top-10">
						<button className="h-9 rounded-lg border border-indigo-500/40 bg-indigo-500/20 px-3 text-xs font-semibold text-indigo-200 transition hover:bg-indigo-500/30">
							Pricing Plans
						</button>
					</div>

					{/* Hero */}
					<header className="mx-auto mb-8 max-w-3xl text-center">
						<h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
							Enhance your <span className="text-indigo-400">stock research</span> with AI
						</h1>
						<p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
							Get instant deep insights across stocks using an AI Stock Picker agent trained to score opportunities and explain every pick clearly.
						</p>
					</header>

					{/* Input Section */}
					<div className="mx-auto mb-10 max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/70 p-3 sm:p-4">
						<div className="mb-2 ml-2 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
							AI-Powered
						</div>
						<div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
							<input
								type="text"
								placeholder="Ask about stock picks..."
								className="h-12 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none sm:text-base sm:px-4"
							/>
							<button
								onClick={() => setCurrentPage('agent-console')}
								className="h-12 rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white transition hover:bg-indigo-500 sm:px-6"
							>
								Open
							</button>
						</div>
					</div>

					{/* Popular Today */}
					<div className="mb-4 text-center">
						<h3 className="text-lg font-bold text-white sm:text-xl">Popular today</h3>
					</div>
					<div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
						{[
							{ symbol: 'SPY', type: 'ETF', price: '$686.13', change: '+0.97%' },
							{ symbol: 'SNDK', type: 'STOCK', price: '$952.50', change: '+10.58%' },
							{ symbol: 'MSFT', type: 'STOCK', price: '$384.37', change: '+3.51%' },
							{ symbol: 'PLTR', type: 'STOCK', price: '$113.80', change: '+3.22%' },
							{ symbol: 'NVDA', type: 'STOCK', price: '$189.31', change: '+0.30%' },
							{ symbol: 'USO', type: 'ETF', price: '$128.47', change: '+2.84%' },
							{ symbol: 'MU', type: 'STOCK', price: '$426.56', change: '+1.40%' },
							{ symbol: 'QQQ', type: 'ETF', price: '$602.42', change: '+1.02%' },
						].map((item) => (
							<article key={item.symbol} className="rounded-lg border border-slate-800 bg-slate-900/75 p-3 transition hover:border-indigo-500/40 sm:p-4">
								<div className="mb-2 flex items-center justify-between">
									<p className="text-lg font-bold text-white sm:text-xl">{item.symbol}</p>
									<p className="text-xs uppercase tracking-wide text-slate-400">{item.type}</p>
								</div>
								<p className="text-base font-semibold text-slate-300 sm:text-lg">{item.price}</p>
								<p className="mt-1 text-xs font-semibold text-emerald-400 sm:text-sm">{item.change}</p>
							</article>
						))}
					</div>
				</section>
			</div>
			<DarkFooter />
		</main>
	)
}

export default SimpleLanding
