import styled from 'styled-components';
import { InlineFlexContainer } from '../../container';


export const StyledAvatar = styled(InlineFlexContainer)`
	width: ${({ theme }) => theme.spacing.button};
	height: ${({ theme }) => theme.spacing.button};
	background: ${({ theme }) => theme.colors.blue[10]};
	color: ${({ theme }) => theme.colors.blue[100]};
	font-size: ${({ theme }) => theme.fontSize.small};
	font-weight: 700;
	line-height: ${({ theme }) => theme.spacing.custom(1.4)};
	border-radius: ${({ theme }) => theme.borderRadius.primary};
	margin-right: ${({ theme }) => theme.spacing.xsmall};
	text-align: center;
`;