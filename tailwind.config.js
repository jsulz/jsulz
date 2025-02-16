const typography = require('@tailwindcss/typography');

module.exports = {
	content: ['./hugo_stats.json'],
	plugins: [typography],
	// Define the theme here 
	theme: {
		extend: {
			//darkMode: 'class',
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
					'code::before': false,
					'code::after': false,
				a: {
					color: theme('colors.lightLink'),
					textDecoration: 'underline',
					'&:hover': {
					color: theme('colors.lightAccentGreen'), // or a lighter alpha version
					},
				},
				blockquote: {
					borderLeftColor: theme('colors.lightAccentRed'),
					fontStyle: 'italic',
					paddingLeft: '1rem',
				},

				// etc.      
				code: {
					backgroundColor: theme('colors.lightButton') + 'cc',
					padding: '0.125rem 0.25rem',
					borderRadius: '0.25rem',
					'&::before': {
						content: '""',
					},
				},
				'pre code': {
					backgroundColor: 'transparent', // to let <pre> handle BG
				},
				'pre': {
					backgroundColor: theme('colors.lightAccentYellow'), // or a separate color
					padding: '1rem',
					borderRadius: '0.5rem',
				},
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