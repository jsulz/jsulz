const typography = require('@tailwindcss/typography');

module.exports = {
  darkMode: 'media', 
  content: ['./hugo_stats.json'],
  plugins: [typography],
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
			maxWidth: '75ch',
			'--tw-prose-bullets': theme('colors.lightText'),
            color: theme('colors.lightText'),
            h1: { color: theme('colors.lightText') },
            h2: { color: theme('colors.lightText') },
            h3: { color: theme('colors.lightText') },
            p: { color: theme('colors.lightText') },
            'code::before': false,
            'code::after': false,
            article: {
              color: theme('colors.lightText'),
            },
            a: {
              color: theme('colors.lightLink'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.lightAccentGreen'),
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.lightAccentRed'),
              fontStyle: 'italic',
              paddingLeft: '1rem',
            },
            code: {
              backgroundColor: 'rgba(224, 90, 54, .3)',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.25rem',
			  whiteSpace: 'pre-wrap',
			  wordBreak: 'break-all',
              '&::before': {
                content: '""',
              },
            },
            'pre code': {
              backgroundColor: 'transparent',
            },
            'pre': {
              padding: '1rem',
              borderRadius: '0.5rem',
            },
			'figcaption p': {
				marginTop: '0.5rem',
				marginBottom: '0.5rem',
				textAlign: 'center',
			},
            table: {
				width: '100%',
				marginTop: '1rem',
				marginBottom: '1rem',
				borderCollapse: 'collapse',
				fontSize: '0.9rem',
			  },
			  thead: {
				borderBottomWidth: '2px',
				borderColor: theme('colors.lightAccentRed'),
				backgroundColor: theme('colors.lightBg'),
			  },
			  'tbody tr': {
				borderBottomWidth: '1px',
				borderColor: theme('colors.lightAccentYellow'),
			  },
			  'th, td': {
				padding: '0.5rem 1rem',
			  },
			  'tbody tr:hover': {
				backgroundColor: theme('colors.lightAccentGreen') + '33', 
			  },
          },
        },
        dark: {
          css: {
			'--tw-shadow-color': 'red',
            color: theme('colors.darkText'),
            h1: { color: theme('colors.darkText') },
            h2: { color: theme('colors.darkText') },
            h3: { color: theme('colors.darkText') },
            p: { color: theme('colors.darkText') },
            a: {
              color: theme('colors.darkLink'),
              textDecoration: 'underline',
			  '&:hover': {
				color: theme('colors.darkAccentGreen'),
			  },
            },
            blockquote: {
              borderLeftColor: theme('colors.darkAccentOrange'),
            },
            thead: {
				borderColor: theme('colors.darkAccentOrange'),
				backgroundColor: theme('colors.darkBg'),
			  },
			  'tbody tr': {
				borderColor: theme('colors.darkAccentYellow'),
			  },
			  'tbody tr:hover': {
				backgroundColor: theme('colors.darkAccentGreen') + '33',
			  },
          },
        },
      }),
    },
  },
};
