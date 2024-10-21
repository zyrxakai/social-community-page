import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Enable dark mode by adding a class
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          1: '#1C1F2E',
          2: '#161925',
        },
        blue: {
          1: '#0E78F9',
        },
		discord: {
			1: '#7289da'
		},
		slack: {
			1: '#e9a820'
		},
		telegram: {
			1: '#0088cc'
		},
		jsp: {
			1: '#000'
		},
        sky: {
          1: '#C9DDFF',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      backgroundImage: {
        hero: "url('/images/hero-bg.png')", // For hero background image
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
