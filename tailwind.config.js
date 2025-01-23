module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {},
		container: {
			center: true,
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		}
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('flowbite/plugin'),
	],
};
