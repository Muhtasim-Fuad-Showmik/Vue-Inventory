/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./src/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'ao': '#008000',
				'brandeis-blue': '#006ce9',
				'bright-maroon': '#c9184a',
				'caribbean-green': '#02c39a',
				'lavender': '#ac7ff4',
				'lemon-chiffon': '#fbf8cc',
				'lemon-chiffon-txt': '#423d09',
				'magic-mint': '#b9fbc0',
				'magic-mint-txt': '#08360d',
				'pistachio': '#9ef01a',
				'plump-purple': '#713fc2',
				'selective-yellow': '#ffb703',
				'spiro-disco-ball': '#18b6f6',
				'venetian-red': '#ffccd5',
				'winter-wizard': '#8eecf5',
				'winter-wizard-txt': '#053135',
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
