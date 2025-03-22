import type {Config} from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        aileron: ["Aileron", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        border: "var(--border)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        input: "var(--input)",
        ring: "var(--ring)",
        sidebar: "var(--sidebar)",
        "sidebar-foreground": "var(--sidebar-foreground)",
        "sidebar-primary": "var(--sidebar-primary)",
        "sidebar-primary-foreground": "var(--sidebar-primary-foreground)",
        "sidebar-accent": "var(--sidebar-accent)",
        "sidebar-accent-foreground": "var(--sidebar-accent-foreground)",
        brand: {
          primary: "#E50914",
          secondary: "#0D0D12",
        },
        grey: {
          "25": "#FCFCFD",
          "50": "#F9FAFB",
          "100": "#F0F3F6",
          "200": "#EAECF0",
          "300": "#D0D5DD",
          "400": "#98A2B3",
          "500": "#6A7181",
          "600": "#4A5564",
          "700": "#3A414E",
          "800": "#252A31",
          "900": "#181B20",
          DEFAULT: "#FFFFFF",
        },
        alert: {
          success: {
            "25": "#CCF7D9",
            "50": "#B2F3C7",
            "100": "#99EFB4",
            "200": "#66E78E",
            "300": "#33DF69",
            "400": "#00C23C",
            DEFAULT: "#E5FBEC",
          },
          warning: {
            "25": "#FFF0CC",
            "50": "#FFE8B2",
            "100": "#FFE199",
            "200": "#FFD266",
            "300": "#FFC333",
            "400": "#FFB400",
            DEFAULT: "#FFF7E5",
          },
          error: {
            "25": "#FFDCDB",
            "50": "#FFCAC9",
            "100": "#FFB8B7",
            "200": "#FF9594",
            "300": "#FF6259",
            "400": "#FF3B30",
            DEFAULT: "#FFEDED",
          },
          info: {
            "25": "#D3ECFF",
            "50": "#BDE2FF",
            "100": "#A7D8FF",
            "200": "#7AC5FF",
            "300": "#4EB1FF",
            "400": "#229EFF",
            DEFAULT: "#E9F5FF",
          },
        },
        "deep-blue": {
          "25": "#EDF4FD",
          "50": "#DFECFC",
          "100": "#D1E3FA",
          "200": "#C8DEF9",
          "400": "#1256A9",
        },
        purple: {
          "25": "#FCFCFD",
          "50": "#E4D7FF",
          "100": "#DBC9FF",
          "200": "#C8AFFF",
          "300": "#B694FF",
          "400": "#A479FF",
          DEFAULT: "#F6F2FF",
        },
      },
      boxShadow: {
        "faq-tablist": "0px 8px 15px 3px #0000000A",
        "faq-card": "0px 10px 15px -3px #00002626",
        "nav-bar": "0px 1px 3px 0px #00000026",
      },
      backgroundImage: {
        "home-hero-mobile":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.9) 55.4%, rgba(255, 255, 255, 0.5) 100%)",
        "home-hero":
          "linear-gradient(270deg, rgba(249, 250, 251, 0) 42.83%, #F9FAFB 84.72%)",
        "custom-g1":
          "linear-gradient(180deg, #FFFFFF 2.68%, rgba(25, 25, 25, 0) 69.57%)",
        "custom-g2":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 37.19%, #000000 100.28%)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": {opacity: "1"},
          "20%,50%": {opacity: "0"},
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [],
} as Config;
