import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        smokey: "#F7F7F7",
        sblack: "#000000",
        swhite: "#FFFFFF",
        sgrey: "#676767",
        dgrey: "#505050",
        lightgrey: "#F5F5F5",
        darkwhite: "#FAFAFA",
        redsimilar: "#DB4444",
        biscuit: "#FBEBB5",
        simsmokey: "#FAF4F4",
        greysame: "#9F9F9F",
        biscuitsame: "#FFF9E5",
        blue: "#816DFA",
        brown: "#CDBA7B",


      },
    },
  },
  plugins: [],
};
export default config;
