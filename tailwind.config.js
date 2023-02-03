/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '1.25rem',
					lg: '1.25rem',
					xl: '2rem',
					'2xl': '3rem',
				},
			},
			fontFamily: {
				'sporting-grotesque': ['Sporting-Grotesque', 'san-serif'],
			},
			colors: {
				primary: {
					default: '#264373',
				},
				secondary: {
					default: '#6765F0',
				},
				dark: {
					default: '#262524',
				},
			},
			boxShadow: {
				primary: '0px 20px 80px rgba(51, 78, 123, 0.3)',
				secondary: '0px 4px 14px rgba(0, 0, 0, 0.09)',
				alt: '0px 4px 12px rgba(0, 0, 0, 0.05)',
			},
		},
	},
	plugins: [],
};
