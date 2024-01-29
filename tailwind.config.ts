import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  content: ["./components/**/*.{vue,ts}", "./content/**/*.{vue,ts,md}", "./layouts/**/*.vue", "./pages/**/*.vue", "./app.vue"],
};
