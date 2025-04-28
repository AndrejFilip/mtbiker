import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { messages } from "./messages";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      messages: messages, // the "messages" namespace
    },
  },
  lng: "en",
  fallbackLng: "en",
  defaultNS: "messages", // <<< this line is important
  ns: ["messages"], // <<< you can also define all namespaces here (optional)
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
