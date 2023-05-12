import { createI18n } from "vue-i18n";

const messages = {
  en: {
    first_name: "Name",
    verify: "Verify"
  },
  svk: {
    first_name: "Meno",
    verify: "Overit"
  }
};

const i18n = createI18n({
  legacy: false,
  locale: "en",
  globalInjection: true,
  messages
});

export default i18n;

// export default {
//   install: (app: { config: { globalProperties: { $t: any } } }) => {
//     app.config.globalProperties.$t = i18n.t.bind(i18n);
//   }
// };
