/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts, css}'],
	theme: {
		colors: {
			'white-smoke': '#F4F4F0',
			accent: '#FF90E8',
			white: '#FFF',
			black: '#000'
		},
		extend: {
			fontFamily: {
				mabry: ['Mabry', 'sans-serif']
			}
		}
	},
	plugins: []
};
