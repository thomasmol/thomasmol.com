/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
        DEFAULT: '3rem',
        sm: '3rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '3rem',
      },
      screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				'2xl': "1280px"
		 }
    },
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	]
};
