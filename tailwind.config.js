/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#1F202E',
      },
      boxShadow: {
        glow: `
          0px 1.69px 2.21px 0px #00FFE905,
          0px 4.06px 5.32px 0px #00FFE907,
          0px 7.64px 10.02px 0px #00FFE909,
          0px 13.63px 17.87px 0px #00FFE90B,
          0px 25.48px 33.42px 0px #00FFE90D,
          0px 61px 80px 0px #00FFE912
        `,
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(180deg, #00C7BE 0%, #0097C7 100%)',
      },
    },
  },
  plugins: [],
}
