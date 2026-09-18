import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { BottomNav } from "@/components/app/BottomNav";
import { BackButton, BrandLogo, PhoneFrame, StatusBar } from "@/components/app/PhoneFrame";
import { useGenderAvatar } from "@/hooks/use-gender-avatar";

export const Route = createFileRoute("/evolucao/comparacao")({
  component: Comparison,
  head: () => ({
    meta: [
      { title: "Comparação corporal | EVOLUA" },
      {
        name: "description",
        content: "Compare seu corpo no início e hoje e veja o quanto você evoluiu.",
      },
      { property: "og:title", content: "Comparação corporal | EVOLUA" },
      { property: "og:description", content: "Antes e depois: peso e cintura lado a lado." },
    ],
  }),
});

function Comparison() {
  const [value, setValue] = useState(85);
  const { avatar } = useGenderAvatar();

  return (
    <PhoneFrame>
      <div className="flex-none">
        <StatusBar />
        <header className="relative flex items-center justify-center px-5 py-2">
          <div className="absolute left-5">
            <BackButton to="/evolucao" />
          </div>
          <BrandLogo />
        </header>
        <div className="px-5 pb-2 pt-2">
          <h1 className="text-[23px] font-bold leading-tight tracking-tight">
            Comparação corporal
          </h1>
          <p className="mt-0.5 text-[13px] font-medium text-subtle">Veja o quanto você evoluiu</p>
        </div>
      </div>

      <main className="flex flex-1 flex-col justify-start px-4 pt-1">
        <div className="relative flex w-full items-stretch justify-between rounded-2xl border border-line bg-surface p-3">
          <div className="flex w-[47%] flex-col items-center">
            <div className="mb-1 text-center">
              <span className="text-[13px] font-semibold">Início</span>
              <p className="text-[10px] font-medium text-subtle">15 mar 2024</p>
            </div>
            <div className="relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-xl bg-background">
              <img
                src={avatar.front}
                alt="Avatar no início"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-2.5 w-full space-y-1 rounded-xl border border-white/5 bg-surface-2/50 p-2">
              <Row label="Peso" value="74,0 kg" />
              <div className="h-px w-full bg-line" />
              <Row label="Cintura" value="86,0 cm" />
            </div>
          </div>

          <div className="absolute left-1/2 top-[40%] z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-surface-2 text-subtle">
            <ChevronRight className="h-4 w-4" />
          </div>

          <div className="flex w-[47%] flex-col items-center">
            <div className="mb-1 text-center">
              <span className="text-[13px] font-semibold">Hoje</span>
              <p className="text-[10px] font-medium text-subtle">15 jun 2024</p>
            </div>
            <div className="relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded-xl bg-background">
              <img
                src={avatar.today}
                alt="Avatar hoje"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-2.5 w-full space-y-1 rounded-xl border border-white/5 bg-surface-2/50 p-2">
              <Row label="Peso" value="71,5 kg" accent />
              <div className="h-px w-full bg-line" />
              <Row label="Cintura" value="82,4 cm" accent />
            </div>
          </div>
        </div>

        <div className="mt-4 w-full px-2">
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Controle de data da evolução"
            className="range-lime h-3 w-full"
          />
          <div className="mt-1 flex items-center justify-between px-1 text-[12px] font-medium">
            <span className="text-subtle">Início</span>
            <span className="font-semibold text-lime">Hoje</span>
          </div>
        </div>
      </main>

      <BottomNav active="/evolucao" />
    </PhoneFrame>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between px-1 text-[11px]">
      <span className="text-subtle">{label}</span>
      <span className={`text-[12px] font-bold ${accent ? "text-lime" : "text-foreground"}`}>
        {value}
      </span>
    </div>
  );
}
