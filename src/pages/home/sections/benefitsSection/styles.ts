import styled from 'styled-components';
import baseTheme from '@/theme/theme';

export const BenefitsSectionWrapper = styled.section`
  margin-top: ${baseTheme.spaces[10]}px;
  background-color: ${({ theme }) => theme.colors.solutionBackground};
`;
export const BenefitsWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BenefitsDescriptionWrapper = styled.div`
  margin-top: 302px;
  @media (max-width: 1100px) {
    margin-top: ${baseTheme.spaces[8]}px;
  }
`;

export const BenefitsTitle = styled.h2`
  font-weight: ${({ theme }) => (theme.sizes.weight = 800)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 38)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 56)}px;
  color: ${({ theme }) => theme.colors.defaultBlack};
  font-family: Manrope-Regular;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const BenefitsParagraph = styled.p`
  margin-top: ${baseTheme.spaces[5]}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 33)}px;
  font-family: Manrope-Regular;
  color: ${({ theme }) => theme.colors.darkGrey};
  width: ${({ theme }) => (theme.sizes.width = 540)}px;
  @media (max-width: 600px) {
    width: auto;
    font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
    line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  }
`;

export const BlocksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  width: ${({ theme }) => (theme.sizes.width = 540)}px;
  @media (max-width: 600px) {
    flex-direction: column;
    width: auto;
  }
  div {
    width: ${({ theme }) => (theme.sizes.width = 255)}px;
    background-color: ${({ theme }) => theme.colors.defaultWhite};
    box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
    border-radius: 6px;
    position: relative;
  }
  div:first-child {
    margin-top: ${baseTheme.spaces[17]}px;
    @media (max-width: 600px) {
      margin-top: ${baseTheme.spaces[4]}px;
    }
  }
  div:nth-child(2) {
    margin-top: ${baseTheme.spaces[27]}px;
    @media (max-width: 600px) {
      margin-top: ${baseTheme.spaces[4]}px;
    }
  }
  div:nth-child(3) {
    margin-top: ${baseTheme.spaces[5]}px;
    margin-bottom: ${baseTheme.spaces[28]}px;
    @media (max-width: 600px) {
      margin-top: ${baseTheme.spaces[4]}px;
      margin-bottom: ${baseTheme.spaces[0]}px;
    }
  }
  div:nth-child(4) {
    margin-top: ${baseTheme.spaces[5]}px;
    margin-bottom: ${baseTheme.spaces[17]}px;
    @media (max-width: 600px) {
      margin-top: ${baseTheme.spaces[4]}px;
      margin-bottom: ${baseTheme.spaces[0]}px;
    }
  }
  img {
    position: absolute;
    top: 30px;
    left: 30px;
  }
`;

export const BlockTitle = styled.h5`
  margin-top: ${baseTheme.spaces[11]}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 700)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 30)}px;
  font-family: Manrope-Regular;
  color: ${({ theme }) => theme.colors.defaultBlack};
  text-align: center;
`;
export const BlocksParagraph = styled.p`
  margin-top: ${baseTheme.spaces[2]}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  font-family: Manrope-Regular;
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: ${baseTheme.spaces[0]}px ${baseTheme.spaces[4]}px
    ${baseTheme.spaces[4]}px ${baseTheme.spaces[4]}px;
`;

export const Blocks = styled.div``;
