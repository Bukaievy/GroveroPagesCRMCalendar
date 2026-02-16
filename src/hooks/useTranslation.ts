import { useParams } from "react-router-dom";
import nlTranslations from "@/locales/nl.json";
import enTranslations from "@/locales/en.json";
import deTranslations from "@/locales/de.json";

type Translations = typeof nlTranslations;

export const useTranslation = () => {
  const { lang } = useParams<{ lang: string }>();
  const locale: "nl" | "en" | "de" =
    lang === "en" ? "en" : lang === "de" ? "de" : "nl";

  const translations: Translations =
    locale === "en" ? enTranslations : locale === "de" ? deTranslations : nlTranslations;

  return {
    t: translations,
    locale,
    isEnglish: locale === "en",
    isDutch: locale === "nl",
    isGerman: locale === "de",
  };
};
