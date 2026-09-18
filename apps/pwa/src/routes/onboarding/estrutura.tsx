import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronRight, Info, Ruler, Scale } from "lucide-react";
import { BackButton, HomeIndicator, PhoneFrame, StatusBar } from "@/components/app/PhoneFrame";
import { Step } from "@/routes/onboarding/dados";
import { useGenderAvatar } from "@/hooks/use-gender-avatar";

export const Route = createFileRoute("/onboarding/estrutura")({
  component: InitialStructure,
  head: () => ({
    meta: [
      { title: "Estrutura inicial | EVOLUA" },
      {
        name: "description",
        content: "Informe altura e peso para gerar seu personagem 3D no EVOLUA.",
      },
      { property: "og:title", content: "Estrutura inicial | EVOLUA" },
      {
        property: "og:description",
        content: "Suas medidas geram seu personagem e acompanham sua evolução.",
      },
    ],
  }),
});

function InitialStructure() {
  const navigate = useNavigate();
  const { avatar, bodyType, height, setHeight, weight, setWeight } = useGenderAvatar();

  return (
    <PhoneFrame>
      <header className="z-20 w-full shrink-0 px-6 pt-0">
        <StatusBar className="px-1" />
        <div className="mb-4 mt-2 flex items-center justify-between">
          <BackButton to="/onboarding/dados" />
          <div className="mr-6 flex w-40 items-center gap-2">
            <Step active />
            <Step active />
            <Step />
            <Step />
          </div>
        </div>
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold leading-tight tracking-tight">
            Vamos criar seu perfil corporal
          </h1>
          <p className="max-w-[92%] text-[13px] leading-relaxed text-subtle">
            Essas medidas serão usadas para gerar seu personagem e acompanhar sua evolução.
          </p>
        </div>
      </header>

      <section className="relative flex w-full flex-1 items-center justify-between overflow-hidden px-6">
        <div className="z-10 flex w-[52%] flex-col justify-center space-y-4 py-2">
          <MetricInput
            label="Altura"
            value={height}
            onChange={setHeight}
            unit="cm"
            icon={<Ruler className="h-5 w-5 text-lime" />}
          />
          <MetricInput
            label="Peso"
            value={weight}
            onChange={setWeight}
            unit="kg"
            icon={<Scale className="h-5 w-5 text-lime" />}
          />
          <p className="px-1 text-[10px] font-medium text-lime" aria-live="polite">
            Prévia corporal: {bodyType === "overweight" ? "acima do peso" : "em forma"}
          </p>
          <aside className="mt-2 flex items-start gap-2.5 rounded-2xl border border-line bg-surface/70 p-3">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-subtle" />
            <p className="text-[11px] leading-tight text-subtle">
              Essas medidas criam seu corpo 3D inicial. Você poderá ajustá-las depois, a qualquer
              momento.
            </p>
          </aside>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-0 flex w-[54%] items-end justify-center overflow-hidden">
          <img
            src={avatar.full}
            alt="Prévia do personagem 3D"
            className="avatar-blend-bottom h-full w-full object-contain object-bottom"
          />
        </div>
      </section>

      <footer className="z-20 flex w-full shrink-0 flex-col items-center px-6 pb-4 pt-3">
        <button
          type="button"
          onClick={() => void navigate({ to: "/onboarding/personagem-criado" })}
          className="glow-lime flex h-14 w-full items-center justify-between rounded-2xl bg-lime px-6 text-base font-bold text-primary-foreground transition active:scale-[0.98]"
        >
          <span className="w-full pl-4 text-center tracking-tight">Criar personagem</span>
          <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
        </button>
        <HomeIndicator className="pt-5" />
      </footer>
    </PhoneFrame>
  );
}

function MetricInput({
  label,
  value,
  onChange,
  unit,
  icon,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  unit: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col space-y-1.5">
      <span className="ml-1 text-xs font-medium text-subtle">{label}</span>
      <div className="flex h-14 items-center justify-between rounded-2xl border border-line bg-surface px-3.5">
        <div className="flex items-center gap-2.5">
          {icon}
          <input
            aria-label={label}
            inputMode="decimal"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="w-16 bg-transparent text-lg font-bold tracking-wide outline-none"
          />
        </div>
        <span className="text-xs font-medium text-subtle">{unit}</span>
      </div>
    </div>
  );
}
