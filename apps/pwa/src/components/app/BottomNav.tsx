import { Link } from "@tanstack/react-router";
import { BarChart3, ClipboardList, User, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/home", label: "Personagem", Icon: UserRound },
  { to: "/medidas", label: "Medidas", Icon: ClipboardList },
  { to: "/evolucao", label: "Evolução", Icon: BarChart3 },
  { to: "/perfil", label: "Perfil", Icon: User },
] as const;

export function BottomNav({ active }: { active: "/home" | "/medidas" | "/evolucao" | "/perfil" }) {
  return (
    <footer className="z-30 flex w-full shrink-0 flex-col border-t border-line/70 bg-surface/60 px-3 pb-1 pt-2.5">
      <div className="grid grid-cols-4 items-center justify-items-center">
        {tabs.map(({ to, label, Icon }) => {
          const isActive = to === active;
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                "flex flex-col items-center py-1 transition",
                isActive ? "text-lime" : "text-subtle hover:text-foreground",
              )}
            >
              <Icon className="h-5 w-5" strokeWidth={1.8} />
              <span className={cn("mt-1 text-[10px]", isActive ? "font-semibold" : "font-medium")}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
