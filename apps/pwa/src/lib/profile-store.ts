import { DEFAULT_GENDER, isGender, type Gender } from "@/lib/avatars";

export type MeasureKey =
  | "peso"
  | "ombros"
  | "peitoral"
  | "abdomen"
  | "quadril"
  | "bracoDireito"
  | "bracoEsquerdo"
  | "coxaDireita"
  | "coxaEsquerda"
  | "envergadura";

export type Profile = {
  nome: string;
  nascimento: string;
  gender: Gender;
  alturaCm: string;
  measures: Record<MeasureKey, string>;
};

export const MEASURE_LABELS: { key: MeasureKey; label: string; unit: string; to: string }[] = [
  { key: "peso", label: "Peso", unit: "kg", to: "/medidas/cintura" },
  { key: "ombros", label: "Ombros", unit: "cm", to: "/medidas/cintura" },
  { key: "peitoral", label: "Peitoral", unit: "cm", to: "/medidas/cintura" },
  { key: "abdomen", label: "Abdômen", unit: "cm", to: "/medidas/cintura" },
  { key: "quadril", label: "Quadril", unit: "cm", to: "/medidas/cintura" },
  { key: "bracoDireito", label: "Braço direito", unit: "cm", to: "/medidas/braco-direito" },
  { key: "bracoEsquerdo", label: "Braço esquerdo", unit: "cm", to: "/medidas/braco-direito" },
  { key: "coxaDireita", label: "Coxa direita", unit: "cm", to: "/medidas/cintura" },
  { key: "coxaEsquerda", label: "Coxa esquerda", unit: "cm", to: "/medidas/cintura" },
  { key: "envergadura", label: "Envergadura", unit: "m", to: "/medidas/cintura" },
];

export const GENDER_KEY = "evolua-gender";
export const HEIGHT_KEY = "evolua-height-cm";
export const WEIGHT_KEY = "evolua-weight-kg";
const PROFILE_KEY = "evolua-profile";
export const PROFILE_EVENT = "evolua-profile-change";
export const GENDER_EVENT = "evolua-gender-change";
export const BODY_EVENT = "evolua-body-change";

export const DEFAULT_HEIGHT = "180";
export const DEFAULT_WEIGHT = "74,0";

const DEFAULT_MEASURES: Record<MeasureKey, string> = {
  peso: DEFAULT_WEIGHT,
  ombros: "124,0",
  peitoral: "102,0",
  abdomen: "84,0",
  quadril: "96,0",
  bracoDireito: "32,8",
  bracoEsquerdo: "32,1",
  coxaDireita: "57,4",
  coxaEsquerda: "57,0",
  envergadura: "1,96",
};

export const DEFAULT_PROFILE: Profile = {
  nome: "Rafael Silva",
  nascimento: "15/03/1995",
  gender: DEFAULT_GENDER,
  alturaCm: DEFAULT_HEIGHT,
  measures: DEFAULT_MEASURES,
};

let cache: { raw: string; value: Profile } | null = null;

function composeRaw() {
  return [
    window.localStorage.getItem(PROFILE_KEY) ?? "",
    window.localStorage.getItem(GENDER_KEY) ?? "",
    window.localStorage.getItem(HEIGHT_KEY) ?? "",
    window.localStorage.getItem(WEIGHT_KEY) ?? "",
  ].join("~");
}

export function readProfile(): Profile {
  const raw = composeRaw();
  if (cache && cache.raw === raw) return cache.value;

  let stored: Partial<Profile> = {};
  try {
    stored = JSON.parse(window.localStorage.getItem(PROFILE_KEY) ?? "{}") as Partial<Profile>;
  } catch {
    stored = {};
  }

  const savedGender = window.localStorage.getItem(GENDER_KEY);
  const savedHeight = window.localStorage.getItem(HEIGHT_KEY);
  const savedWeight = window.localStorage.getItem(WEIGHT_KEY);

  const value: Profile = {
    nome: stored.nome ?? DEFAULT_PROFILE.nome,
    nascimento: stored.nascimento ?? DEFAULT_PROFILE.nascimento,
    gender: isGender(savedGender) ? savedGender : DEFAULT_GENDER,
    alturaCm: savedHeight ?? stored.alturaCm ?? DEFAULT_HEIGHT,
    measures: {
      ...DEFAULT_MEASURES,
      ...(stored.measures ?? {}),
      peso: savedWeight ?? stored.measures?.peso ?? DEFAULT_WEIGHT,
    },
  };

  cache = { raw, value };
  return value;
}

export function writeProfile(next: Profile) {
  window.localStorage.setItem(
    PROFILE_KEY,
    JSON.stringify({
      nome: next.nome,
      nascimento: next.nascimento,
      alturaCm: next.alturaCm,
      measures: next.measures,
    }),
  );
  window.localStorage.setItem(GENDER_KEY, next.gender);
  window.localStorage.setItem(HEIGHT_KEY, next.alturaCm);
  window.localStorage.setItem(WEIGHT_KEY, next.measures.peso);
  window.dispatchEvent(new Event(PROFILE_EVENT));
  window.dispatchEvent(new Event(GENDER_EVENT));
  window.dispatchEvent(new Event(BODY_EVENT));
}

export function subscribeProfile(onChange: () => void) {
  const events = ["storage", PROFILE_EVENT, GENDER_EVENT, BODY_EVENT];
  events.forEach((e) => window.addEventListener(e, onChange));
  return () => events.forEach((e) => window.removeEventListener(e, onChange));
}

export function parseNumber(value: string) {
  return Number(String(value).replace(",", "."));
}

export function firstName(nome: string) {
  return nome.trim().split(/\s+/)[0] || "você";
}
