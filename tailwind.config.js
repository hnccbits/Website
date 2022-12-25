module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary :{
        DEFAULT: "#000",
        light: "#ffffff",
      },
      blue: {
        DEFAULT: "#24ACFF",
        light: "#98e8fc",
      },
      golden: {
        DEFAULT: "#FFED79",
        light: "#FFA776",
      },
    },
		screens: {
      'm2xl': { min: '1500px' },

			'2xl': { max: '1500px' },
			// => @media (max-width: 1535px) { ... }

			xl: { max: '1200px' },
			// => @media (max-width: 1200px) { ... }

      '2lg': { max: '1024px' },
      // => @media (max-width: 1024px) { ... }

      'm2lg': { min: '1024px' },

			lg: { max: '900px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '768px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '600px' },
			// => @media (max-width: 639px) { ... }

			xs: { max: '450px' },
			// => @media (max-width: 450px) { ... }
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
