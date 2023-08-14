import styled from 'styled-components';

export const StyledTag = styled.div`
	display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.borderRadius.rounded};
    padding: 2px 12px;
	gap: ${({ theme }) => theme.spacing.custom(0.8)};
	font-size: 12px;
	height:32px;
	border: ${({ theme, bgcolor }) => theme.borders.custom('1px', bgcolor)};
	background: #fff;
	color: ${({ theme }) => theme.colors.light[100]};
	z-index: 100;
	position: relative;
	span{
		color: ${({ theme, bgcolor }) => bgcolor === "" ? theme.colors.neutral[300] : bgcolor};
	}
	&::after{
		content: CloseIcon;
		width: 16px;
		height: 16px;

	}
	button{
		width: 18px;
		height:18px;
		background: ${({ theme }) => theme.colors.light[100]};
		border: ${({ theme, bgcolor }) => theme.borders.custom("1px", bgcolor)};
		outline: none;
		display: inline-flex;
		border-radius: ${({ theme }) => theme.borderRadius.circle};
		align-items: center;
		justify-content: center;
		/* background-blend-mode: lighten; */
		svg{
			path{
				fill: ${({ theme, bgcolor }) => bgcolor};
				fill-opacity: 1;
			}
		}
	}
	img{
		width: 16px;
		object-fit: contain;
	}
`;


export const EditBtn = styled.button`
	border: none !important;
	cursor: pointer;
	background: transparent;
	outline: none;
	width: ${({ theme }) => theme.spacing.small};
	height: ${({ theme }) => theme.spacing.small};
`;