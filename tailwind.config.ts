import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#faf6f1",
        tan: "#f5ede4",
        "brown-dark": "#3d2b1f",
        "brown-mid": "#5a3a28",
        "brown-text": "#7a6555",
        "brown-muted": "#8a7262",
        "tan-muted": "#c4a882",
        orange: "#c77b3f",
        "orange-light": "#d4956b",
        "cream-light": "#f5ede4",
      },
    },
  },
  plugins: [],
};
export default config;
