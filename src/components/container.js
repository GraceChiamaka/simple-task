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

