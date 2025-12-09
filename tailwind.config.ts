import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                neon: {
                    DEFAULT: "var(--neon-primary)",
                    primary: "var(--neon-primary)",
                    purple: "var(--neon-purple)",
                    blue: "var(--neon-blue)",
                }
            },
            fontFamily: {
                mono: ["var(--font-geist-mono)"],
                sans: ["var(--font-geist-sans)"],
            }
        },
    },
    plugins: [],
};
export default config;
