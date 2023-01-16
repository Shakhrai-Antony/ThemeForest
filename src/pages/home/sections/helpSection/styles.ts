import styled from 'styled-components';
import baseTheme from '@/theme/theme';
import { ButtonWrapper } from '@/pages/home/sections/analyticsSection/styles';

export const HelpSectionWrapper = styled.section`
  margin-top: ${baseTheme.spaces[17]}px;
  min-height: 430px;
  background-color: ${({ theme }) => theme.colors.solutionBackground};
  display: flex;
  justify-content: center;
`;

export const HelpWrapper = styled.div`
  margin-top: ${baseTheme.spaces[13]}px;
  width: ${({ theme }) => (theme.sizes.width = 540)}px;
  height: 56px;
  text-align: center;
  @media (max-width: 550px) {
    width: auto;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.defaultBlack};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 38)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 56)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 800)};
  font-family: Manrope-Regular;
`;

export const Paragraph = styled.p`
  margin-top: ${baseTheme.spaces[5]}px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 16)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 28)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)};
  font-family: Manrope-Regular;
`;

export const ContactButton = styled(ButtonWrapper)`
  width: ${({ theme }) => (theme.sizes.width = 190)}px;
`;
