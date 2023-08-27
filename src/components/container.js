import styled from 'styled-components';

export const BigHeading = styled.h1`
  font-weight: 900;
  font-size: ${({ theme }) => theme.fontSize.largeHeading};
  color: ${({ theme }) => theme.colors.dark[100]};
  line-height: ${({ theme }) => theme.spacing.custom(2.5)};
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InlineFlexContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const PageContainer = styled.div`
  max-width: 700px;
	margin: 0 auto;
	padding: 0 10px;
  ${({ theme }) => theme.media.mobile}{
    padding: 0 24px;
  };
`;
export const FormLabel = styled.p`
  color:${({ theme }) => theme.colors.dark[400]};
  font-size: ${({ theme }) => theme.fontSize.small};

`;


export const ColorSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: ${({ theme }) => theme.spacing.double(1, 0)};
`;

export const ColorSelect = styled.span`
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
		background: ${({ bgcolor }) => bgcolor};
	}
	cursor: pointer;
	border:${({ theme, bgcolor, active }) => active ? theme.borders.custom("2px", bgcolor) : "none"};
`;