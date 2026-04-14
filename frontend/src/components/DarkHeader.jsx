import React from 'react'

const DarkHeader = ({ currentPage, setCurrentPage }) => {
	const navItems = [
		{ id: 'home', label: 'Agent Overview' },
		{ id: 'stock-picker', label: 'AI Stock Picks' },
	]

	return (
		<header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
				<button
					onClick={() => setCurrentPage('home')}
					className="text-lg font-bold tracking-tight text-cyan-300"
				>
					Stock Picker Agent
				</button>

				<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 p-1">
					{navItems.map((item) => (
						<button
							key={item.id}
							onClick={() => setCurrentPage(item.id)}
							className={`rounded-md px-3 py-2 text-sm font-medium transition ${
								currentPage === item.id
									? 'bg-cyan-600 text-white'
									: 'text-slate-300 hover:bg-slate-800 hover:text-white'
							}`}
						>
							{item.label}
						</button>
					))}
				</div>
			</nav>
		</header>
	)
}

export default DarkHeader
