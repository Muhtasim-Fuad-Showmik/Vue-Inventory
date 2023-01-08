module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'brandeis-blue': '#006ce9',
				'spiro-disco-ball': '#18b6f6',
				'lavender': '#ac7ff4',
				'plump-purple': '#713fc2',
				'selective-yellow': '#ffb703',
				'caribbean-green': '#02c39a',
			},
			dropShadow: {
				'std': '2px 2px 5px rgba(0, 0, 0, 1)',
			},
			boxShadow: {
				'main': '0px 0px 130px -50px #006ce9',
			}
		
		},
		fontFamily: {
			Jost: ["Jost, sans-serif"],
		},
		screens: {
			sm: "640px",
			md: "768px",
		}
	},
	plugins: [],
}
