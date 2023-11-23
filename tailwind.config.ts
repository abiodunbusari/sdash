import type { Config } from 'tailwindcss'

const config: Config = {
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
        'dark-grey':'#121212'
      }
    },
  },
  plugins: [],
}
export default config
