import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
        sm: '0px', // = ou + à 300px
        md: '640px',
        lg: '768px',
        xl: '1024px',
    },
    extend: {
      fontFamily: {
        "sacramento": "var(--font--sacramento)",
        "inter": "var(--font--inter)",
      },
      colors: {
        grey: '#1F2028',
        transparent: 'transparent',
        jade1: '#0d1512',
        jade2: '#121c18',
        jade3: '#0f2e22',
        jade4: '#0b3b2c',
        jade5: '#114837',
        jade6: '#1b5745',
        jade7: '#246854',
        jade8: '#2a7e68',
        jade9: '#29a383',
        jade10: '#27b08b',
        jade11: '#1fd8a4',
        jade12: '#adf0d4',
      },
      flexGrow: {
        0.5: '0.5',
        1.5: '1.5',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6'
      },
      flex: {
        '0.5': '0.5 0.5 0%',
        '1.5': '1.5 1.5 0%',
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
