/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-blue-gradient': 'radial-gradient(circle at center, #020617 0%, #1e40af 100%)'
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        ".h1": {
          "@apply uppercase font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl  tracking-wide":
            {},
        },
        ".h2": {
          "@apply font-semibold text-2xl md:text-3xl lg:text-4xl":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".p": {
          "@apply text-slate-300":{},
        },
        ".p-sm": {
          "@apply text-sm text-slate-300":{},
        },
        ".p-xs": {
          "@apply text-xs text-slate-600 font-semibold":{},
        },
        '.text-slogan': {
          '@apply text-lime-300 uppercase font-semibold text-sm  tracking-wider': {},
        },
        '.flex-center':{
          '@apply flex items-center justify-center': {}
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}