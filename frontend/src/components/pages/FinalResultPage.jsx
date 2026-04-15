import React from 'react'

const FinalResultPage = ({ setCurrentPage, finalAnalysis }) => {
	const { summary, verdicts, topic, riskTolerance } = finalAnalysis || {}

	return (
		<main className="min-h-screen bg-linear-to-b from-[#020817] via-[#030d20] to-[#01050f] px-4 py-12 sm:px-6 sm:py-16">
			<div className="mx-auto max-w-6xl">
				<div className="mb-5">
					<button
						onClick={() => setCurrentPage('stock-picker')}
						className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
					>
						Return to AI Stock Picker
					</button>
				</div>

				<section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-7 sm:p-8">
					<p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">Final Result</p>
					<h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
						{topic ? `${topic} Analysis` : 'CrewAI Analysis Report'}
					</h1>
					<p className="mt-3 text-slate-300">
						{riskTolerance ? `Risk level: ${riskTolerance}` : 'Review the summary and verdicts below.'}
					</p>
				</section>

				{summary ? (
					<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
						<h2 className="mb-4 text-lg font-semibold text-cyan-300">Full Summary</h2>
						<div className="max-h-[70vh] overflow-y-auto rounded-xl border border-slate-700 bg-slate-950/80 p-5">
							<p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-300">
								{summary}
							</p>
						</div>
					</section>
				) : (
					<section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-center text-slate-300">
						No final summary has been loaded yet.
					</section>
				)}

				{verdicts && verdicts.length > 0 && (
					<section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6">
						<h2 className="mb-4 text-lg font-semibold text-cyan-300">Verdict Cards</h2>
						<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
							{verdicts.map((item) => (
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
									{item.analysis && (
										<p className="mt-3 text-sm leading-relaxed text-slate-400">{item.analysis}</p>
									)}
								</div>
							))}
						</div>
					</section>
				)}
			</div>
		</main>
	)
}

export default FinalResultPage
