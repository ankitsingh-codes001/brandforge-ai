import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  emoji: string;
  href: string;
};

export default function ToolCard({
  title,
  description,
  emoji,
  href,
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400 hover:scale-105"
    >
      <div className="text-5xl">{emoji}</div>

      <h2 className="mt-4 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-gray-400">
        {description}
      </p>

      <div className="mt-6 inline-block rounded-lg bg-cyan-500 px-4 py-2 font-semibold">
        Open Tool →
      </div>
    </Link>
  );
}