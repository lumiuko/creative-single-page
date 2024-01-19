/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        red: '#F94F4F',
        dark: '#191921',
        'red-hover': '#FF9393',
        'dark-hover': '#434356'
      }
    },
    fontSize: {
      h1: '5rem', // 80px
      h2: '3.5rem', // 56px
      h3: '2.5rem', // 40px
      h4: '2rem', // 32px
      h5: '1.25rem', // 20px
      lg: '1.125rem', // 18px
      md: '1rem', // 16px
      sm: '0.9375rem' // 15px
    },
    lineHeight: {
      h1: '5.5rem', // 88px
      h2: '4rem', // 64px
      h3: '2.5rem', // 40px
      h4: '2.5rem', // 40px
      h5: '2rem', // 32px
      lg: '2rem', // 32px
      md: '1.25rem', // 20px
      sm: '1.5rem' // 24px
    },
    fontFamily: {
      sans: ['Commissioner', 'sans-serif']
    },
    backgroundImage: {
      'pattern-wave-red': 'url("/desktop/bg-pattern-wave-red.svg")',
      'slides-gradient': 'linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 75%) 100%)',
      'navbar-gradient-md': 'linear-gradient(90deg, #fff 0%, #fff 43%, #F94F4F 43%, #F94F4F 100%)',
      'navbar-gradient-xl': 'linear-gradient(90deg, #fff 0%, #fff 51%, #F94F4F 51%, #F94F4F 100%)',
      'hero-md': 'url("/tablet/image-hero.jpg")',
      'hero-xl': 'url("/desktop/image-hero.jpg")'
    },
    screens: {
      md: '768px',
      xl: '1110px'
    }
  },
  plugins: []
}
