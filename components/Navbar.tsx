export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
        <h1 className="text-xl font-bold text-white">
          BrandForge <span className="text-cyan-400">AI</span>
        </h1>

        <nav className="hidden gap-8 text-gray-300 md:flex">
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">About</a>
        </nav>

        <button className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-white transition hover:bg-cyan-400">
          Get Started
        </button>
      </div>
    </header>
  );
}