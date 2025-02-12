const typography = require('@tailwindcss/typography');

module.exports = {
	darkMode: 'class',
	content: ['./hugo_stats.json'],
	plugins: [typography],
	// Define the theme here 
	theme: {
		extend: {
			colors: {
			// Light mode palette
			lightBg: '#FAE8C3',        
			lightLink: '#2CAD6A',       
			lightButton: '#E05A36',     
			lightText: '#0D1217',       
			// additional accents for light mode
			lightAccentRed: '#BD262E',       
			lightAccentYellow: '#FBDC50',    
			lightAccentGreen: '#82AD4E',     

			// Dark mode palette
			darkBg: '#0D1217',          
			darkLink: '#89EDAB',        
			darkButton: '#F62459',      
			darkText: '#FAE8C3',        
			// Additional accents for dark mode:
			darkAccentGreen: '#328881',
			darkAccentYellow: '#DEB960',
			darkAccentOrange: '#D6725C',
			},
			fontFamily: {
				heading: ['Rokkitt', 'sans-serif'],
				body: ['Raleway', 'serif'],
			  },
			typography: (theme) => ({
			DEFAULT: {
				css: {
				a: {
					color: theme('colors.lightLink'),
					textDecoration: 'underline',
					'&:hover': {
					color: theme('colors.lightAccentGreen'), // or a lighter alpha version
					},
				},
				blockquote: {
					borderLeftColor: theme('colors.calvinRed'),
					fontStyle: 'italic',
					paddingLeft: '1rem',
				},
				// etc.
				},
			},
			dark: {
				css: {
				  a: {
					color: theme('colors.darkLink'),
					textDecoration: 'none',
				  },
				  blockquote: {
					borderLeftColor: theme('colors.darkAccent1'),
				  },
				  // etc.
				},
			},
			}),
		},
	}
};