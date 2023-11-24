import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'eerie-black':'#1F1F1F',
        'platinum':'#E3E3E3',
        'dark-grey':'#121212',
        silver:'#A8A8A8'
      }
    },
  },
  plugins: [],
}
export default config
