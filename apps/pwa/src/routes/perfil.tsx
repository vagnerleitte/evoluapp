import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, ChevronRight, LogOut, Ruler, Shield, UserRound } from "lucide-react";
import { BottomNav } from "@/components/app/BottomNav";
import { BrandLogo, PhoneFrame, StatusBar } from "@/components/app/PhoneFrame";
import { useGenderAvatar } from "@/hooks/use-gender-avatar";

export const Route = createFileRoute("/perfil")({
  component: Profile,
  head: () => ({
    meta: [
      { title: "Seu perfil | EVOLUA" },
      { name: "description", content: "Gerencie seus dados, medidas e preferências no EVOLUA." },
      { property: "og:title", content: "Seu perfil | EVOLUA" },
      { property: "og:description", content: "Dados pessoais, notificações e privacidade." },
    ],
  }),
});

const items = [
  { Icon: UserRound, label: "Dados pessoais", to: "/onboarding/dados" },
  { Icon: Ruler, label: "Minhas medidas", to: "/medidas" },
  { Icon: Bell, label: "Notificações", to: "/perfil" },
  { Icon: Shield, label: "Privacidade", to: "/perfil" },
] as const;

function Profile() {
  const { avatar, profile } = useGenderAvatar();
  return (
    <PhoneFrame>
      <StatusBar />
      <div className="flex w-full shrink-0 items-center justify-center pb-2 pt-3">
        <BrandLogo />
      </div>

      <main className="no-scrollbar flex-1 overflow-y-auto px-5 pb-4 pt-2">
        <section className="flex items-center gap-4 rounded-3xl border border-line bg-surface p-4">
          <img
            src={avatar.front}
            alt={`Avatar de ${profile.nome}`}
            className="h-16 w-16 rounded-2xl object-cover object-top"
          />
          <div>
            <h1 className="text-lg font-bold tracking-tight">{profile.nome}</h1>
            <p className="text-xs text-subtle">Mapeamento 100% completo</p>
          </div>
        </section>

        <section className="mt-4 space-y-2">
          {items.map(({ Icon, label, to }) => (
            <Link
              key={label}
              to={to}
              className="flex items-center justify-between rounded-2xl border border-line bg-surface px-4 py-3.5 transition active:bg-surface-2"
            >
              <span className="flex items-center gap-3.5">
                <Icon className="h-5 w-5 text-subtle" strokeWidth={1.8} />
                <span className="text-[14.5px] font-medium">{label}</span>
              </span>
              <ChevronRight className="h-4 w-4 text-subtle" />
            </Link>
          ))}
        </section>

        <Link
          to="/"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-line bg-surface px-4 py-3.5 text-sm font-semibold text-subtle transition active:scale-[0.99]"
        >
          <LogOut className="h-4 w-4" />
          Sair da conta
        </Link>
      </main>

      <BottomNav active="/perfil" />
    </PhoneFrame>
  );
}
