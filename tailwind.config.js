/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	container: {
  		center: true,
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px'
  	},
  	fontFamily: {
  		primary: 'var(--font-bebas)',
  		secondary: 'var(--font-inter)'
  	},
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: '#6c6c6c',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: '#7edad2',
  				hover: '#79d3cc',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			border: 'hsl(var(--border))',
  		},
  		boxShadow: {
  			custom: '0px 14px 54px rgba(0, 0, 0, 0.1)'
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

