import styled from 'styled-components';

const BS_VALUE = '0px 4px 24px 0px';

const applyBackground = (variant, color) => {
	switch (variant) {
		case "primary":
			return color.neutral[300];
		case "success":
			return color.green[100];
		case "white":
			return color.light[100];
		default:
			return "transparent";
	}
};

const applyColor = (variant, color) => {
	switch (variant) {
		case "primary":
			return color.dark[100];
		case "success":
			return color.light[100];
		case "white":
			return color.dark[100];
		default:
			return color.dark[100];
	}
}

const applyBoxShadow = (variant) => {
	switch (variant) {
		case "success":
			return ` ${BS_VALUE} rgba(30, 183, 110, 0.2)`;
		case "white":
			return ` ${BS_VALUE} rgba(0, 21, 46, 0.04)`;
		default:
			break;
	}
}
const applyBorders = (variant, theme) => {
	switch (variant) {
		case "primary":
			return theme.borders.custom("1px", theme.colors.dark[50]);
		case "white":
			return theme.borders.neutral;
		default:
			return "none";
	}
}

export const StyledButton = styled.button`
	border: ${({ theme, variant }) => applyBorders(variant, theme)};;
	align-items: center;
	display: flex;
	justify-content: center;
	cursor: pointer;
	height: ${({ theme }) => theme.spacing.button};
	padding: ${({ theme }) => theme.spacing.double(0.625, 0.825)};
	border-radius: ${({ theme }) => theme.borderRadius.rounded};
	color: ${({ theme, variant }) => applyColor(variant, theme.colors)};
	font-weight: 700;
	font-size: ${({ theme }) => theme.fontSize.custom(0.875)};
	background: ${({ theme, variant }) => applyBackground(variant, theme.colors)};
	box-shadow: ${({ variant }) => applyBoxShadow(variant)};
	gap: ${({ theme }) => theme.spacing.custom(0.25)};
	${({ theme }) => theme.media.mobile}{
		width: 100%;
	}
`;