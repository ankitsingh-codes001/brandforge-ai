type StatsCardProps = {
  title: string;
  value: string;
  emoji: string;
};

export default function StatsCard({
  title,
  value,
  emoji,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400">
      <div className="text-4xl">{emoji}</div>

      <p className="mt-4 text-gray-400">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}