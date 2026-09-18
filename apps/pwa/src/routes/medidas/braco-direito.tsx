import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { BackButton, BrandLogo, PhoneFrame, StatusBar } from "@/components/app/PhoneFrame";
import { NeonLineChart } from "@/components/app/LineChart";
import { useGenderAvatar } from "@/hooks/use-gender-avatar";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/medidas/braco-direito")({
  component: ArmMetric,
  head: () => ({
    meta: [
      { title: "Braço direito | EVOLUA" },
      {
        name: "description",
        content: "Detalhe da medida do braço direito e sua evolução nos últimos 6 meses.",
      },
      { property: "og:title", content: "Braço direito | EVOLUA" },
      { property: "og:description", content: "32,8 cm hoje — 1,4 cm a mais desde o início." },
    ],
  }),
});

const history = [
  { month: "Out", value: "31,4 cm" },
  { month: "Nov", value: "31,7 cm" },
  { month: "Dez", value: "31,9 cm" },
  { month: "Jan", value: "32,2 cm" },
  { month: "Fev", value: "32,5 cm" },
  { month: "Mar", value: "32,8 cm" },
];

function ArmMetric() {
  const [tab, setTab] = useState<"Visão geral" | "Histórico">("Visão geral");
  const { avatar } = useGenderAvatar();

  return (
    <PhoneFrame>
      <StatusBar />
      <nav className="relative z-20 flex w-full items-center justify-center px-5 py-2.5">
        <div className="absolute left-5">
          <BackButton to="/medidas" />
        </div>
        <BrandLogo />
      </nav>

      <main className="no-scrollbar relative z-10 flex-1 overflow-y-auto px-5 pb-28">
        <section className="relative flex min-h-[170px] items-start justify-between pb-4 pt-3">
          <div className="z-10 w-[58%] pr-2 pt-2">
            <h1 className="text-[26px] font-bold leading-tight tracking-tight">Braço direito</h1>
            <p className="mt-1.5 text-xs leading-relaxed text-subtle">
              Acompanhe a evolução da sua medida ao longo do tempo.
            </p>
          </div>
          <div className="pointer-events-none absolute -right-3 -top-3 h-[195px] w-[175px] overflow-hidden">
            <img
              src={avatar.arm}
              alt="Avatar 3D destacando o braço"
              className="avatar-blend-side h-full w-full rounded-2xl object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </section>

        <section className="mt-1">
          <div className="flex w-full items-center rounded-xl bg-surface p-1">
            {(["Visão geral", "Histórico"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTab(option)}
                className={cn(
                  "flex-1 rounded-lg py-2 text-xs transition",
                  tab === option
                    ? "bg-lime font-semibold text-primary-foreground"
                    : "font-medium text-subtle hover:text-foreground",
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </section>

        {tab === "Visão geral" ? (
          <>
            <section className="mt-3.5 rounded-2xl border border-line bg-surface p-4">
              <div className="flex items-start justify-between border-b border-line pb-3.5">
                <div>
                  <span className="block text-[11px] font-medium text-subtle">Medida atual</span>
                  <div className="mt-0.5 flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold tracking-tight">32,8</span>
                    <span className="text-sm font-semibold text-subtle">cm</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block text-[11px] font-medium text-subtle">
                    Variação desde o início
                  </span>
                  <div className="mt-1 inline-flex items-center rounded border border-lime/40 bg-lime/10 px-2 py-0.5">
                    <span className="text-xs font-bold tracking-tight text-lime">
                      +1,4 <span className="text-[11px] font-normal">cm (+4,4%)</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 pt-3.5">
                <div>
                  <span className="block text-[11px] font-medium text-subtle">Medida inicial</span>
                  <div className="mt-0.5 flex items-baseline gap-1">
                    <span className="text-base font-bold">31,4</span>
                    <span className="text-xs text-subtle">cm</span>
                  </div>
                </div>
                <div className="pl-4">
                  <span className="block text-[11px] font-medium text-subtle">Período</span>
                  <span className="mt-0.5 block text-sm font-semibold">6 meses</span>
                </div>
              </div>
            </section>

            <section className="mt-3.5 rounded-2xl border border-line bg-surface p-4">
              <h2 className="mb-4 text-xs font-medium text-foreground/80">
                Evolução nos últimos 6 meses
              </h2>
              <div className="relative h-[155px] w-full">
                <NeonLineChart points={[31.4, 31.7, 31.9, 32.2, 32.5, 32.8]} height={155} />
              </div>
              <div className="mt-1 flex justify-between px-1 text-[10px] font-medium text-subtle">
                {history.map((h) => (
                  <span key={h.month}>{h.month}</span>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="mt-3.5 space-y-2">
            {[...history].reverse().map((h) => (
              <div
                key={h.month}
                className="flex items-center justify-between rounded-xl border border-line bg-surface px-4 py-3"
              >
                <span className="text-[13px] text-subtle">{h.month}</span>
                <span className="text-[14px] font-semibold">{h.value}</span>
              </div>
            ))}
          </section>
        )}
      </main>

      <footer className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center bg-gradient-to-t from-background via-background/90 to-transparent p-4 pb-5">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime px-4 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition active:scale-[0.99]"
        >
          <span>Atualizar medida</span>
          <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
        </button>
        <div className="mt-3 h-1 w-36 rounded-full bg-foreground/30" />
      </footer>
    </PhoneFrame>
  );
}
