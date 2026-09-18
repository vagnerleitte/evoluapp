import { Link, useRouter } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-0 sm:p-4">
      <div
        className={cn(
          "relative flex h-[100dvh] w-full max-w-[400px] flex-col justify-between overflow-hidden bg-background text-foreground shadow-2xl sm:h-[852px] sm:rounded-[44px] sm:border-[6px] sm:border-surface-2",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function StatusBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex w-full shrink-0 select-none items-center justify-between px-7 pt-3 text-[15px] font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <svg className="h-3.5 w-4 fill-current" viewBox="0 0 17 12">
          <rect height="3.5" rx="0.7" width="2.5" x="0" y="8.5" />
          <rect height="6" rx="0.7" width="2.5" x="4" y="6" />
          <rect height="9" rx="0.7" width="2.5" x="8" y="3" />
          <rect height="11.5" rx="0.7" width="2.5" x="12" y="0.5" />
        </svg>
        <svg className="h-3.5 w-4 fill-current" viewBox="0 0 16 12">
          <path d="M8 2.8C10.5 2.8 12.8 3.8 14.5 5.4L15.9 3.9C13.8 2 11 0.8 8 0.8C5 0.8 2.2 2 0.1 3.9L1.5 5.4C3.2 3.8 5.5 2.8 8 2.8ZM8 6.4C9.6 6.4 11.1 7.1 12.2 8.2L13.6 6.7C12.1 5.3 10.1 4.4 8 4.4C5.9 4.4 3.9 5.3 2.4 6.7L3.8 8.2C4.9 7.1 6.4 6.4 8 6.4ZM8 10C8.8 10 9.5 10.7 9.5 11.5C9.5 12.3 8.8 13 8 13C7.2 13 6.5 12.3 6.5 11.5C6.5 10.7 7.2 10 8 10Z" />
        </svg>
        <div className="flex items-center">
          <div className="flex h-2.5 w-5 items-center rounded-[3px] border border-foreground/80 p-[1px]">
            <div className="h-full w-[85%] rounded-[1px] bg-foreground" />
          </div>
          <div className="ml-px h-1 w-0.5 rounded-r-sm bg-foreground/80" />
        </div>
      </div>
    </div>
  );
}

export function EvoluaMark({ className }: { className?: string }) {
  return (
    <svg className={cn("h-5 w-5 text-lime", className)} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L2 20h5.5l4.5-8.5L16.5 20H22L12 2z" />
    </svg>
  );
}

export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <EvoluaMark />
      <span className="text-base font-extrabold tracking-[0.18em] text-foreground">EVOLUA</span>
    </div>
  );
}

export function BackButton({ to }: { to?: string }) {
  const router = useRouter();
  if (to) {
    return (
      <Link
        to={to}
        aria-label="Voltar"
        className="-ml-1 flex h-8 w-8 items-center justify-start text-foreground/90 transition active:scale-95"
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
      </Link>
    );
  }
  return (
    <button
      type="button"
      aria-label="Voltar"
      onClick={() => router.history.back()}
      className="-ml-1 flex h-8 w-8 items-center justify-start text-foreground/90 transition active:scale-95"
    >
      <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
    </button>
  );
}

export function TopNav({ back = true, backTo }: { back?: boolean; backTo?: string }) {
  return (
    <nav className="relative flex w-full shrink-0 items-center justify-between px-5 pb-2 pt-2">
      {back ? <BackButton {...(backTo ? { to: backTo } : {})} /> : <div className="h-8 w-8" />}
      <div className="pointer-events-none absolute inset-x-0 flex items-center justify-center">
        <BrandLogo />
      </div>
      <div className="h-8 w-8" />
    </nav>
  );
}

export function HomeIndicator({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-full shrink-0 justify-center pb-2 pt-3", className)}>
      <div className="h-1 w-32 rounded-full bg-foreground/30" />
    </div>
  );
}
