export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxtjs/i18n", "@nuxt/content"],

  content: { documentDriven: true },

  i18n: {
    locales: [
      { code: "en", localCode: "EN", file: "en.json", name: "English", default: true },
      { code: "bg", localCode: "БГ", file: "bg.json", name: "Български", default: false },
      { code: "it", localCode: "IT", file: "it.json", name: "Italiano", default: false },
    ],

    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: true,
      alwaysRedirect: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },

    lazy: true,
    langDir: "i18n",
    defaultLocale: "en",
    strategy: "prefix_and_default",
  },

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    viewer: false,
  },

  colorMode: { classSuffix: "" },

  devtools: { enabled: false },
});
