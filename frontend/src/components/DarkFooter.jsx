import React from 'react'

const DarkFooter = () => {
	return (
		<footer className="border-t border-slate-800 bg-slate-950">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
				{/* Top Section */}
				<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{/* Brand */}
					<div>
						<h3 className="text-lg font-bold text-white">AI Stock Picker</h3>
						<p className="mt-2 text-sm text-slate-400">
							AI-powered stock analysis and research powered by autonomous agents.
						</p>
					</div>

					{/* Product */}
					<div>
						<h4 className="font-semibold text-slate-200">Product</h4>
						<ul className="mt-4 space-y-2 text-sm text-slate-400">
							<li>
								<button className="transition hover:text-slate-100">Agent Analysis</button>
							</li>
							<li>
								<button className="transition hover:text-slate-100">Research Tools</button>
							</li>
							<li>
								<button className="transition hover:text-slate-100">Market Movers</button>
							</li>
							<li>
								<button className="transition hover:text-slate-100">Watchlist</button>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h4 className="font-semibold text-slate-200">Company</h4>
						<ul className="mt-4 space-y-2 text-sm text-slate-400">
							<li>
								<button className="transition hover:text-slate-100">About</button>
							</li>
							<li>
								<button className="transition hover:text-slate-100">Blog</button>
							</li>
							<li>
								<button className="transition hover:text-slate-100">Careers</button>
							</li>
							<li>
								<button className="transition hover:text-slate-100">Contact</button>
							</li>
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h4 className="font-semibold text-slate-200">Legal</h4>
						<ul className="mt-4 space-y-2 text-sm text-slate-400">
							<li>
								<button className="transition hover:text-slate-100">Privacy Policy</button>
							</li>
							<li>
								<button className="transition hover:text-slate-100">Terms of Service</button>
							</li>
							<li>
								<button className="transition hover:text-slate-100">Disclaimer</button>
							</li>
							<li>
								<button className="transition hover:text-slate-100">Support</button>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="mt-12 border-t border-slate-800 pt-8">
					<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
						<p className="text-sm text-slate-500">
							© 2026 AI Stock Picker. All rights reserved.
						</p>
						<div className="flex gap-6 text-sm text-slate-500">
							<button className="transition hover:text-slate-300">Twitter</button>
							<button className="transition hover:text-slate-300">LinkedIn</button>
							<button className="transition hover:text-slate-300">GitHub</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default DarkFooter
