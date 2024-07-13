import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        pblack: "#020910",
        poff_black: "#0d1116",
        pblue200: "#caf0f8",
        pblue300: "#1e5c97",
        pnavbar_blue: "#0f2e4b",
        pblue: "#0d2e4d",
        bgBlue: "#071521",
        porange: "#fc7e09",
        ppurple: "#d2a8ff",
        pgreen: "#008a2c",
        pgrey: "#acb1b5",
        pwhite: "#f2f2f3",
        pyellow: "#ffb703",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
