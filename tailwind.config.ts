import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        tablet: "995px",
      },
      colors: {
        primary: {
          main: "#42E26F",
          10: "#42E26F",
          15: "#3A7326",
          50: "#f0fdf3",
          100: "#dbfde4",
          200: "#b9f9ca",
          300: "#83f2a2",
          400: "#42e26f",
          500: "#1dca4f",
          600: "#12a73d",
          700: "#128333",
          800: "#14672c",
          900: "#125527",
          950: "#042f12",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#f3faf8",
          100: "#d8efe9",
          200: "#b0dfd4",
          300: "#80c8b9",
          400: "#56ab9c",
          500: "#3c9083",
          600: "#2e736a",
          700: "#285d57",
          800: "#244b47",
          900: "#1e3936",
          950: "#0f2423",
        },
        gray: {
          b_g_main: {
            50: "#f5f5f5",
            100: "#efefef",
            200: "#dcdcdc",
            300: "#bdbdbd",
            400: "#989898",
            500: "#7c7c7c",
            600: "#656565",
            700: "#525252",
            800: "#464646",
            900: "#3d3d3d",
            950: "#292929",
          },
          b_g: {
            50: "#f6f7f7",
            60: "#F7FEF8",
            100: "#eef0f0",
            200: "#dadddd",
            300: "#b9c0bf",
            400: "#929e9d",
            500: "#758281",
            600: "#5f6a6a",
            700: "#4d5757",
            800: "#424a4a",
            900: "#3a4040",
            950: "#272a2a",
          },
        },
        dark: {
          50: "#f6f6f9",
          60: "#FAFAFA",
          70: "#E4E4E7",
          100: "#ecebf3",
          200: "#d6d4e3",
          300: "#b0aecb",
          400: "#8582ae",
          500: "#666295",
          600: "#524d7c",
          700: "#454064",
          800: "#3b3755",
          900: "#353248",
          950: "#0e0d13",
        },
        primary_b_g: {
          50: "#e9fffd",
          100: "#c9fffb",
          200: "#99fffa",
          300: "#54fff9",
          400: "#07fcff",
          500: "#00ddef",
          600: "#00b0c9",
          700: "#008ba1",
          800: "#086f82",
          900: "#0c5b6d",
          950: "#001419",
        },
        moody_blue: {
          50: "#eef1ff",
          100: "#e0e5ff",
          200: "#c7cefe",
          300: "#a5aefc",
          400: "#8284f7",
          500: "#736cf1",
          600: "#5c47e4",
          700: "#4f39c9",
          800: "#4031a2",
          900: "#372e81",
          950: "#221b4b",
        },
        purple: {
          100: "#FAF3FA",
          200: "#DBB0DF",
          800: "#46244B",
        },
        black: {
          DEFAULT: "#000000",
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
        red_color: {
          text: "#A23131",
          bg: "#FFEEEE",
          border: "#F78282",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        headerColor: "#CAF6D0",
      },
      backgroundImage: {
        "subtitle-gradient": "linear-gradient(90deg, #3a7326 0%, #42e26f 100%)",
        "title-gradient": "linear-gradient(180deg, #3a7326 0%, #42e26f 100%)",
        "title-gradient-2": "linear-gradient(90deg, #3a7326 0%, #42e26f 100%)",
        "logo-gradient-border":
          "linear-gradient(180deg, rgba(74, 58, 255, 1) 0%, rgba(76, 191, 255, 1) 100%)",
        "button-gradient":
          "linear-gradient(180deg, #3a7326 0%, #3c953d 44.5%, #42e26f 100%)",
        "feature-gradient":
          "linear-gradient(90deg, rgba(58, 115, 38, 0.79) 0%, #42e26f 100%)",
        "preview-gradient":
          "linear-gradient(90deg, #42e26f 0%, #dbfde4 50%, #f0fdf3 100%)",
        "button-gradient-2": "linear-gradient(to right, #42E26F, #247C3D)",
        "hero-gradient":
          "linear-gradient( 180deg, rgba(202, 246, 208, 0.51) 0%, rgba(223, 250, 226, 0.51) 62.5%, rgba(235, 252, 238, 0.51) 78%, #ffffff 100% )",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
