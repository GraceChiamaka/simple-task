import styled from 'styled-components';

export const Container = styled.div`
  	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.custom(0.875)};
	font-size: 14px;
	height: ${({ theme }) => theme.spacing.input};
	padding: ${({ theme }) => theme.spacing.double(0.5, 0.625)};
	border-radius: ${({ theme }) => theme.borderRadius.default};
	margin-top: ${({ theme }) => theme.spacing.normal};
	flex-wrap: wrap;
	
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