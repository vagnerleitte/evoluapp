import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ChevronRight, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { AppleIcon, GoogleIcon } from "@/components/app/SocialIcons";
import { HomeIndicator, PhoneFrame, StatusBar, TopNav } from "@/components/app/PhoneFrame";

export const Route = createFileRoute("/entrar")({
  component: SignIn,
  head: () => ({
    meta: [
      { title: "Entrar na sua conta | EVOLUA" },
      {
        name: "description",
        content: "Acesse sua conta EVOLUA e continue sua jornada de evolução.",
      },
      { property: "og:title", content: "Entrar na sua conta | EVOLUA" },
      { property: "og:description", content: "Continue sua jornada de evolução corporal." },
    ],
  }),
});

function SignIn() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <div className="flex w-full flex-col">
        <StatusBar />
        <TopNav backTo="/" />

        <div className="px-6 pt-4">
          <div className="mb-5">
            <h1 className="text-[22px] font-bold leading-tight tracking-tight">
              Entrar na sua conta
            </h1>
            <p className="mt-1 text-[13px] text-subtle">Continue sua jornada de evolução.</p>
          </div>

          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              void navigate({ to: "/home" });
            }}
          >
            <Field
              icon={<Mail className="h-5 w-5" strokeWidth={1.8} />}
              label="E-mail"
              htmlFor="email"
            >
              <input
                id="email"
                type="email"
                required
                placeholder="Ex.: seuemail@exemplo.com"
                className="w-full border-0 bg-transparent p-0 text-[13px] font-medium text-foreground placeholder-subtle/70 focus:outline-none focus:ring-0"
              />
            </Field>

            <Field
              icon={<Lock className="h-5 w-5" strokeWidth={1.8} />}
              label="Senha"
              htmlFor="password"
              trailing={
                <button
                  type="button"
                  aria-label={show ? "Ocultar senha" : "Mostrar senha"}
                  onClick={() => setShow((v) => !v)}
                  className="ml-2 text-subtle transition hover:text-foreground"
                >
                  {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              }
            >
              <input
                id="password"
                type={show ? "text" : "password"}
                required
                placeholder="Digite sua senha"
                className="w-full border-0 bg-transparent p-0 text-[13px] font-medium text-foreground placeholder-subtle/70 focus:outline-none focus:ring-0"
              />
            </Field>

            <div className="flex justify-end pt-0.5">
              <button type="button" className="text-[12px] font-medium text-lime hover:underline">
                Esqueceu sua senha?
              </button>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-lime px-4 py-3.5 text-[14px] font-bold text-primary-foreground shadow-lg transition active:scale-[0.99]"
              >
                <span>Entrar</span>
                <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          </form>

          <div className="relative my-4 flex w-full items-center justify-center">
            <div className="flex-1 border-t border-line" />
            <span className="whitespace-nowrap px-3 text-[11px] text-subtle">ou continue com</span>
            <div className="flex-1 border-t border-line" />
          </div>

          <div className="space-y-2.5">
            <SocialButton icon={<GoogleIcon />} label="Continuar com Google" />
            <SocialButton icon={<AppleIcon />} label="Continuar com Apple" />
          </div>
        </div>
      </div>

      <footer className="mt-auto px-6 pb-1 pt-8 text-center">
        <div className="text-[12.5px] text-subtle">
          Ainda não tem uma conta?
          <Link to="/criar-conta" className="ml-1 font-semibold text-lime hover:underline">
            Criar conta
          </Link>
        </div>
        <HomeIndicator className="pt-4" />
      </footer>
    </PhoneFrame>
  );
}

export function Field({
  icon,
  label,
  htmlFor,
  trailing,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  htmlFor: string;
  trailing?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col justify-center rounded-2xl border border-line bg-surface px-3.5 py-2.5 transition focus-within:border-lime">
      <div className="flex items-center">
        <div className="mr-3 shrink-0 text-subtle">{icon}</div>
        <div className="min-w-0 flex-1">
          <label htmlFor={htmlFor} className="mb-1 block text-[11px] leading-none text-subtle">
            {label}
          </label>
          {children}
        </div>
        {trailing}
      </div>
    </div>
  );
}

export function SocialButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-2xl border border-line bg-surface/70 px-4 py-3 text-[13px] font-medium transition hover:bg-surface active:scale-[0.99]"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
