import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight, Info, Pencil, PersonStanding } from "lucide-react";
import { useState } from "react";
import { BottomNav } from "@/components/app/BottomNav";
import { BackButton, BrandLogo, PhoneFrame, StatusBar } from "@/components/app/PhoneFrame";
import { useProfile } from "@/hooks/use-profile";
import { MEASURE_LABELS } from "@/lib/profile-store";

export const Route = createFileRoute("/medidas/")({
  component: Measures,
  head: () => ({
    meta: [
      { title: "Suas medidas | EVOLUA" },
      {
        name: "description",
        content: "Veja e edite todas as suas medidas corporais registradas no EVOLUA.",
      },
      { property: "og:title", content: "Suas medidas | EVOLUA" },
      {
        property: "og:description",
        content: "Peso, ombros, peitoral, abdômen, quadril, braços e coxas.",
      },
    ],
  }),
});

function Measures() {
  const { profile, setMeasure, setHeight, height } = useProfile();
  const [editing, setEditing] = useState(false);

  return (
    <PhoneFrame>
      <StatusBar />
      <nav className="relative z-20 flex w-full items-center px-5 pb-2 pt-3">
        <BackButton to="/home" />
        <div className="absolute left-1/2 -translate-x-1/2">
          <BrandLogo />
        </div>
      </nav>

      <main className="no-scrollbar flex-1 overflow-y-auto px-5 pb-6 pt-2">
        <header className="mb-4 flex items-end justify-between">
          <div>
            <h1 className="text-[26px] font-bold leading-tight tracking-tight">Medidas</h1>
            <p className="mt-0.5 text-[12.5px] text-subtle">
              {editing ? "Toque nos campos para atualizar" : "Última atualização: hoje"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setEditing((v) => !v)}
            className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold transition active:scale-[0.98]"
          >
            {editing ? (
              <Check className="h-3.5 w-3.5 text-lime" />
            ) : (
              <Pencil className="h-3.5 w-3.5 text-subtle" />
            )}
            {editing ? "Concluir" : "Editar"}
          </button>
        </header>

        <section className="space-y-2">
          <Row
            label="Altura"
            unit="cm"
            value={height}
            editing={editing}
            icon={<PersonStanding className="h-4 w-4 text-subtle" />}
            onChange={setHeight}
          />
          {MEASURE_LABELS.map((m) =>
            editing ? (
              <Row
                key={m.key}
                label={m.label}
                unit={m.unit}
                value={profile.measures[m.key]}
                editing
                onChange={(v) => setMeasure(m.key, v)}
              />
            ) : (
              <Link
                key={m.key}
                to={m.to}
                className="flex items-center justify-between rounded-2xl border border-line bg-surface px-4 py-3 transition active:bg-surface-2"
              >
                <span className="text-[14.5px] font-medium text-foreground/90">{m.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-semibold tracking-tight">
                    {profile.measures[m.key]}
                  </span>
                  <span className="w-5 text-xs text-subtle">{m.unit}</span>
                  <ChevronRight className="h-4 w-4 text-subtle" />
                </div>
              </Link>
            ),
          )}
        </section>

        <Link
          to="/onboarding/dados"
          className="mt-3 flex items-center justify-between rounded-2xl border border-line bg-surface px-4 py-3 transition active:bg-surface-2"
        >
          <span className="text-[14.5px] font-medium text-foreground/90">Dados pessoais</span>
          <ChevronRight className="h-4 w-4 text-subtle" />
        </Link>

        <footer className="mt-4 flex items-start gap-3 px-2 py-1">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-subtle" />
          <p className="text-[11.5px] leading-relaxed text-subtle">
            Suas medidas são salvas automaticamente e usadas para personalizar seu personagem e sua
            evolução.
          </p>
        </footer>
      </main>

      <BottomNav active="/medidas" />
    </PhoneFrame>
  );
}

function Row({
  label,
  unit,
  value,
  editing,
  onChange,
  icon,
}: {
  label: string;
  unit: string;
  value: string;
  editing: boolean;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-line bg-surface px-4 py-2.5">
      <span className="flex items-center gap-2 text-[14.5px] font-medium text-foreground/90">
        {icon}
        {label}
      </span>
      <div className="flex items-center gap-2">
        {editing ? (
          <input
            aria-label={label}
            inputMode="decimal"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-20 rounded-lg border border-line bg-surface-2 px-2 py-1.5 text-right text-[15px] font-semibold tracking-tight focus:border-lime focus:outline-none"
          />
        ) : (
          <span className="text-[15px] font-semibold tracking-tight">{value}</span>
        )}
        <span className="w-5 text-xs text-subtle">{unit}</span>
      </div>
    </div>
  );
}
