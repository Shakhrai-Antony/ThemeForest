import styled from 'styled-components';
import baseTheme from '@/theme/theme';
import solutions_section from '@/assets/images/solutions_section.png';
import solutions_section_mini from '@/assets/images/solutions_section_mini.png';
import { ButtonWrapper } from '@/pages/home/sections/analyticsSection/styles';

export const SolutionsSectionWrapper = styled.section`
  margin-top: ${baseTheme.spaces[17]}px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.solutionBackground};
  @media (max-width: 1000px) {
    flex-direction: column;
    div:first-child {
      order: 2;
    }
  }
  @media (max-width: 560px) {
    margin-top: ${baseTheme.spaces[11]}px;
  }
`;

export const SolutionBanner = styled.div`
  display: flex;
  background-image: url(${solutions_section});
  width: ${({ theme }) => (theme.sizes.width = 900)}px;
  height: ${({ theme }) => (theme.sizes.height = 740)}px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 540px) {
    background-image: url(${solutions_section_mini});
    width: 100%;
    height: 180px;
  } ;
`;

export const SolutionDescription = styled.div`
  margin-left: ${baseTheme.spaces[8]}px;
  @media (max-width: 540px) {
    margin-right: ${baseTheme.spaces[3]}px;
    margin-left: ${baseTheme.spaces[3]}px;
  } ;
`;

export const SolutionTitle = styled.h2`
  margin-top: ${baseTheme.spaces[31]}px;
  color: ${({ theme }) => theme.colors.defaultBlack};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 38)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 56)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 800)}px;
  font-family: Manrope-Regular;
  @media (max-width: 1000px) {
    margin-top: ${baseTheme.spaces[7]}px;
  }
  @media (max-width: 650px) {
    font-size: ${({ theme }) => (theme.sizes.fontSize = 30)}px;
    line-height: ${({ theme }) => (theme.sizes.lineHeight = 40)}px;
    margin-bottom: ${baseTheme.spaces[4]}px;
  }
`;

export const SolutionParagraph = styled.p`
  margin-top: ${baseTheme.spaces[5]}px;
  width: ${({ theme }) => (theme.sizes.width = 540)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 30)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)}px;
  font-family: Manrope-Regular;
  color: ${({ theme }) => theme.colors.darkGrey};

  @media (max-width: 540px) {
    display: none;
  } ;
`;

export const SolutionButton = styled(ButtonWrapper)`
  padding: ${baseTheme.spaces[2]}px ${baseTheme.spaces[8]}px;
  @media (max-width: 540px) {
    display: none;
  }
`;

export const SolutionParagraphMobile = styled.p`
  display: none;
  margin-top: ${baseTheme.spaces[5]}px;
  width: auto;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 30)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)}px;
  font-family: Manrope-Regular;
  color: ${({ theme }) => theme.colors.darkGrey};

  @media (max-width: 540px) {
    display: block;
    margin-right: ${baseTheme.spaces[3]}px;
    margin-left: ${baseTheme.spaces[3]}px;
  } ;
`;

export const SolutionButtonMobile = styled(ButtonWrapper)`
  display: none;
  padding: ${baseTheme.spaces[2]}px ${baseTheme.spaces[8]}px;
  margin-right: ${baseTheme.spaces[3]}px;
  margin-left: ${baseTheme.spaces[3]}px;
  @media (max-width: 540px) {
    display: block;
    width: ${({ theme }) => (theme.sizes.width = 328)}px;
  }
`;
