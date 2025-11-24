// tailwind.config.cjs or tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    "hidden",
    "bg-[var(--highlight)]",
    "text-white",
  ],
};