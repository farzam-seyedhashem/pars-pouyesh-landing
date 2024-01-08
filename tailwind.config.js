/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const fontvs = require('./font-vs')
const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist:[
    ...fontvs,
  ],
  theme: {
    fontSize: {
      'body-small': ['12px', {
        lineHeight: '16px',
        letterSpacing: '0.4',
      }],
      'body-medium': ['14px', {
        lineHeight: '20px',
        letterSpacing: '0.25',
      }],
      'body-large': ['16px', {
        lineHeight: '24px',
        letterSpacing: '0.5',
      }],
      'label-small': ['11px', {
        lineHeight: '16px',
        letterSpacing: '0.5',
      }],
      'label-medium': ['12px', {
        lineHeight: '16px',
        letterSpacing: '0.5',
      }],
      'label-large': ['14px', {
        lineHeight: '20px',
        letterSpacing: '0.1',
      }],
      'title-small': ['14px', {
        lineHeight: '20px',
        letterSpacing: '0.1',
      }],
      'title-medium': ['16px', {
        lineHeight: '24px',
        letterSpacing: '0.15',
      }],
      'title-large': ['22px', {
        lineHeight: '28px',
        letterSpacing: '0',
      }],
      'headline-small': ['24px', {
        lineHeight: '32px',
        letterSpacing: '0',
      }],
      'headline-medium': ['28px', {
        lineHeight: '36px',
        letterSpacing: '0',
      }],
      'headline-large': ['32px', {
        lineHeight: '40px',
        letterSpacing: '0',
      }],
      'display-small': ['36px', {
        lineHeight: '44px',
        letterSpacing: '0',
      }],
      'display-medium': ['45px', {
        lineHeight: '52px',
        letterSpacing: '0',
      }],
      'display-large': ['57px', {
        lineHeight: '64px',
        letterSpacing: '0',
      }],
      'page-title': ['72px', {
        lineHeight: '80px',
        letterSpacing: '0',
      }],
    },
    screens: {
      'sm': '600px',
      'md': '840px',
      'lg': '1240px',
      'xl': '1440px',
      '2xl': '1440px',
    },
    fontFamily: {
      primary: ['IRANYekan', ...fontFamily.sans],
      serif: ['IRANYekan', ...fontFamily.serif],
    },
    extend: {
      colors: {
        'primary-brand':"#C3242B",
        'primary-app':"#880000",
        "secondary-brand":"#EDC8CB",

        "background":"#EEF1F3",
        'surface':"#D0D7DC",
        "label":"#4E4E50"


      },
      container: {
        padding: {
          DEFAULT: '16px',
          sm: '24px',
          md: '24px',
          lg: '24px',
        }
      },
      boxShadow: {
        'slider': '0 10px 40px 0 rgba(0, 0, 0, 0.1)',
        'elevated-one-light':"0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
        'elevated-two-light':"0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);",
        'elevated-three-light':"0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15);",
        'elevated-four-light':"0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15);",
        'elevated-five-light':"",
        'elevated-one-dark':"0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);",
        'elevated-two-dark':"0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);",
        'elevated-three-dark':"0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15);",
        'elevated-four-dark':"0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15);",
        'elevated-five-dark':"",
      },
      opacity: {
        '4': '0.04',
      },
      width: {
        495: '495px'
      },
      height: {
        380: '380px',
        351: "351px",
        158: "158px",
        495: '495px',
        600: '600px',
        'inventory-img': 'calc(100vh - 8rem - 104px)',
      },
      zIndex: {
        '999': 999,
        '1001': 1001,
        '1009': 1009
      },
    },
  },
  plugins: [
    plugin(function ({matchUtilities,addUtilities, theme}) {
      // const fillV=[0,1]
      // const wghtV=[100,200,300,400,500,600,700]
      // const gradeV=[-25,0,200]
      // const opsV=[20,24,40,48]
      // const res = {}
      // wghtV.map((w,indexw)=>
      //     opsV.map((o,indexO)=>
      //         gradeV.map((g,indexG)=>
      //             fillV.map((f,indexF)=> {
      //                 res[`font-vs-${f}-${w}-${g}-${o}`] = {fontVariationSettings: `'FILL' ${f}, 'wght' ${w}, 'GRAD' ${g}, 'opsz' ${o}`}
      //                 // res.push(`font-vs-[${f}-${w}-${g}-${o}]`)
      //             })
      //         )
      //     )
      // )
      // console.log(res)
      // addUtilities(res)
      matchUtilities(
          {
            'font-vs': (value) => {
              const arr = value.split(" ")
              return {
                fontVariationSettings: "'FILL'" + arr[0] + ",'wght'" + arr[1] + ",'GRAD'" + arr[2] + ",'opsz'" + arr[3],
              }

            },
          },
          // Default values.
          // `flattenColorPalette` required to support native Tailwind color classes like `red-500`, `amber-300`, etc.
          // In most cases you may just pass `theme('config-key')`, where `config-key` could be any (`spacing`, `fontFamily`, `foo`, `bar`)
          // { values: flattenColorPalette(theme('colors')) }

      )
    }),

  ],
}
