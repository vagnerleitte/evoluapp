import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  BackButton,
  BrandLogo,
  HomeIndicator,
  PhoneFrame,
  StatusBar,
} from "@/components/app/PhoneFrame";
import { NeonLineChart } from "@/components/app/LineChart";

export const Route = createFileRoute("/medidas/cintura")({
  component: WaistMetric,
  head: () => ({
    meta: [
      { title: "Cintura ao longo do tempo | EVOLUA" },
      { name: "description", content: "Acompanhe a evolução da sua cintura mês a mês no EVOLUA." },
      { property: "og:title", content: "Cintura ao longo do tempo | EVOLUA" },
      { property: "og:description", content: "82,4 cm hoje — 3,6 cm a menos desde o início." },
    ],
  }),
});

function WaistMetric() {
  return (
    <PhoneFrame>
      <div className="flex flex-1 flex-col overflow-hidden px-5 pb-4 pt-0">
        <StatusBar className="mb-3 px-2" />

        <nav className="relative mb-4 flex h-11 w-full items-center justify-between">
          <BackButton to="/medidas" />
          <div className="absolute left-1/2 -translate-x-1/2">
            <BrandLogo />
          </div>
          <div className="w-5" />
        </nav>

        <section className="mb-4 flex flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Cintura</h1>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-white/5 bg-surface px-3.5 py-1.5 text-xs font-medium text-foreground/80 transition hover:bg-surface-2"
            >
              <span>6 meses</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="mt-1 max-w-[85%] text-xs leading-relaxed text-subtle">
            Acompanhe a evolução da sua cintura ao longo do tempo.
          </p>
          <div className="mt-4">
            <div className="text-[38px] font-extrabold leading-none tracking-tight">
              82,4 <span className="text-[30px] font-bold">cm</span>
            </div>
            <div className="mt-1 text-sm tracking-tight">
              <span className="font-bold text-lime">-3,6 cm</span>
              <span className="ml-1 text-xs text-subtle">desde o início</span>
            </div>
          </div>
        </section>

        <section className="mb-4 flex flex-col justify-between rounded-2xl border border-white/5 bg-surface p-4 pb-3 pt-5">
          <div className="relative h-[185px] w-full">
            <NeonLineChart points={[86, 85.2, 84.4, 83.8, 83, 82.4]} height={185} />
          </div>
          <div className="mt-1 flex justify-between pl-2 pr-1 text-[11px] font-medium text-subtle">
            {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </section>

        <section className="mb-5 grid grid-cols-3 gap-2.5">
          <SummaryBox label="Inicial" value="86,0 cm" />
          <SummaryBox label="Atual" value="82,4 cm" />
          <SummaryBox label="Variação" value="-4,2%" accent />
        </section>

        <footer className="mt-auto pt-1">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 shadow-lg transition active:scale-[0.98]"
          >
            <span className="text-[15px] font-extrabold tracking-tight text-primary-foreground">
              Nova avaliação
            </span>
            <ChevronRight className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
          </button>
          <HomeIndicator className="pb-0 pt-4" />
        </footer>
      </div>
    </PhoneFrame>
  );
}

function SummaryBox({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex flex-col justify-center rounded-xl border border-white/5 bg-surface p-3">
      <span className="text-[11px] font-medium tracking-wide text-subtle">{label}</span>
      <div className={`mt-1 text-[15px] font-bold ${accent ? "text-lime" : "text-foreground"}`}>
        {value}
      </div>
    </div>
  );
}
