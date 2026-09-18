import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ChevronRight, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Field, SocialButton } from "@/routes/entrar";
import { AppleIcon, GoogleIcon } from "@/components/app/SocialIcons";
import { HomeIndicator, PhoneFrame, StatusBar, TopNav } from "@/components/app/PhoneFrame";

export const Route = createFileRoute("/criar-conta")({
  component: SignUp,
  head: () => ({
    meta: [
      { title: "Criar sua conta | EVOLUA" },
      { name: "description", content: "Crie sua conta EVOLUA e dê o primeiro passo para evoluir." },
      { property: "og:title", content: "Criar sua conta | EVOLUA" },
      { property: "og:description", content: "Dê o primeiro passo para evoluir com o EVOLUA." },
    ],
  }),
});

function SignUp() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <PhoneFrame>
      <StatusBar />
      <TopNav backTo="/" />

      <main className="no-scrollbar flex flex-1 flex-col justify-between overflow-y-auto px-6 pb-4 pt-4">
        <div>
          <div className="mb-5">
            <h1 className="text-[22px] font-bold leading-tight tracking-tight">Criar sua conta</h1>
            <p className="mt-1 text-[13px] text-subtle">Dê o primeiro passo para evoluir.</p>
          </div>

          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              void navigate({ to: "/onboarding/dados" });
            }}
          >
            <Field
              icon={<User className="h-5 w-5" strokeWidth={1.8} />}
              label="Nome completo"
              htmlFor="name"
            >
              <input
                id="name"
                type="text"
                placeholder="Ex.: Rafael Silva"
                className="w-full border-0 bg-transparent p-0 text-[13px] font-medium placeholder-subtle/70 focus:outline-none focus:ring-0"
              />
            </Field>

            <Field
              icon={<Mail className="h-5 w-5" strokeWidth={1.8} />}
              label="E-mail"
              htmlFor="signup-email"
            >
              <input
                id="signup-email"
                type="email"
                placeholder="Ex.: seuemail@exemplo.com"
                className="w-full border-0 bg-transparent p-0 text-[13px] font-medium placeholder-subtle/70 focus:outline-none focus:ring-0"
              />
            </Field>

            <Field
              icon={<Lock className="h-5 w-5" strokeWidth={1.8} />}
              label="Senha"
              htmlFor="signup-password"
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
                id="signup-password"
                type={show ? "text" : "password"}
                placeholder="Mínimo de 8 caracteres"
                className="w-full border-0 bg-transparent p-0 text-[13px] font-medium placeholder-subtle/70 focus:outline-none focus:ring-0"
              />
            </Field>

            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-lime px-4 py-3.5 text-[14px] font-bold text-primary-foreground shadow-lg transition active:scale-[0.99]"
              >
                <span>Criar conta</span>
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

        <footer className="mt-4 text-center">
          <p className="px-3 text-[10.5px] leading-tight text-subtle">
            Ao criar uma conta, você concorda com nossos{" "}
            <span className="underline">Termos de Uso</span> e{" "}
            <span className="underline">Política de Privacidade</span>.
          </p>
          <div className="mt-3 text-[12.5px] text-subtle">
            Já tem uma conta?
            <Link to="/entrar" className="ml-1 font-semibold text-lime hover:underline">
              Entrar
            </Link>
          </div>
        </footer>
      </main>

      <HomeIndicator />
    </PhoneFrame>
  );
}
