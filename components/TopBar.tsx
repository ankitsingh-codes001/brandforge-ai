export default function TopBar() {
  return (
    <div className="mb-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
      <input
        type="text"
        placeholder="🔍 Search AI tools..."
        className="w-80 rounded-xl bg-slate-900 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <div className="flex items-center gap-4">
        <button className="rounded-xl bg-slate-900 px-4 py-3 hover:bg-slate-800">
          🔔
        </button>

        <div className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold">
            A
          </div>

          <div>
            <p className="font-semibold">Ankit</p>
            <p className="text-sm text-gray-400">Free Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}