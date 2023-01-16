import styled from 'styled-components';
import baseTheme from '@/theme/theme';

export const AnalyticsSectionWrapper = styled.section`
  color: ${({ theme }) => theme.colors.defaultWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: start;
    margin-left: ${baseTheme.spaces[3]}px;
  }
  @media (max-width: 560px) {
    margin-top: ${baseTheme.spaces[7]}px;
  }
`;

export const AnalyticsWrapper = styled.div`
  width: ${({ theme }) => (theme.sizes.width = 540)}px;
  height: ${({ theme }) => (theme.sizes.height = 120)}px;
  margin-right: ${baseTheme.spaces[5]}px;
  margin-top: ${baseTheme.spaces[17]}px;
  @media (max-width: 1500px) {
    margin-top: ${baseTheme.spaces[2]}px;
  }
  @media (max-width: 1100px) {
    margin-right: ${baseTheme.spaces[2]}px;
  }
  @media (max-width: 560px) {
    width: auto;
    height: auto;
  }
`;

export const AnalyticsContentWrapper = styled.div`
  width: ${({ theme }) => (theme.sizes.width = 540)}px;
  height: ${({ theme }) => (theme.sizes.height = 132)}px;
  margin-top: ${baseTheme.spaces[19]}px;
  @media (max-width: 1500px) {
    margin-top: ${baseTheme.spaces[2]}px;
  }
  @media (max-width: 560px) {
    width: auto;
    height: auto;
  }
`;

export const AnalyticsDescription = styled.p`
  color: ${({ theme }) => theme.colors.defaultBlack};
  font-weight: ${({ theme }) => (theme.sizes.weight = 800)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 57)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 65)}px;
  letter-spacing: 1.5%;
  font-family: Manrope-Regular;
  span {
    color: ${({ theme }) => theme.colors.primaryBlue};
  }
  @media (max-width: 560px) {
    font-size: ${({ theme }) => (theme.sizes.fontSize = 30)}px;
    line-height: ${({ theme }) => (theme.sizes.lineHeight = 40)}px;
  }
`;

export const AnalyticsContent = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 33)}px;
  letter-spacing: -1.5%;
  font-family: Manrope-Regular;
  @media (max-width: 900px) {
    margin-top: ${baseTheme.spaces[4]}px;
  }
  @media (max-width: 560px) {
    font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
    line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  }
`;

export const ButtonWrapper = styled.button`
  margin-top: ${baseTheme.spaces[5]}px;
  width: ${({ theme }) => (theme.sizes.width = 185)}px;
  height: ${({ theme }) => (theme.sizes.height = 50)}px;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  border-radius: 6px;
  border: transparent;
  padding: ${baseTheme.spaces[2]}px ${baseTheme.spaces[7]}px;
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 16)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 700)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  font-family: Manrope-Regular;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoveredButton};
  }
  @media (max-width: 375px) {
    margin-right: ${baseTheme.spaces[3]}px;
    margin-left: ${baseTheme.spaces[3]}px;
    width: ${({ theme }) => (theme.sizes.width = 328)}px;
  }
`;
