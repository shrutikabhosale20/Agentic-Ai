import React, { useState } from 'react'
import DarkFooter from './DarkFooter'

const SimpleLanding = ({ setCurrentPage }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [showAuthModal, setShowAuthModal] = useState(false)
	const [authMode, setAuthMode] = useState('login') // 'login' or 'signup'
	const heroHeading = 'Enhance your stock research with AI'

	const handleSignUp = () => {
		setAuthMode('signup')
		setShowAuthModal(true)
	}

	const handleLogIn = () => {
		setAuthMode('login')
		setShowAuthModal(true)
	}

	const handleAuthSubmit = () => {
		setIsAuthenticated(true)
		setShowAuthModal(false)
		setCurrentPage('agent-console')
	}

	return (
		<main className="min-h-screen w-full bg-linear-to-b from-[#020817] via-[#030d20] to-[#01050f]">
			{/* Mobile Top Nav */}
			<div className="flex lg:hidden gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/70 w-full">
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

			<div className="mx-auto flex w-full gap-0 px-0 py-0 lg:gap-4 lg:px-3 lg:py-3">
				{/* Sidebar - Desktop Only */}
				<aside className="hidden w-64 shrink-0 rounded-0 lg:rounded-2xl border-0 lg:border border-slate-800 bg-slate-900/70 p-4 lg:flex lg:flex-col lg:m-3">
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
						<button 
							onClick={handleSignUp}
							className="w-full rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
						>
							Sign Up
						</button>
						<button 
							onClick={handleLogIn}
							className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
						>
							Log In
						</button>
					</div>
				</aside>

				{/* Main Content */}
				<section className="relative flex-1 rounded-0 lg:rounded-2xl border-0 lg:border border-slate-900 bg-[#020b1d]/80 p-4 sm:p-6 lg:p-10 w-full lg:m-3">
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
					<header className="mx-auto mb-8 max-w-full text-center">
						<h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl" aria-label={heroHeading}>
							{heroHeading.split('').map((char, index) => (
								<span
									key={`${char}-${index}`}
									className={`landing-hero-letter${char === ' ' ? ' landing-hero-space' : ''}`}
									style={{ animationDelay: `${index * 0.05}s` }}
								>
									{char === ' ' ? '\u00A0' : char}
								</span>
							))}
						</h1>
						<p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
							Get instant deep insights across stocks using an AI Stock Picker agent trained to score opportunities and explain every pick clearly.
						</p>
					</header>

					{/* Input Section */}
					<div className="mx-auto mb-10 max-w-full rounded-2xl border border-slate-800 bg-slate-900/70 p-3 sm:p-4">
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

					{/* How Our AI Agents Work */}
					<div className="mt-16 pt-8 border-t border-slate-800">
						<div className="mb-8 text-center">
							<h2 className="text-2xl font-bold text-white sm:text-3xl">How Stock Agent Works</h2>
							<p className="mt-2 text-slate-400">Our 4-agent system analyzes stocks from every angle</p>
						</div>

						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
							{[
								{
									icon: '📊',
									title: 'Market Scanning',
									description: 'Analyzes NASDAQ technicals and identifies trending AI sectors',
									color: 'cyan'
								},
								{
									icon: '💰',
									title: 'Financial Deep-Dive',
									description: 'Calculates Sharpe ratio and evaluates revenue & balance sheets',
									color: 'emerald'
								},
								{
									icon: '⚠️',
									title: 'Risk Analysis',
									description: 'Evaluates competitive moats and calculates volatility indices',
									color: 'amber'
								},
								{
									icon: '🎯',
									title: 'Portfolio Manager',
									description: 'Packages investment thesis and creates final recommendations',
									color: 'indigo'
								},
							].map((agent, idx) => (
								<div key={idx} className="rounded-xl border border-slate-700 bg-slate-900/50 p-4 hover:border-slate-600 transition">
									<div className="text-3xl mb-3">{agent.icon}</div>
									<h3 className="font-semibold text-white">{agent.title}</h3>
									<p className="mt-2 text-sm text-slate-400">{agent.description}</p>
								</div>
							))}
						</div>
					</div>

					{/* Key Features */}
					<div className="mt-16 pt-8 border-t border-slate-800">
						<div className="mb-8 text-center">
							<h2 className="text-2xl font-bold text-white sm:text-3xl">Why Choose Stock Agent?</h2>
						</div>

						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
							{[
								{ title: 'Real-time Analysis', desc: 'Get instant insights on any stock in seconds' },
								{ title: 'Multi-Factor Scoring', desc: 'Combines technical, fundamental, and risk metrics' },
								{ title: 'Confidence Metrics', desc: 'See how confident our AI is in every recommendation' },
								{ title: 'Risk-Aware Picks', desc: 'Understand volatility and downside risk for each stock' },
								{ title: 'AI Transparency', desc: 'Read detailed explanations for every pick' },
								{ title: 'Trending Sectors', desc: 'Discover emerging opportunities in AI and tech' },
							].map((feature, idx) => (
								<div key={idx} className="rounded-lg border border-slate-700 bg-slate-900/30 p-4">
									<p className="font-semibold text-indigo-300">✓ {feature.title}</p>
									<p className="mt-1 text-sm text-slate-400">{feature.desc}</p>
								</div>
							))}
						</div>
					</div>

					{/* Stats Section */}
					<div className="mt-16 rounded-xl border border-slate-700 bg-slate-900/70 p-6 sm:p-8 w-full">
						<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
							{[
								{ label: 'Stocks Analyzed', value: '5000+' },
								{ label: 'Avg Accuracy', value: '92.3%' },
								{ label: 'Active Users', value: '15K+' },
								{ label: 'Analysis Speed', value: '<3 sec' },
							].map((stat, idx) => (
								<div key={idx} className="text-center">
									<p className="text-3xl font-bold text-indigo-400">{stat.value}</p>
									<p className="mt-1 text-sm text-slate-400">{stat.label}</p>
								</div>
							))}
						</div>
					</div>

					{/* CTA Section */}
					<div className="mt-16 rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-8 text-center w-full">
						<h2 className="text-2xl font-bold text-white">Ready to Invest Smarter?</h2>
						<p className="mt-2 text-slate-300">Start using Stock Agent AI Stock Picker today</p>
						<button 
							onClick={handleSignUp}
							className="mt-6 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
						>
							Create Free Account
						</button>
					</div>
				</section>
			</div>

			{/* Authentication Modal */}
			{showAuthModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
					<div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
						<h2 className="text-2xl font-bold text-white">
							{authMode === 'login' ? 'Log In' : 'Sign Up'}
						</h2>
						<p className="mt-2 text-sm text-slate-400">
							{authMode === 'login' 
								? 'Enter your credentials to access AI Stock Picker'
								: 'Create an account to get started with AI Stock Picker'}
						</p>

						<div className="mt-6 space-y-4">
							<div>
								<label className="block text-sm font-medium text-slate-200">Email</label>
								<input
									type="email"
									placeholder="you@example.com"
									className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
								/>
							</div>

							<div>
								<label className="block text-sm font-medium text-slate-200">Password</label>
								<input
									type="password"
									placeholder="••••••••"
									className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
								/>
							</div>

							{authMode === 'signup' && (
								<div>
									<label className="block text-sm font-medium text-slate-200">Confirm Password</label>
									<input
										type="password"
										placeholder="••••••••"
										className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
									/>
								</div>
							)}
						</div>

						<div className="mt-6 flex gap-3">
							<button
								onClick={() => setShowAuthModal(false)}
								className="flex-1 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
							>
								Cancel
							</button>
							<button
								onClick={handleAuthSubmit}
								className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
							>
								{authMode === 'login' ? 'Log In' : 'Sign Up'}
							</button>
						</div>

						{authMode === 'login' && (
							<p className="mt-4 text-center text-sm text-slate-400">
								Don't have an account?{' '}
								<button
									onClick={() => setAuthMode('signup')}
									className="text-indigo-400 transition hover:text-indigo-300"
								>
									Sign up here
								</button>
							</p>
						)}

						{authMode === 'signup' && (
							<p className="mt-4 text-center text-sm text-slate-400">
								Already have an account?{' '}
								<button
									onClick={() => setAuthMode('login')}
									className="text-indigo-400 transition hover:text-indigo-300"
								>
									Log in here
								</button>
							</p>
						)}
					</div>
				</div>
			)}

			<style>{`
				.landing-hero-letter {
					display: inline-block;
					animation: landingHeadingWave 2.6s ease-in-out infinite;
					color: #ffffff;
				}

				.landing-hero-space {
					width: 0.35em;
				}

				@keyframes landingHeadingWave {
					0%,
					100% {
						transform: translateY(0px);
						opacity: 1;
					}
					50% {
						transform: translateY(-10px);
						opacity: 0.82;
					}
				}

				@media (prefers-reduced-motion: reduce) {
					.landing-hero-letter {
						animation: none !important;
					}
				}
			`}</style>

			<DarkFooter />
		</main>
	)
}

export default SimpleLanding
