import styled from 'styled-components';
import baseTheme from '@/theme/theme';
import done_white from '@/assets/images/done_white.png';
import done_blue from '@/assets/images/done_blue.png';

export const PricingSectionWrapper = styled.section`
  margin-top: ${baseTheme.spaces[17]}px;
  @media (max-width: 600px) {
    margin-top: ${baseTheme.spaces[8]}px;
  }
`;

export const PricingTitle = styled.h2`
  font-weight: ${({ theme }) => (theme.sizes.weight = 800)};
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 56)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 38)}px;
  color: ${({ theme }) => theme.colors.defaultBlack};
  font-family: Manrope-Regular;
  margin-left: ${baseTheme.spaces[33]}px;
  @media (max-width: 1200px) {
    margin-left: ${baseTheme.spaces[3]}px;
  }
  @media (max-width: 600px) {
    font-size: ${({ theme }) => (theme.sizes.fontSize = 24)}px;
  }
`;

export const PricingBlocksWrapper = styled.div`
  margin-top: ${baseTheme.spaces[8]}px;
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PricingBlock = styled.div`
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border: transparent;
  border-radius: 6px;
  width: ${({ theme }) => (theme.sizes.width = 255)}px;
  height: ${({ theme }) => (theme.sizes.height = 525)}px;
  &:nth-of-type(3) {
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    h5 {
      color: ${({ theme }) => theme.colors.defaultWhite};
    }
    p {
    color: ${({ theme }) => theme.colors.defaultWhite};
    }
    li {
      color: ${({ theme }) => theme.colors.defaultWhite};
      list-style-image: url(${done_white});
    }
    div:first-of-type {
      button:first-of-type {
        background-color: ${({ theme }) => theme.colors.defaultWhite};
        color: ${({ theme }) => theme.colors.primaryBlue};
      }
      button:nth-of-type(2) {
        background-color: ${({ theme }) => theme.colors.primaryBlue};
        color: ${({ theme }) => theme.colors.defaultWhite};
        border-color: ${({ theme }) => theme.colors.defaultWhite};
      }
    }
    div:nth-of-type(2) {
      button {
        background-color: ${({ theme }) => theme.colors.defaultWhite};
        color: ${({ theme }) => theme.colors.primaryBlue};
        &:hover {
          background-color: ${({ theme }) => theme.colors.tertiary};
        }
      }
    }
`;

export const PricingOptionTitle = styled.h5`
  margin-top: ${baseTheme.spaces[6]}px;
  padding: ${baseTheme.spaces[0]}px ${baseTheme.spaces[4]}px;
  color: ${({ theme }) => theme.colors.defaultBlack};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 16)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 700)};
  font-family: Manrope-Regular;
`;

export const PricingOption = styled.div`
  margin-top: ${baseTheme.spaces[3]}px;
  padding: ${baseTheme.spaces[0]}px ${baseTheme.spaces[4]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  p {
    color: ${({ theme }) => theme.colors.defaultBlack};
    font-size: ${({ theme }) => (theme.sizes.fontSize = 26)}px;
    line-height: ${({ theme }) => (theme.sizes.lineHeight = 40)}px;
    font-weight: ${({ theme }) => (theme.sizes.weight = 800)};
  }
  button {
    padding: ${baseTheme.spaces[1]}px ${baseTheme.spaces[2]}px
      ${baseTheme.spaces[1]}px ${baseTheme.spaces[2]}px;
    border-radius: 6px;
    width: ${({ theme }) => (theme.sizes.width = 42)}px;
    border-color: ${({ theme }) => theme.colors.primaryBlue};
    font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
    line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
    font-weight: ${({ theme }) => (theme.sizes.weight = 600)};
    color: ${({ theme }) => theme.colors.primaryBlue};
    background-color: ${({ theme }) => theme.colors.defaultWhite};
    box-sizing: border-box;
  }
  button:first-of-type {
    background-color: ${({ theme }) => theme.colors.primaryBlue};
    color: ${({ theme }) => theme.colors.defaultWhite};
    border-color: transparent;
  }
`;

export const ChoosePlanButton = styled.button`
  margin: ${baseTheme.spaces[7]}px ${baseTheme.spaces[4]}px
    ${baseTheme.spaces[0]}px ${baseTheme.spaces[4]}px;
  padding: ${baseTheme.spaces[2]}px ${baseTheme.spaces[3]}px
    ${baseTheme.spaces[2]}px ${baseTheme.spaces[3]}px;
  border: transparent;
  border-radius: 6px;
  width: ${({ theme }) => (theme.sizes.width = 215)}px;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  font-weight: ${({ theme }) => (theme.sizes.weight = 600)};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  color: ${({ theme }) => theme.colors.defaultWhite};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoveredButton};
  }
`;
export const ChoosePlanWrapper = styled.div``;

export const PossibilitiesWrapper = styled.div`
  margin: ${baseTheme.spaces[5]}px ${baseTheme.spaces[4]}px
    ${baseTheme.spaces[0]}px ${baseTheme.spaces[4]}px;
  display: flex;
  flex-direction: column;
  column-gap: 16px;
  align-items: center;
`;

export const Possibilities = styled.li`
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  margin-bottom: ${baseTheme.spaces[3]}px;
  list-style-image: url(${done_blue});
`;
