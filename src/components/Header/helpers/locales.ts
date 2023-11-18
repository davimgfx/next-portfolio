import { i18n } from "@/config/i18n.config";
import { brazilFlag, EnglishFlag } from "@/assets/flags";
import { StaticImageData } from "next/image";

type FlagType = {
  "en-US": { country: string; flag: { src: StaticImageData; alt: string } };
  "pt-BR": { country: string; flag: { src: StaticImageData; alt: string } };
};

export const flag: FlagType = {
  "en-US": {
    country: "English",
    flag: {
      src: EnglishFlag,
      alt: "Alternative text for English flag",
    },
  },
  "pt-BR": {
    country: "Brazil",
    flag: {
      src: brazilFlag,
      alt: "Alternative text for Brazil flag",
    },
  },
};

export type FlagKey = keyof typeof flag;

export const locales = i18n.locales.map((code) => {
  const { country, flag: flagInfo } = flag[code as FlagKey];
  return { code, country, flag: { src: flagInfo.src, alt: flagInfo.alt } };
});
