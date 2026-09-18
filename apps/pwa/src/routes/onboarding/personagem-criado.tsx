import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { BrandLogo, HomeIndicator, PhoneFrame, StatusBar } from "@/components/app/PhoneFrame";
import { ProgressRing } from "@/components/app/ProgressRing";
import { useGenderAvatar } from "@/hooks/use-gender-avatar";

export const Route = createFileRoute("/onboarding/personagem-criado")({
  component: CharacterCreated,
  head: () => ({
    meta: [
      { title: "Seu personagem foi criado | EVOLUA" },
      {
        name: "description",
        content: "Seu personagem 3D está pronto. Agora vamos mapear seu corpo.",
      },
      { property: "og:title", content: "Seu personagem foi criado | EVOLUA" },
      {
        property: "og:description",
        content: "Vamos mapear seu corpo para deixar seu avatar mais real.",
      },
    ],
  }),
});

function CharacterCreated() {
  const { avatar } = useGenderAvatar();
  return (
    <PhoneFrame>
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-lime/5 blur-[100px]" />

      <StatusBar />

      <section className="z-20 flex w-full shrink-0 flex-col items-center px-6 pt-3">
        <BrandLogo />
        <div className="mt-6 text-center">
          <h1 className="text-[29px] font-bold leading-[1.18] tracking-tight">
            Seu personagem
            <br />
            foi criado
          </h1>
          <p className="mx-auto mt-2.5 max-w-[250px] text-[13.5px] leading-snug text-subtle">
            Agora vamos mapear seu corpo para deixá-lo mais real.
          </p>
        </div>
      </section>

      <section className="pointer-events-none relative my-1 flex w-full flex-1 select-none items-center justify-center overflow-hidden">
        <div className="absolute bottom-6 h-[50px] w-[280px] rounded-full border border-lime/20 bg-lime/[0.03]" />
        <div className="scan-line pointer-events-none absolute inset-x-0 z-10 h-14 bg-gradient-to-b from-transparent via-lime/10 to-transparent" />
        <div className="relative flex h-full w-full items-center justify-center">
          <img
            src={avatar.front}
            alt="Avatar 3D em wireframe"
            className="wireframe-effect h-[105%] max-h-[420px] object-contain object-center opacity-80"
          />
          <div className="wireframe-grid pointer-events-none absolute inset-0" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </section>

      <footer className="z-20 flex w-full flex-col space-y-3.5 px-5 pb-1">
        <div className="flex h-[52px] w-full items-center justify-between rounded-full border border-line bg-surface/90 px-4">
          <div className="flex items-center gap-3">
            <ProgressRing value={12} className="h-6 w-6" />
            <span className="text-[13px] font-medium text-foreground/90">12% completo</span>
          </div>
          <ChevronRight className="h-4 w-4 text-subtle" />
        </div>

        <Link
          to="/mapear"
          className="glow-lime flex h-[54px] w-full items-center justify-center rounded-full bg-lime text-[15px] font-bold tracking-tight text-primary-foreground transition active:scale-[0.98]"
        >
          Conhecer meu personagem
        </Link>
        <HomeIndicator className="pt-1.5" />
      </footer>
    </PhoneFrame>
  );
}
