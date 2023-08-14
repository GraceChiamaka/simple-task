const colors = {
	primary: {

	},
	secondary: {
		100: "#FFAb2D",
		200: "#E58A00",
		300: "#957AFF"
	},
	light: {
		100: "#ffffff"
	},
	dark: {
		10: "rgba(0, 21, 46, 0.1)",
		50: "rgba(0, 21, 46, 0.05)",
		100: "#00152E",
		200: "#004025",
		300: "rgba(0, 21, 46, 0.03)",
		400: "rgba(0, 21, 46, 0.40)"
	},
	neutral: {
		300: "#F3F3F3"
	},
	blue: {
		10: "rgba(0, 117, 255, 0.1)",
		100: "#0075FF",
		200: "#005AE1"
	},
	red: {
		100: "#FF5959",
		200: "#E70000"
	},
	green: {
		100: "#1EB76E",
		200: "#078953"
	}

}


const customSpacing = (val) => `${val}rem`;
const customFontSize = (val) => `${val}rem`;
const doubleSpacing = (valX, valY) => `${valX}rem ${valY}rem`;
const customBorder = (pixel, color) => `${pixel} solid ${color}`;
const mediaQuery = (minWidth, maxWidth) => `@media  screen and (min-width: ${minWidth}px) and (max-width: ${maxWidth}px )`;
const extraMediaQuery = (minWidth) => `@media only screen and (min-width: ${minWidth})`;
const customRadius = (val) => `${val}px`;

const fontSize = {
	small: customFontSize(0.75),
	normal: customFontSize(1),
	heading: customFontSize(1.25),
	largeHeading: customFontSize(1.875),
	custom: customFontSize
}

const spacing = {
	xsmall: customSpacing(0.25),
	small: customSpacing(0.5),
	normal: customSpacing(1),
	medium: customSpacing(1.5),
	large: customSpacing(2),
	button: customSpacing(2.5),
	input: customSpacing(2.375),
	smallButton: customSpacing(1.8),
	double: doubleSpacing,
	custom: customSpacing
}

const borders = {
	neutral: "1px solid #F3F3F3",
	custom: customBorder
}

const borderRadius = {
	default: "5px",
	primary: "10px",
	rounded: "100px",
	circle: "100%",
	custom: customRadius
}

const media = {
	mobile: mediaQuery(375, 720),
	tablet: mediaQuery(720, 1280),
	notebook: mediaQuery(1280, 1600),
	extraLg: extraMediaQuery(1600)

}

export { spacing, colors, borders, fontSize, media, borderRadius }