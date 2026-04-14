import React from 'react'
import DarkFooter from '../DarkFooter'

const StockPickerPage = ({ setCurrentPage }) => {
	return (
		<main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
			<div className="mb-5">
				<button
					onClick={() => setCurrentPage('home')}
					className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
				>
					Back to Home
				</button>
			</div>

			<section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-7 sm:p-8">
				<h1 className="text-3xl font-bold text-white sm:text-4xl">AI Stock Picker Chatbot</h1>
				<p className="mt-3 text-slate-300">
					Ask the chatbot for stock picks. It will return the latest verdict summary and risk-aware recommendation.
				</p>
			</section>

			<section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
				<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
					<div className="mb-4 flex items-center justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Agent Chat</p>
							<p className="text-sm text-slate-400">CrewAI + FastAPI ready</p>
						</div>
						<span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
							Online
						</span>
					</div>

					<div className="space-y-4">
						<div className="max-w-xl rounded-2xl rounded-tl-md border border-slate-800 bg-slate-950/80 p-4 text-slate-200">
							What are the best AI stocks for this week?
						</div>
						<div className="max-w-2xl rounded-2xl rounded-tr-md border border-indigo-500/30 bg-indigo-500/10 p-4 text-slate-100">
							NVDA, MSFT, and AMZN are the strongest candidates. They score highly on momentum, earnings quality, and AI demand. Risk remains medium due to volatility.
						</div>
						<div className="max-w-xl rounded-2xl rounded-tl-md border border-slate-800 bg-slate-950/80 p-4 text-slate-200">
							Show me a safer pick.
						</div>
						<div className="max-w-2xl rounded-2xl rounded-tr-md border border-indigo-500/30 bg-indigo-500/10 p-4 text-slate-100">
							MSFT is the safer option. It has a lower risk profile, stable cash flow, and strong cloud growth.
						</div>
					</div>

					<div className="mt-6 flex flex-col gap-3 sm:flex-row">
						<input
							type="text"
							placeholder="Ask about stock ideas, risk, or trend..."
							className="h-12 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 text-sm text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
						/>
						<button className="h-12 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-6 text-sm font-semibold text-white transition hover:from-indigo-500 hover:to-blue-500">
							Send
						</button>
					</div>
				</div>

				<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
					<p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Verdict Cards</p>
					<p className="mt-1 text-sm text-slate-400">Replace with backend JSON results.</p>

					<div className="mt-4 space-y-3">
						{[
							{ symbol: 'NVDA', verdict: 'Buy', confidence: '92%', risk: 'Medium' },
							{ symbol: 'MSFT', verdict: 'Buy', confidence: '88%', risk: 'Low' },
							{ symbol: 'AMZN', verdict: 'Watch', confidence: '84%', risk: 'Medium' },
						].map((item) => (
							<div key={item.symbol} className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
								<div className="flex items-center justify-between">
									<p className="text-lg font-bold text-white">{item.symbol}</p>
									<span className="rounded bg-cyan-600/20 px-2 py-1 text-xs font-semibold text-cyan-300">
										{item.verdict}
									</span>
								</div>
								<div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-300">
									<p>Confidence</p>
									<p className="text-right">{item.confidence}</p>
									<p>Risk</p>
									<p className="text-right">{item.risk}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<DarkFooter />
		</main>
	)
}

export default StockPickerPage
