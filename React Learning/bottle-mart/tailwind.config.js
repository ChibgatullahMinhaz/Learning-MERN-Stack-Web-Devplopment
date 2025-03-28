/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths based on your project structure
];
export const theme = {
    extend: {},
};
// eslint-disable-next-line no-undef
export const plugins = [require("daisyui")];