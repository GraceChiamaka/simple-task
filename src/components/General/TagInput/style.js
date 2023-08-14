import styled from 'styled-components';

export const Container = styled.div`
  	display: flex;
	align-items: center;
	gap: 5px;
	font-size: 14px;
	height: ${({ theme }) => theme.spacing.input};
	padding: ${({ theme }) => theme.spacing.double(0.5, 0.625)};
	border-radius: ${({ theme }) => theme.borderRadius.default};
	margin-top: ${({ theme }) => theme.spacing.normal};

	flex-wrap: wrap;
	/* border: 1px solid #cecece; */
	${({ theme }) => theme.media.tablet}{
		height: auto;
		padding: 10px 16px;
		min-height: 44px;
	};
	${({ theme }) => theme.media.mobile}{
		height: auto;
		padding: 10px 16px;
		min-height: 44px;
	};
`;

export const StyledTagInput = styled.input`
	font-size: ${({ theme }) => theme.fontSize.small};
	color: ${({ theme }) => theme.colors.dark[100]};
	padding: ${({ theme }) => theme.spacing.custom(0.625)};
	border: ${({ theme }) => theme.borders.custom("1px", theme.colors.dark[10])};
	height: ${({ theme }) => theme.spacing.input};
	border-radius: ${({ theme }) => theme.borderRadius.default};
	font-weight: 400;
	outline: none;
	width: 100%;
`;

export const ErrorText = styled.span`
  	color: ${({ theme }) => theme.colors.red[200]};
	font-size: ${({ theme }) => theme.fontSize.small};
	font-weight: 700;
`;

export const ColorSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: ${({ theme }) => theme.spacing.double(1, 0)};
`;

export const ColorSelect = styled.span`
	/* position: relative; */
	width: ${({ theme }) => theme.spacing.large};
	height: ${({ theme }) => theme.spacing.large};
	border-radius: ${({ theme }) => theme.borderRadius.circle};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	&::after{
		content:"";
		width: ${({ theme }) => theme.spacing.medium};
		height: ${({ theme }) => theme.spacing.medium};
		border-radius: ${({ theme }) => theme.borderRadius.circle};
		background: ${({ bgColor }) => bgColor};
	}
	cursor: pointer;
	border:${({ theme, bgColor, active }) => active ? theme.borders.custom("2px", bgColor) : "none"};
`