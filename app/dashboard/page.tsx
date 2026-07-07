import Sidebar from "@/components/Sidebar";
import ToolCard from "@/components/ToolCard";
import StatsCard from "@/components/StatsCard";
import TopBar from "@/components/TopBar";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-10">
        <TopBar />
        <h1 className="text-4xl font-bold">
          Welcome to BrandForge AI 🚀
        </h1>

        <p className="mt-3 text-gray-400">
          Your AI-powered business dashboard.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
  <StatsCard
    title="Total Tools"
    value="8"
    emoji="🛠️"
  />

  <StatsCard
    title="AI Generations"
    value="127"
    emoji="⚡"
  />

  <StatsCard
    title="Favorites"
    value="5"
    emoji="⭐"
  />
</div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          <ToolCard
            title="Business Name"
            description="Generate unique business names using AI."
            emoji="🤖"
            href="/tools"
          />

          <ToolCard
            title="Slogan Generator"
            description="Create catchy marketing slogans."
            emoji="✨"
            href="/slogan"
          />

          <ToolCard
            title="Logo Generator"
            description="AI logo generation coming soon."
            emoji="🎨"
            href="#"
          />

          <ToolCard
            title="Website Builder"
            description="Generate website content with AI."
            emoji="🌐"
            href="#"
          />

          <ToolCard
            title="Invoice Generator"
            description="Create professional invoices."
            emoji="📄"
            href="#"
          />

          <ToolCard
            title="Email Writer"
            description="Write emails with AI."
            emoji="📧"
            href="#"
          />

        </div>
      </div>
    </main>
  );
}