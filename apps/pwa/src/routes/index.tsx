import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, LineChart, Target, Trophy } from "lucide-react";
import { BrandLogo, HomeIndicator, PhoneFrame, StatusBar } from "@/components/app/PhoneFrame";
import { useGenderAvatar } from "@/hooks/use-gender-avatar";

export const Route = createFileRoute("/")({
  component: Welcome,
  head: () => ({
    meta: [
      { title: "EVOLUA — Acompanhe sua evolução corporal" },
      {
        name: "description",
        content:
          "Mapeie seu corpo, registre suas medidas e acompanhe sua evolução com um avatar 3D real.",
      },
      { property: "og:title", content: "EVOLUA — Acompanhe sua evolução corporal" },
      {
        property: "og:description",
        content: "Mapeie seu corpo, registre medidas e conquiste sua melhor versão.",
      },
    ],
  }),
});

const features = [
  { Icon: LineChart, title: "Monitore seu progresso", sub: "Dados reais, resultados reais." },
  { Icon: Target, title: "Defina seus objetivos", sub: "Mais disciplina, mais resultado." },
  { Icon: Trophy, title: "Uma versão mais forte de você", sub: "Hoje e sempre." },
];

function Welcome() {
  const { avatar } = useGenderAvatar();
  return (
    <PhoneFrame>
      <div
        className="pointer-events-none absolute -right-16 top-10 z-0 h-[600px] w-[310px] overflow-hidden"
        aria-hidden="true"
      >
        <img
          alt=""
          src={avatar.full}
          className="avatar-blend-side h-full w-full scale-105 object-cover object-top opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-95" />
      </div>

      <div className="relative z-10 flex flex-col px-6 pt-0">
        <StatusBar className="px-1 pb-4" />
        <BrandLogo className="mt-1" />

        <section className="mt-8 max-w-[240px]">
          <h1 className="text-[31px] font-extrabold leading-[1.12] tracking-tight">
            Seu corpo evolui com você.
          </h1>
          <p className="mt-3.5 pr-1 text-[13px] font-medium leading-relaxed text-subtle">
            Acompanhe sua evolução corporal, defina metas e conquiste sua melhor versão.
          </p>
        </section>

        <section className="mt-7 flex max-w-[260px] flex-col space-y-4">
          {features.map(({ Icon, title, sub }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface/90">
                <Icon className="h-[18px] w-[18px] text-lime" strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="text-[13px] font-semibold leading-snug">{title}</h2>
                <p className="mt-0.5 text-[11px] leading-tight text-subtle">{sub}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <footer className="relative z-10 flex flex-col items-center bg-gradient-to-t from-background via-background to-transparent px-6 pb-2 pt-3">
        <Link
          to="/criar-conta"
          className="glow-lime mb-3 flex h-[52px] w-full items-center justify-between rounded-[18px] bg-lime px-6 text-[15px] font-bold text-primary-foreground transition active:scale-[0.98]"
        >
          <span className="flex-1 pl-4 text-center font-bold tracking-tight">Criar conta</span>
          <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
        </Link>
        <Link
          to="/entrar"
          className="mb-3.5 flex h-[50px] w-full items-center justify-center rounded-[18px] border border-line bg-surface text-[15px] font-semibold transition active:scale-[0.98]"
        >
          Entrar
        </Link>
        <p className="text-center text-[11px] font-medium tracking-tight text-subtle">
          Uma vida melhor em constante evolução.
        </p>
        <HomeIndicator className="pt-3.5" />
      </footer>
    </PhoneFrame>
  );
}
