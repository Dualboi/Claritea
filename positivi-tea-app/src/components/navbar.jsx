export default function Navbar() {
	return (
		<header className="bg-white border-b border-slate-200 px-4 md:px-8">
			<nav
				className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-8"
				aria-label="Main navigation"
			>
				<a
					href="/"
					className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
				>
					<img src="/favicon.svg" alt="Positivi-Tea logo" className="w-12 h-12" />
					<span className="text-slate-900 font-semibold tracking-tight">
						Positivi-Tea
					</span>
				</a>

				<div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
					<a
						href="/#featured"
						className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-colors"
					>
						Featured
					</a>
					<a
						href="/#new-arrivals"
						className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-colors"
					>
						New Arrivals
					</a>
					<a
						href="/#about"
						className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-colors"
					>
						About Us
					</a>
				</div>

				<a
					href="/products"
					className="hidden sm:inline-flex items-center justify-center bg-slate-900 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
				>
					Shop tea
				</a>
			</nav>
		</header>
	);
}
