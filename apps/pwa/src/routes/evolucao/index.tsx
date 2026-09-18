import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, TrendingDown, TrendingUp } from "lucide-react";
import { BottomNav } from "@/components/app/BottomNav";
import { BrandLogo, PhoneFrame, StatusBar } from "@/components/app/PhoneFrame";
import { NeonLineChart } from "@/components/app/LineChart";

export const Route = createFileRoute("/evolucao/")({
  component: Evolution,
  head: () => ({
    meta: [
      { title: "Sua evolução | EVOLUA" },
      {
        name: "description",
        content: "Seu progresso em números: peso, cintura, peitoral, braços e coxas.",
      },
      { property: "og:title", content: "Sua evolução | EVOLUA" },
      { property: "og:description", content: "Veja quanto você evoluiu nos últimos 6 meses." },
    ],
  }),
});

const metrics = [
  { label: "Peso", delta: "-2,5 kg", down: true },
  { label: "Cintura", delta: "-3,6 cm", down: true },
  { label: "Peitoral", delta: "+2,1 cm", down: false },
  { label: "Braços", delta: "+1,4 cm", down: false },
  { label: "Coxas", delta: "+1,0 cm", down: false },
];

function Evolution() {
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex w-full shrink-0 items-center justify-center pb-2 pt-3">
        <BrandLogo />
      </div>

      <main className="no-scrollbar flex-1 overflow-y-auto px-5 pb-4 pt-2">
        <section className="mb-4">
          <h1 className="text-[26px] font-bold leading-tight tracking-tight">Evolução</h1>
          <p className="text-[13.5px] text-subtle">Seu progresso em números</p>
        </section>

        <section className="mb-4 space-y-2">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex items-center justify-between rounded-[18px] border border-line bg-surface px-4 py-3"
            >
              <span className="text-[15px] font-medium">{m.label}</span>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 rounded-full bg-lime/10 px-2 py-0.5">
                  <span className="text-[13px] font-semibold text-lime">{m.delta}</span>
                  {m.down ? (
                    <TrendingDown className="h-3.5 w-3.5 text-lime" />
                  ) : (
                    <TrendingUp className="h-3.5 w-3.5 text-lime" />
                  )}
                </div>
                <span className="mt-0.5 text-[11px] text-subtle">desde o início</span>
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-[20px] border border-line bg-surface p-4">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-[14.5px] font-semibold tracking-tight">Seu progresso geral</h2>
            <button type="button" className="flex items-center gap-1 text-xs text-foreground/80">
              <span>Últimos 6 meses</span>
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="relative flex h-[120px] w-full">
            <div className="flex h-full w-6 select-none flex-col justify-between py-1 pr-2 text-right text-[11px] font-medium text-subtle">
              <span>80</span>
              <span>75</span>
              <span>70</span>
              <span>65</span>
            </div>
            <div className="relative h-full flex-1">
              <NeonLineChart points={[76.5, 75.8, 75, 73.9, 72.6, 71.5]} height={120} />
            </div>
          </div>
          <div className="flex justify-between pl-7 pr-2 pt-2 text-[11px] font-medium text-subtle">
            {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </section>

        <Link
          to="/evolucao/comparacao"
          className="mt-4 flex w-full items-center justify-center rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-semibold transition active:scale-[0.99]"
        >
          Ver comparação corporal
        </Link>
      </main>

      <BottomNav active="/evolucao" />
    </PhoneFrame>
  );
}
