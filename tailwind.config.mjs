/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { nextui } = require("@nextui-org/react");

export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	fontFamily: {
		sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
	},
	theme: {
		extend: {
			fontFamily: {
				display: ["Sligoil\\ Micro", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				richgreen: {
					50: "#edf0eb",
					100: "#dae1d7",
					200: "#b5c2af",
					300: "#90a488",
					400: "#6b8560",
					500: "#466738",
					600: "#38522d",
					700: "#2a3e22",
					800: "#1c2916",
					900: "#0e150b",
				},
				richblue: {
					50: "#f1f4f2",
					100: "#e3e8e6",
					200: "#c7d1cc",
					300: "#abbbb3",
					400: "#8fa499",
					500: "#738d80",
					600: "#5c7166",
					700: "#45554d",
					800: "#2e3833",
					900: "#171c1a",
				},
				richred: {
					50: "#f8edea",
					100: "#f1dcd4",
					200: "#e3b8aa",
					300: "#d6957f",
					400: "#c87155",
					500: "#ba4e2a",
					600: "#953e22",
					700: "#702f19",
					800: "#4a1f11",
					900: "#251008",
				},
				richyellow: {
					50: "#fefbf0",
					100: "#fef6e1",
					200: "#fcedc2",
					300: "#fbe4a4",
					400: "#f9db85",
					500: "#f8d267",
					600: "#c6a852",
					700: "#957e3e",
					800: "#635429",
					900: "#322a15",
				},
			},
		},
	},
	plugins: [nextui()],
};
