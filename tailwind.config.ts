import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: "var(--pink)",
        purple: "var(--purple)",
        grey:"var(--grey)",
      textGrey:"var(--textGrey)",
     blue:"var(--blue)",
    textPurple: "var(--textPurple)",
   lightblue: '#F1F8FC',
   lightpink: '#FEF1F4',
  homegrey:'#535353',
  homeblack: '#333333',      },
    },
  },
  plugins: [
    require('daisyui'),

  ],
};
export default config;
