import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import { BrandLogo, HomeIndicator, PhoneFrame, StatusBar } from "@/components/app/PhoneFrame";
import { ProgressRing } from "@/components/app/ProgressRing";
import { useGenderAvatar } from "@/hooks/use-gender-avatar";

export const Route = createFileRoute("/mapear/concluido")({
  component: MappingComplete,
  head: () => ({
    meta: [
      { title: "Mapeamento concluído | EVOLUA" },
      {
        name: "description",
        content: "Seu corpo foi mapeado com sucesso e seu avatar está calibrado.",
      },
      { property: "og:title", content: "Mapeamento concluído | EVOLUA" },
      { property: "og:description", content: "9 de 9 regiões mapeadas. Seu avatar está pronto." },
    ],
  }),
});

const checklist = [
  "9/9 regiões mapeadas",
  "Avatar calibrado",
  "Pronto para acompanhar sua evolução",
];

function MappingComplete() {
  const { avatar } = useGenderAvatar();
  return (
    <PhoneFrame>
      <div className="z-20 flex w-full shrink-0 flex-col">
        <StatusBar />
        <div className="flex w-full items-center justify-center pb-3 pt-4">
          <BrandLogo />
        </div>
        <div className="space-y-1.5 px-6 text-center">
          <h1 className="text-[23px] font-bold leading-tight tracking-tight">
            Mapeamento concluído
          </h1>
          <p className="mx-auto max-w-[310px] text-[12.5px] leading-relaxed text-subtle">
            Seu corpo foi mapeado com sucesso.
            <br />
            Agora você tem um avatar real para acompanhar sua evolução.
          </p>
        </div>
      </div>

      <div className="relative my-auto flex max-h-[420px] min-h-[240px] w-full flex-1 items-center justify-center overflow-hidden">
        <img
          src={avatar.mapped}
          alt="Avatar do corpo mapeado em 3D"
          className="avatar-blend-bottom h-full max-h-[360px] w-auto object-contain"
        />
      </div>

      <div className="z-30 flex w-full shrink-0 flex-col space-y-3 px-5 pb-1">
        <section className="rounded-2xl border border-line bg-surface/95 px-4 py-3 backdrop-blur-md">
          {checklist.map((item, i) => (
            <div key={item}>
              {i > 0 && <div className="my-1 h-px w-full bg-white/[0.07]" />}
              <div className="flex items-center py-1.5">
                <div className="mr-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.8px] border-lime">
                  <Check className="h-3 w-3 text-lime" strokeWidth={3.5} />
                </div>
                <span className="text-[13px] font-medium text-foreground/95">{item}</span>
              </div>
            </div>
          ))}
        </section>

        <div className="flex w-full items-center justify-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5">
          <ProgressRing value={100} className="h-5 w-5" />
          <span className="text-[13px] font-semibold tracking-wide">100% completo</span>
        </div>

        <Link
          to="/home"
          className="glow-lime flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-[14.5px] font-bold text-primary-foreground transition active:scale-[0.98]"
        >
          <span>Ver meu personagem</span>
          <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
        </Link>
        <HomeIndicator className="pt-2" />
      </div>
    </PhoneFrame>
  );
}
