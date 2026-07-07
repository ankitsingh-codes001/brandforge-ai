export default function DashboardPreview() {
  return (
    <div className="mt-20 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">
          BrandForge AI Dashboard
        </h3>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
          ● Online
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl bg-slate-900 p-5">
          <h4 className="text-white font-semibold">Business Name</h4>
          <p className="mt-2 text-gray-400 text-sm">
            ForgeFlow AI
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-5">
          <h4 className="text-white font-semibold">Logo</h4>
          <p className="mt-2 text-gray-400 text-sm">
            Modern Gradient Logo
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-5">
          <h4 className="text-white font-semibold">Website</h4>
          <p className="mt-2 text-gray-400 text-sm">
            Landing Page Ready
          </p>
        </div>

        <div className="rounded-2xl bg-slate-900 p-5">
          <h4 className="text-white font-semibold">Social Media</h4>
          <p className="mt-2 text-gray-400 text-sm">
            30 AI Posts Generated
          </p>
        </div>
      </div>
    </div>
  );
}