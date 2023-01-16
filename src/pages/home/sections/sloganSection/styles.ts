import styled from 'styled-components';

import baseTheme from '@/theme/theme';

export const SloganSection = styled.section`
  color: ${({ theme }) => theme.colors.defaultWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${baseTheme.spaces[9]}px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: start;
    margin-left: ${baseTheme.spaces[3]}px;
  }
  @media (max-width: 560px) {
    margin-top: ${baseTheme.spaces[7]}px;
  }
`;

export const SloganWrapper = styled.div`
  width: ${({ theme }) => (theme.sizes.width = 540)}px;
  height: ${({ theme }) => (theme.sizes.height = 120)}px;
  margin-right: ${baseTheme.spaces[32]}px;
  @media (max-width: 1100px) {
    margin-right: ${baseTheme.spaces[2]}px;
  }
  @media (max-width: 560px) {
    width: auto;
    height: auto;
  }
`;

export const SloganContentWrapper = styled.div`
  width: ${({ theme }) => (theme.sizes.width = 350)}px;
  height: ${({ theme }) => (theme.sizes.height = 112)}px;
  @media (max-width: 560px) {
    width: auto;
    height: auto;
  }
`;

export const SloganDescription = styled.p`
  color: ${({ theme }) => theme.colors.defaultBlack};
  font-weight: ${({ theme }) => (theme.sizes.weight = 800)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 46)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 60)}px;
  letter-spacing: -1.5%;
  font-family: Manrope-Regular;
  span {
    color: ${({ theme }) => theme.colors.primaryBlue};
  }
  @media (max-width: 560px) {
    font-size: ${({ theme }) => (theme.sizes.fontSize = 30)}px;
    line-height: ${({ theme }) => (theme.sizes.lineHeight = 40)}px;
  }
`;

export const SloganContent = styled.p`
  color: ${({ theme }) => theme.colors.defaultBlack};
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 16)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 28)}px;
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
