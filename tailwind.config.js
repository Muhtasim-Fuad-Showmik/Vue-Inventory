/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./src/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'brandeis-blue': '#006ce9',
				'spiro-disco-ball': '#18b6f6',
				'lavender': '#ac7ff4',
				'plump-purple': '#713fc2',
				'selective-yellow': '#ffb703',
				'caribbean-green': '#02c39a',
				'lemon-chiffon': '#fbf8cc',
				'lemon-chiffon-txt': '#423d09',
				'winter-wizard': '#8eecf5',
				'winter-wizard-txt': '#053135',
				'magic-mint': '#b9fbc0',
				'magic-mint-txt': '#08360d'
			},
			dropShadow: {
				'std': '2px 2px 5px rgba(0, 0, 0, 1)',
			},
		},
		fontFamily: {
			Jost: ["Jost, sans-serif"],
			Sen: ["Sen, sans-serif"],
		},
		screens: {
			sm: "640px",
			md: "768px",
		}
	},
	plugins: [],
}
