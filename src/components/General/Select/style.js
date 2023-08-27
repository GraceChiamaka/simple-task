import styled from 'styled-components';

export const StyledSelect = styled.select`
  	font-size: 14px;
	padding: ${({ theme }) => theme.spacing.custom(0.625)};
	border: ${({ theme }) => theme.borders.custom("1px", theme.colors.dark[10])};
	outline: none;
	height: ${({ theme }) => theme.spacing.input};
	font-weight: 400;
	width: 100%;
	border-radius: 5px;
	cursor: pointer;
	&::placeholder{
		color: ${({ theme }) => theme.colors.dark[100]};
	}
`;
