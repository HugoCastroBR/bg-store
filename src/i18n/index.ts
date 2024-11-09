import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enUS from "./locales/en-us.json";
import ptBR from "./locales/pt-br.json";

export const resources = {
  "en-US": {
    translation: enUS,
  },
  "pt-BR": {
    translation: ptBR,
  },
};

 

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt-BR",
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;