/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '3rem',
      },
      screens: {
				sm: "640px",
				md: "768px",
				lg: "768px",
				xl: "860px",
				'2xl': "860px"
		 }
    },
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	]
};
