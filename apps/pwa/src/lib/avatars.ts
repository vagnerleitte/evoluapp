import femaleArm from "@/assets/avatar-feminino-arm.jpg";
import femaleFront from "@/assets/avatar-feminino-front.jpg";
import femaleFull from "@/assets/avatar-feminino-full.jpg";
import femaleToday from "@/assets/avatar-feminino-today.jpg";
import femaleOverweightArm from "@/assets/avatar-feminino-acima-peso-arm.jpg";
import femaleOverweightFront from "@/assets/avatar-feminino-acima-peso-front.jpg";
import femaleOverweightFull from "@/assets/avatar-feminino-acima-peso-full.jpg";
import femaleOverweightToday from "@/assets/avatar-feminino-acima-peso-today.jpg";
import maleOverweightArm from "@/assets/avatar-masculino-acima-peso-arm.jpg";
import maleOverweightFront from "@/assets/avatar-masculino-acima-peso-front.jpg";
import maleOverweightFull from "@/assets/avatar-masculino-acima-peso-full.jpg";
import maleOverweightToday from "@/assets/avatar-masculino-acima-peso-today.jpg";
import neutralArm from "@/assets/avatar-neutro-arm.jpg";
import neutralFront from "@/assets/avatar-neutro-front.jpg";
import neutralFull from "@/assets/avatar-neutro-full.jpg";
import neutralToday from "@/assets/avatar-neutro-today.jpg";

export type Gender = "Masculino" | "Feminino" | "Outro" | "Prefiro não informar";
export type BodyType = "fit" | "overweight";
export type AvatarAssets = {
  front: string;
  full: string;
  mapped: string;
  arm: string;
  today: string;
};

const AVATAR_FRONT =
  "https://lh3.googleusercontent.com/aida/AEtjO1VR6Vu-t-Fy0AYjLhnXB9ThruvNZSVWA2TD0kjhaBZiZoaihDWwCLNZeS8kKcvrah2QUnHf-wAvdPatJwNxm962nt2sgkHdSaYUFIH-aDU9ptzhR6-Z3Vz8xrphyaMRTQMmjsnby6PGakj-fmrGYDiqufNf-lAJgDLfARX3kTF4UbN8KXh_x95JsdncDmtWK8KfPfPt9BUo3QxBVRx4UCo3EGQHYWfCh1m9spQCepibqvjGm5mCQd7Ziw";

const AVATAR_FULL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGdMJYpW6MT3z-ab6doB5OuNyNC3OizvUjhRG6-8TWDocOz3WyIo0tfPIBOuxkIsMqL_akZZFZUqjCnRe01FQMCKwE-J3-W-nR6PHIbDDjfShKWC8l4854Tg-JiTDX72bns1s9Rf-cnVeElZn56eCGWROegPyTqBcMNMrWckw5gXPLFYeCxSLg4on5JYCN0Y2iAeuBBIKA9apvFS6JkXL39i-D_zBh0G8QaFIbVQEawLjUDRhvKnlX";

const AVATAR_MAPPED =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBzXqbNcGWd7JD3U051TDjNl-7DflxuBAKjdB_DHsX6jpiUTuACQjgf15wnZj0_NIPOVZH2a0w-RpO260TlA1tKdLw0WZ7NyJsZzsThknoUrjNxllGApPRaB8-a2ItLFGimoUXTzYIvAduXWOS_LKhcK-L0WjoSptNie8ZBDdj-CBtvscjJ17eEeWuDez1fb2B0H8ODU8TLjlC6AEz7OAHBCDQdVTK7W9WM3KvDZXj-W3s0zA4OMwqP";

const AVATAR_ARM =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC_g5Ykz1h3DJiqZ4z7F0yMvV6wqKa3AwAsas-VrfkSQpUE6mR-hPPuhP8A88eHb3EoCjECh8bSMtGnyuHEpcaYg-NUtMML-haiEX2h4vnm0qDe26IHDAXC9-OdbNt6kK0ePV0S-Ax1TCzLB1QDN5kaGBLhCs8ZfeKmdwJhTiJzBJy8LN7AtfiRupjRaqQG70FGO9f-79buMuIjFvBXTzfgOj7g0E_3JSgjvoNrSivs66y3s0sfv9Jc";

const AVATAR_TODAY =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDc2ToZUa566nqBq0txpzdDxH_dzY5hlRHlFsOr17aB-PnWORikWKk7oylMjF8S4J2zU2KTzwNatPovrAkK_CAVsUbKguh4hGjHtiig8qBWPLyAgmWk5qW8CrHh-7gdCQm1-Hv5Uzs6lkT1q8pLkA2Qm4pGd8hYUN7YL36ieQQqFnm-Gj00EXDGvYkFprpr1wwsT2iKSSMPFnwrXa19Wf3GEC8uTDUrmmWNEq0vQedV4oc67RxZTpMj";

export const DEFAULT_GENDER: Gender = "Masculino";

export const AVATARS_BY_GENDER: Record<Gender, AvatarAssets> = {
  Masculino: {
    front: AVATAR_FRONT,
    full: AVATAR_FULL,
    mapped: AVATAR_MAPPED,
    arm: AVATAR_ARM,
    today: AVATAR_TODAY,
  },
  Feminino: {
    front: femaleFront,
    full: femaleFull,
    mapped: femaleFront,
    arm: femaleArm,
    today: femaleToday,
  },
  Outro: {
    front: neutralFront,
    full: neutralFull,
    mapped: neutralFront,
    arm: neutralArm,
    today: neutralToday,
  },
  "Prefiro não informar": {
    front: neutralFront,
    full: neutralFull,
    mapped: neutralFront,
    arm: neutralArm,
    today: neutralToday,
  },
};

const OVERWEIGHT_AVATARS_BY_GENDER: Partial<Record<Gender, AvatarAssets>> = {
  Masculino: {
    front: maleOverweightFront,
    full: maleOverweightFull,
    mapped: maleOverweightFront,
    arm: maleOverweightArm,
    today: maleOverweightToday,
  },
  Feminino: {
    front: femaleOverweightFront,
    full: femaleOverweightFull,
    mapped: femaleOverweightFront,
    arm: femaleOverweightArm,
    today: femaleOverweightToday,
  },
};

export function getAvatar(gender: Gender, bodyType: BodyType): AvatarAssets {
  if (bodyType === "overweight") {
    return OVERWEIGHT_AVATARS_BY_GENDER[gender] ?? AVATARS_BY_GENDER[gender];
  }
  return AVATARS_BY_GENDER[gender];
}

export function isGender(value: string | null): value is Gender {
  return value !== null && value in AVATARS_BY_GENDER;
}
