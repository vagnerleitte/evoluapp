import { useCallback, useSyncExternalStore } from "react";
import { getAvatar, type BodyType, type Gender } from "@/lib/avatars";
import {
  DEFAULT_PROFILE,
  parseNumber,
  readProfile,
  subscribeProfile,
  writeProfile,
  type MeasureKey,
  type Profile,
} from "@/lib/profile-store";

function snapshot(): Profile {
  return readProfile();
}

export function useProfile() {
  const profile = useSyncExternalStore(subscribeProfile, snapshot, () => DEFAULT_PROFILE);

  const update = useCallback((patch: Partial<Profile>) => {
    writeProfile({ ...readProfile(), ...patch });
  }, []);

  const setMeasure = useCallback((key: MeasureKey, value: string) => {
    const current = readProfile();
    writeProfile({ ...current, measures: { ...current.measures, [key]: value } });
  }, []);

  const setGender = useCallback((gender: Gender) => update({ gender }), [update]);
  const setHeight = useCallback((alturaCm: string) => update({ alturaCm }), [update]);
  const setWeight = useCallback((value: string) => setMeasure("peso", value), [setMeasure]);

  const heightInMeters = parseNumber(profile.alturaCm) / 100;
  const bmi = parseNumber(profile.measures.peso) / heightInMeters ** 2;
  const bodyType: BodyType = Number.isFinite(bmi) && bmi >= 25 ? "overweight" : "fit";

  return {
    profile,
    update,
    setMeasure,
    setGender,
    setHeight,
    setWeight,
    gender: profile.gender,
    height: profile.alturaCm,
    weight: profile.measures.peso,
    bmi,
    bodyType,
    avatar: getAvatar(profile.gender, bodyType),
  };
}
