import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ponokai: {
          dark2: "#181926",
          dark1: "#1e2030",
          background: "#232634",
          text: "#f2f2f3",
          red: "#ff8c9a",
          orange: "#f3bb9a",
          yellow: "#f8e7b0",
          green: "#b4e49a",
          blue: "#98d4e7",
          purple: "#bdb2ff",
          dimmed1: "#bac2de",
          dimmed2: "#7f849c",
          dimmed3: "#6c7086",
          dimmed4: "#585b70",
          dimmed5: "#45475a",

          diagnostics: {
            errorForeground: "#d45757",
            errorBackground: "#2b1a1a",
            errorBorder: "#a03c3c",
            debugForeground: "#b18ce6",
            debugBackground: "#2a1a38",
            debugBorder: "#8053b3",
            infoForeground: "#43b5e6",
            infoBackground: "#1c2d39",
            infoBorder: "#357a96",
            okForeground: "#7cc06c",
            okBackground: "#1b2d1f",
            okBorder: "#5b8c4a",
            traceForeground: "#9cdbff",
            traceBackground: "#1a2a38",
            traceBorder: "#6eaac7",
            warningForeground: "#e5bf3d",
            warningBackground: "#3e2f1e",
            warningBorder: "#b58d2a",
          },

          git: {
            line_added: "#8ce68c",
            line_changed: "#72c4ed",
            line_deleted: "#f96868",
            modified: "#89cefc",
            text_added: "#7cc06c",
            text_changed: "#43b5e6",
            text_deleted: "#d46666",
            addedResourceForeground: "#4caf50",
            conflictingResourceForeground: "#e5bf3d",
            deletedResourceForeground: "#d45757",
            ignoredResourceForeground: "#9e9e9e",
            modifiedResourceForeground: "#89cefc",
            stageDeletedResourceForeground: "#d45757",
            stageModifiedResourceForeground: "#03a9f4",
            untrackedResourceForeground: "#8bc34a",
          },
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
