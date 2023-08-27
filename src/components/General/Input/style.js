import styled from 'styled-components';

export const StyledInput = styled.input`
  	font-size: ${({ theme }) => theme.fontSize.small};
	color: ${({ theme }) => theme.colors.dark[100]};
	padding: ${({ theme }) => theme.spacing.custom(0.625)};
	border: ${({ theme }) => theme.borders.custom("1px", theme.colors.dark[10])};
	height: ${({ theme }) => theme.spacing.input};
	border-radius: ${({ theme }) => theme.borderRadius.default};
	font-weight: 400;
	outline: none;
	width: 100%;
	cursor: pointer;
	&::placeholder{
		color: ${({ theme }) => theme.colors.dark[100]};
	}
`;

export const StyledCheckbox = styled.input`
	width: ${({ theme }) => theme.spacing.custom(1.5)};
	height: ${({ theme }) => theme.spacing.custom(1.5)};
	border: ${({ theme }) => theme.borders.custom("1px", theme.colors.dark[10])};
	background: ${({ theme }) => theme.colors.light[100]};
	border-radius: ${({ theme }) => theme.borderRadius.default};
	cursor: pointer;
	&:checked{
		background:${({ theme }) => theme.colors.blue[100]}; 
	}

`