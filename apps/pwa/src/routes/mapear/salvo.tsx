import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import {
  BackButton,
  BrandLogo,
  HomeIndicator,
  PhoneFrame,
  StatusBar,
} from "@/components/app/PhoneFrame";
import { useGenderAvatar } from "@/hooks/use-gender-avatar";

export const Route = createFileRoute("/mapear/salvo")({
  component: RegionSaved,
  head: () => ({
    meta: [
      { title: "Abdômen atualizado | EVOLUA" },
      {
        name: "description",
        content: "Suas medidas do abdômen foram salvas. Siga para a próxima região.",
      },
      { property: "og:title", content: "Abdômen atualizado | EVOLUA" },
      { property: "og:description", content: "Medidas salvas com sucesso. Próxima região: coxas." },
    ],
  }),
});

function RegionSaved() {
  const { avatar } = useGenderAvatar();
  return (
    <PhoneFrame>
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={avatar.front}
          alt=""
          className="-mt-6 h-auto w-full object-cover object-top opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background" />
      </div>

      <header className="relative z-20 flex flex-col gap-1 px-6 pt-0">
        <StatusBar className="px-1.5" />
        <nav className="mt-2.5 flex items-center justify-between">
          <BackButton to="/mapear/abdomen" />
          <BrandLogo className="pr-4" />
          <div className="w-6" />
        </nav>
      </header>

      <section className="relative z-20 px-6 pt-4">
        <h1 className="text-lg font-semibold tracking-tight">Mapeamento corporal</h1>
        <p className="mt-0.5 text-xs font-semibold text-lime">75% completo</p>
        <div className="mt-2.5 flex w-36 gap-1.5">
          <div className="h-1 flex-1 rounded-full bg-lime" />
          <div className="h-1 flex-1 rounded-full bg-lime" />
          <div className="h-1 flex-1 rounded-full bg-lime" />
          <div className="h-1 flex-1 rounded-full bg-line" />
        </div>
      </section>

      <div className="flex-1" />

      <main className="relative z-30 mx-4 mb-1 flex flex-col items-center rounded-[28px] border border-line bg-surface/95 p-5 pt-7 text-center backdrop-blur-md">
        <div className="mb-3.5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-lime bg-lime/10">
          <Check className="h-7 w-7 text-lime" strokeWidth={3} />
        </div>
        <h2 className="text-lg font-bold tracking-tight">Abdômen atualizado</h2>
        <p className="mt-1 text-xs text-subtle">Suas medidas foram salvas com sucesso.</p>

        <div className="mt-5 flex w-full items-center justify-between rounded-2xl border border-line bg-surface-2/60 p-3.5 text-left">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-background">
              <span className="text-sm font-black text-lime">CX</span>
            </div>
            <div>
              <span className="-mb-0.5 block text-[10px] font-bold uppercase tracking-wider text-subtle">
                Próxima região
              </span>
              <span className="block text-sm font-bold tracking-tight">Coxas</span>
              <span className="mt-0.5 block text-[11px] text-subtle">Vamos mapear agora?</span>
            </div>
          </div>
          <ChevronRight className="mr-1 h-5 w-5 text-subtle" />
        </div>

        <Link
          to="/mapear/concluido"
          className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-2xl bg-lime py-3.5 text-sm font-bold text-primary-foreground transition active:scale-[0.99]"
        >
          <span>Continuar mapeamento</span>
          <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
        </Link>
        <Link
          to="/home"
          className="mt-3.5 py-1 text-xs font-medium text-foreground/80 hover:text-foreground"
        >
          Voltar ao personagem
        </Link>
      </main>

      <HomeIndicator className="relative z-20" />
    </PhoneFrame>
  );
}
