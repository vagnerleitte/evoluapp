import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { BackButton, HomeIndicator, PhoneFrame, StatusBar } from "@/components/app/PhoneFrame";
import { useGenderAvatar } from "@/hooks/use-gender-avatar";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/mapear/")({
  component: RegionSelection,
  head: () => ({
    meta: [
      { title: "Selecione uma região | EVOLUA" },
      {
        name: "description",
        content: "Toque em uma região do corpo para ver e registrar suas medidas.",
      },
      { property: "og:title", content: "Selecione uma região | EVOLUA" },
      {
        property: "og:description",
        content: "Mapeie cada região do corpo e acompanhe sua evolução.",
      },
    ],
  }),
});

const markers = [
  { label: "Ombros", top: "28%", side: "left" as const, pos: "29%" },
  { label: "Peitoral", top: "32%", side: "right" as const, pos: "25%" },
  { label: "Braço direito", top: "44%", side: "left" as const, pos: "16%" },
  { label: "Braço esquerdo", top: "44%", side: "right" as const, pos: "14%" },
  { label: "Quadril", top: "58%", side: "right" as const, pos: "28%" },
  { label: "Coxas", top: "67.5%", side: "left" as const, pos: "28%" },
];

function RegionSelection() {
  const [view, setView] = useState<"Frente" | "Costas">("Frente");
  const { avatar } = useGenderAvatar();

  return (
    <PhoneFrame>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,oklch(0.26_0.012_250/0.5)_0%,oklch(0.13_0.008_250/0.95)_75%)]" />

      <header className="relative z-30 flex shrink-0 flex-col gap-2 px-7 pt-0">
        <StatusBar className="px-0" />
        <div className="mt-2 flex items-center justify-between">
          <BackButton to="/onboarding/personagem-criado" />
          <nav className="flex rounded-full border border-white/10 bg-surface p-1">
            {(["Frente", "Costas"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setView(option)}
                className={cn(
                  "rounded-full px-5 py-1.5 text-xs transition",
                  view === option
                    ? "bg-lime font-bold text-primary-foreground"
                    : "font-semibold text-subtle hover:text-foreground",
                )}
              >
                {option}
              </button>
            ))}
          </nav>
          <div className="w-7" />
        </div>
        <div className="mt-3 px-2 text-center">
          <h1 className="text-[22px] font-bold leading-snug tracking-tight">
            Selecione uma região
          </h1>
          <p className="mt-1 text-xs tracking-wide text-subtle">
            Toque em uma região para ver e registrar suas medidas.
          </p>
        </div>
      </header>

      <main className="relative flex w-full flex-1 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pt-2">
          <img
            src={avatar.front}
            alt="Avatar 3D do usuário"
            className="pointer-events-none h-[108%] w-auto max-w-none object-contain"
          />
        </div>

        {markers.map((m) => (
          <div
            key={m.label}
            className={cn("absolute flex items-center", m.side === "right" && "flex-row-reverse")}
            style={{ top: m.top, [m.side]: m.pos }}
          >
            <span
              className={cn(
                "text-xs font-medium tracking-tight text-foreground/70",
                m.side === "left" ? "mr-2" : "ml-2",
              )}
            >
              {m.label}
            </span>
            <div className={cn("h-px w-6 bg-subtle/80", m.side === "left" ? "mr-1.5" : "ml-1.5")} />
            <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/70 bg-white/30">
              <div className="h-1.5 w-1.5 rounded-full bg-white" />
            </div>
          </div>
        ))}

        <Link
          to="/mapear/abdomen"
          className="absolute left-[49%] top-[48.5%] z-20 flex -translate-x-1/2 items-center"
        >
          <div className="relative flex h-8 w-8 items-center justify-center">
            <span className="pulse-ring absolute inline-flex h-7 w-7 rounded-full bg-lime/40" />
            <span className="relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-lime bg-lime/30">
              <span className="h-2 w-2 rounded-full bg-lime" />
            </span>
          </div>
          <div className="-ml-0.5 h-[1.5px] w-4 bg-lime" />
          <div className="rounded-full border border-lime bg-surface px-2.5 py-0.5 text-[11px] font-medium">
            Abdômen
          </div>
        </Link>
      </main>

      <footer className="relative z-30 shrink-0 px-4 pb-1 pt-1">
        <Link
          to="/mapear/abdomen"
          className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-surface/95 p-3.5 backdrop-blur-md transition active:scale-[0.99]"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-lime/30 bg-background/60">
            <span className="text-lg font-black text-lime">AB</span>
          </div>
          <div className="ml-3.5 flex-1">
            <h2 className="text-base font-bold leading-tight">Abdômen</h2>
            <p className="mt-0.5 text-xs text-subtle">3 medidas pendentes</p>
          </div>
          <ChevronRight className="mr-1 h-5 w-5 text-subtle" />
        </Link>
        <HomeIndicator className="pt-4" />
      </footer>
    </PhoneFrame>
  );
}
