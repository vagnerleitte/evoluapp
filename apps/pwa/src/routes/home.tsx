import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, ChevronRight, PersonStanding, Ruler, Scale, Shirt } from "lucide-react";
import { BottomNav } from "@/components/app/BottomNav";
import { BrandLogo, HomeIndicator, PhoneFrame, StatusBar } from "@/components/app/PhoneFrame";
import { useGenderAvatar } from "@/hooks/use-gender-avatar";
import { firstName, parseNumber } from "@/lib/profile-store";

export const Route = createFileRoute("/home")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Seu perfil corporal | EVOLUA" },
      {
        name: "description",
        content: "Veja seu personagem, suas medidas atuais e continue o mapeamento.",
      },
      { property: "og:title", content: "Seu perfil corporal | EVOLUA" },
      {
        property: "og:description",
        content: "Continue mapeando seu corpo e acompanhe sua evolução.",
      },
    ],
  }),
});

function Home() {
  const { avatar, profile, height } = useGenderAvatar();
  const heightMeters = (parseNumber(height) / 100).toFixed(2).replace(".", ",");
  const stats = [
    { Icon: PersonStanding, label: "Altura", value: `${heightMeters} m` },
    { Icon: Scale, label: "Peso", value: `${profile.measures.peso} kg` },
    { Icon: Ruler, label: "Cintura", value: `${profile.measures.abdomen} cm` },
    { Icon: Shirt, label: "Peitoral", value: `${profile.measures.peitoral} cm` },
  ];
  return (
    <PhoneFrame>
      <div className="z-10 flex w-full shrink-0 flex-col">
        <StatusBar />
        <nav className="flex items-center justify-between px-5 pb-2 pt-1.5">
          <BrandLogo />
          <button
            type="button"
            aria-label="Notificações"
            className="flex h-9 w-9 items-center justify-center rounded-full text-subtle transition hover:text-foreground"
          >
            <Bell className="h-5 w-5" strokeWidth={1.8} />
          </button>
        </nav>
        <section className="px-5 pb-3 pt-2">
          <h1 className="text-2xl font-bold leading-tight tracking-tight">
            Bom dia, {firstName(profile.nome)}
          </h1>
          <p className="mt-1 text-[13px] leading-snug text-subtle">
            Continue mapeando seu corpo e acompanhe sua evolução.
          </p>
        </section>
      </div>

      <main className="no-scrollbar flex flex-1 flex-col justify-between overflow-y-auto px-4 pb-2">
        <section className="relative flex h-[340px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface to-background p-5 shadow-lg">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-9 -top-4 h-[400px] w-72 overflow-hidden">
              <img
                src={avatar.front}
                alt="Avatar 3D do usuário"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface via-transparent to-transparent opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>

            <div className="absolute right-[138px] top-[160px] h-2.5 w-2.5 rounded-full border border-white/90 bg-white/70" />
            <div className="absolute right-[76px] top-[166px] h-2.5 w-2.5 rounded-full border border-white/90 bg-white/70" />
            <div className="absolute right-[162px] top-[194px] h-2.5 w-2.5 rounded-full border border-white/80 bg-white/60" />
            <div className="absolute right-[75px] top-[250px] h-2.5 w-2.5 rounded-full border border-white/80 bg-white/60" />

            <div className="pointer-events-auto absolute right-[100px] top-[200px] z-20 flex items-center">
              <div className="relative flex items-center justify-center">
                <span className="pulse-ring absolute inline-flex h-7 w-7 rounded-full bg-lime/60" />
                <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full border border-lime bg-lime/30">
                  <span className="h-2 w-2 rounded-full bg-lime" />
                </span>
              </div>
              <div className="ml-1.5 flex items-center rounded-full border border-lime/50 bg-black/85 px-2.5 py-0.5 backdrop-blur-md">
                <span className="text-[11px] font-medium tracking-wide">Abdômen</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex max-w-[55%] flex-col">
            <h2 className="text-base font-bold tracking-tight">Perfil corporal</h2>
            <div className="mt-2.5 flex flex-col space-y-2">
              <span className="text-xs font-bold tracking-wide text-lime">62% completo</span>
              <div className="h-1.5 w-28 overflow-hidden rounded-full bg-line">
                <div className="h-full w-[62%] rounded-full bg-lime" />
              </div>
            </div>
          </div>

          <ChevronRight
            className="absolute right-5 top-5 z-10 h-4 w-4 text-subtle"
            strokeWidth={2.5}
          />

          <div className="relative z-20 w-full pt-4">
            <Link
              to="/mapear"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-lime px-6 py-3.5 text-[14px] font-bold tracking-tight text-primary-foreground shadow-lg transition active:scale-[0.98]"
            >
              <span>Continuar mapeamento</span>
              <ChevronRight className="h-4 w-4" strokeWidth={3} />
            </Link>
          </div>
        </section>

        <section className="mb-2 mt-4">
          <div className="mb-2.5 flex items-center justify-between px-1">
            <h3 className="text-[13px] font-bold tracking-tight">Suas medidas atuais</h3>
            <span className="text-[10.5px] font-medium text-subtle">
              Última atualização: hoje, 09:41
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {stats.map(({ Icon, label, value }) => (
              <Link
                key={label}
                to="/medidas"
                className="flex flex-col items-center justify-center rounded-2xl border border-line bg-surface p-2.5 text-center"
              >
                <Icon className="mb-1 h-5 w-5 text-subtle" strokeWidth={1.5} />
                <span className="text-[10.5px] text-subtle">{label}</span>
                <span className="mt-0.5 text-[12.5px] font-bold tracking-tight">{value}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <BottomNav active="/home" />
      <HomeIndicator className="bg-surface/60 pb-1 pt-1" />
    </PhoneFrame>
  );
}
