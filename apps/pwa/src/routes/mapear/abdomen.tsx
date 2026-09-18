import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useState } from "react";
import {
  BrandLogo,
  BackButton,
  HomeIndicator,
  PhoneFrame,
  StatusBar,
} from "@/components/app/PhoneFrame";
import { useGenderAvatar } from "@/hooks/use-gender-avatar";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/mapear/abdomen")({
  component: MapAbdomen,
  head: () => ({
    meta: [
      { title: "Mapear abdômen | EVOLUA" },
      {
        name: "description",
        content: "Registre as medidas do abdômen superior, médio e inferior.",
      },
      { property: "og:title", content: "Mapear abdômen | EVOLUA" },
      {
        property: "og:description",
        content: "Três medidas para completar o mapeamento do abdômen.",
      },
    ],
  }),
});

const measures = [
  { title: "Abdômen superior", hint: "Logo abaixo das costelas", value: "81,5", band: "top-[26%]" },
  { title: "Abdômen médio", hint: "Na altura do umbigo", value: "84,0", band: "top-[48%]" },
  {
    title: "Abdômen inferior",
    hint: "Acima do osso do quadril",
    value: "87,2",
    band: "bottom-[22%]",
  },
];

function MapAbdomen() {
  const [view, setView] = useState<"Frente" | "Costas">("Frente");
  const navigate = useNavigate();
  const { avatar } = useGenderAvatar();

  return (
    <PhoneFrame>
      <StatusBar />
      <nav className="z-30 flex w-full items-center justify-between px-5 pb-1 pt-2">
        <BackButton to="/mapear" />
        <BrandLogo />
        <div className="w-8" />
      </nav>

      <div className="no-scrollbar flex flex-1 flex-col justify-between overflow-y-auto px-5 pb-4 pt-1">
        <div className="relative flex min-h-[320px] w-full">
          <div className="z-20 flex w-[58%] flex-col justify-between pb-2 pt-1">
            <div>
              <h1 className="text-[17px] font-bold leading-tight tracking-tight">
                Mapeamento corporal
              </h1>
              <p className="mt-1 text-[12px] font-bold tracking-wide text-lime">62% completo</p>
              <div className="mt-2 flex max-w-[130px] items-center gap-1.5">
                <span className="h-[3.5px] flex-1 rounded-full bg-lime" />
                <span className="h-[3.5px] flex-1 rounded-full bg-lime" />
                <span className="h-[3.5px] flex-1 rounded-full bg-line" />
                <span className="h-[3.5px] flex-1 rounded-full bg-line" />
              </div>
            </div>

            <div className="mt-7">
              <span className="block text-[12px] font-medium tracking-wide text-subtle">
                Região atual
              </span>
              <h2 className="mt-0.5 text-[23px] font-extrabold tracking-tight">Abdômen</h2>
              <p className="mt-0.5 text-[11.5px] text-subtle">3 medidas pendentes</p>
            </div>

            <div className="mt-8 inline-flex w-fit rounded-full border border-line bg-surface p-[3px]">
              {(["Frente", "Costas"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setView(option)}
                  className={cn(
                    "rounded-full px-3.5 py-1 text-[11px] transition",
                    view === option
                      ? "bg-lime font-bold text-primary-foreground"
                      : "font-medium text-subtle hover:text-foreground",
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-[-10px] top-0 flex w-[55%] items-end justify-center overflow-hidden">
            <div className="relative flex h-full w-full items-end justify-center overflow-hidden">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
              <img
                src={avatar.front}
                alt="Modelo 3D com o abdômen destacado"
                className="h-[320px] w-full object-cover object-[center_12%] opacity-95"
              />
              <div className="absolute inset-y-0 bottom-[16%] left-[22%] right-[18%] top-[48%] z-20">
                <div className="mesh-pattern relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border-2 border-lime/80 bg-lime/15">
                  <div className="h-1/3 w-full border-b border-dashed border-lime/60" />
                  <div className="h-1/3 w-full border-b border-dashed border-lime/60" />
                  <div className="absolute inset-y-0 left-1/2 w-0 border-l border-dashed border-lime/50" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="z-20 mt-4">
          <h3 className="mb-2.5 text-[14px] font-bold tracking-tight">Medidas do abdômen</h3>
          <div className="space-y-2">
            {measures.map((m) => (
              <article
                key={m.title}
                className="flex items-center justify-between rounded-2xl border border-line bg-surface p-2.5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="relative flex h-[46px] w-[46px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-background">
                    <img
                      src={avatar.front}
                      alt=""
                      className="h-full w-full object-cover object-[center_35%] opacity-85"
                    />
                    <div
                      className={cn(
                        "absolute inset-x-1 h-[6px] rounded-full border border-lime bg-lime/60",
                        m.band,
                      )}
                    />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-bold leading-tight">{m.title}</h4>
                    <p className="mt-0.5 text-[10.5px] text-subtle">{m.hint}</p>
                  </div>
                </div>
                <div className="flex min-w-[76px] items-baseline justify-center gap-1.5 rounded-xl border border-line bg-surface-2 px-3.5 py-2">
                  <span className="font-display text-[14.5px] font-bold tracking-tight">
                    {m.value}
                  </span>
                  <span className="text-[11px] font-medium text-subtle">cm</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="w-full pb-1 pt-3">
          <button
            type="button"
            onClick={() => void navigate({ to: "/mapear/salvo" })}
            className="glow-lime flex h-[50px] w-full items-center justify-center gap-2 rounded-2xl bg-lime text-[14.5px] font-extrabold tracking-tight text-primary-foreground transition active:scale-[0.99]"
          >
            <span>Salvar medidas</span>
            <Check className="h-4 w-4" strokeWidth={3} />
          </button>
          <HomeIndicator className="pb-0" />
        </div>
      </div>
    </PhoneFrame>
  );
}
