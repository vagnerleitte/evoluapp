import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { CalendarDays, ChevronRight, Info, User } from "lucide-react";
import { BackButton, HomeIndicator, PhoneFrame, StatusBar } from "@/components/app/PhoneFrame";
import { useGenderAvatar } from "@/hooks/use-gender-avatar";
import type { Gender } from "@/lib/avatars";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding/dados")({
  component: BasicData,
  head: () => ({
    meta: [
      { title: "Dados básicos | EVOLUA" },
      {
        name: "description",
        content: "Informe seus dados básicos para personalizar sua experiência no EVOLUA.",
      },
      { property: "og:title", content: "Dados básicos | EVOLUA" },
      {
        property: "og:description",
        content: "Vamos te conhecer melhor para personalizar sua jornada.",
      },
    ],
  }),
});

const genders: Gender[] = ["Masculino", "Feminino", "Outro", "Prefiro não informar"];

function BasicData() {
  const { profile, gender, setGender, update } = useGenderAvatar();
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <header className="z-10 w-full shrink-0 px-6 pb-2 pt-0">
        <StatusBar className="mb-4 px-1" />
        <div className="flex items-center gap-4">
          <BackButton to="/criar-conta" />
          <div className="flex flex-1 items-center gap-1.5">
            <Step active />
            <Step />
            <Step />
            <Step />
          </div>
        </div>
      </header>

      <div className="no-scrollbar flex-1 space-y-6 overflow-y-auto px-6 pb-6 pt-2">
        <div className="space-y-1">
          <h1 className="text-[22px] font-bold tracking-tight">Vamos te conhecer melhor</h1>
          <p className="text-xs leading-relaxed text-subtle">
            Essas informações nos ajudam a personalizar sua experiência.
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="block text-xs text-subtle" htmlFor="fullName">
              Nome completo
            </label>
            <div className="relative flex items-center">
              <User className="pointer-events-none absolute left-3.5 h-4 w-4 text-subtle" />
              <input
                id="fullName"
                value={profile.nome}
                onChange={(e) => update({ nome: e.target.value })}
                className="w-full rounded-xl border border-line bg-surface py-3 pl-11 pr-4 text-xs transition focus:border-lime focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs text-subtle" htmlFor="birthDate">
              Data de nascimento
            </label>
            <div className="relative flex items-center">
              <CalendarDays className="pointer-events-none absolute left-3.5 h-4 w-4 text-subtle" />
              <input
                id="birthDate"
                value={profile.nascimento}
                onChange={(e) => update({ nascimento: e.target.value })}
                placeholder="DD/MM/AAAA"
                className="w-full rounded-xl border border-line bg-surface py-3 pl-11 pr-4 text-xs tracking-wider transition focus:border-lime focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <span className="block text-xs text-subtle">Gênero</span>
            <div className="space-y-2">
              {genders.map((option) => {
                const selected = option === gender;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setGender(option)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl border bg-surface px-3.5 py-3 transition",
                      selected ? "border-lime" : "border-line hover:border-subtle/50",
                    )}
                  >
                    <span className="text-xs">{option}</span>
                    <span
                      className={cn(
                        "flex h-4 w-4 items-center justify-center rounded-full border",
                        selected ? "border-lime" : "border-subtle/60",
                      )}
                    >
                      {selected && <span className="h-2 w-2 rounded-full bg-lime" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-start gap-2.5 pt-2">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-subtle" />
            <p className="text-[11px] leading-normal text-subtle">
              Tudo bem se preferir não informar agora. O app pode permanecer neutro até que você
              defina seu gênero.
            </p>
          </div>
        </form>
      </div>

      <footer className="shrink-0 bg-background p-6 pt-2">
        <button
          type="button"
          onClick={() => void navigate({ to: "/onboarding/estrutura" })}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-lime px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition active:scale-[0.99]"
        >
          <span>Continuar</span>
          <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
        </button>
        <HomeIndicator className="pb-0 pt-5" />
      </footer>
    </PhoneFrame>
  );
}

export function Step({ active = false }: { active?: boolean }) {
  return <div className={cn("h-[3px] flex-1 rounded-full", active ? "bg-lime" : "bg-line")} />;
}
