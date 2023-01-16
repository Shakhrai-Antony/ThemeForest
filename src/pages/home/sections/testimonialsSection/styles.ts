import styled from 'styled-components';
import baseTheme from '@/theme/theme';

export const TestimonialsSectionWrapper = styled.section``;

export const SwiperWrapper = styled.div`
  margin-top: ${baseTheme.spaces[22]}px;
  display: flex;
  justify-content: center;
  gap: 640px;
  align-items: center;
  @media (max-width: 1100px) {
    gap: 30px;
  }
  @media (max-width: 600px) {
    width: auto;
    text-align: center;
    margin: ${baseTheme.spaces[8]}px auto;
  }
`;

export const TestimonialsTitle = styled.h2`
  font-weight: ${({ theme }) => (theme.sizes.weight = 800)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 56)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 38)}px;
  color: ${({ theme }) => theme.colors.defaultBlack};
  font-family: Manrope-Regular;
  @media (max-width: 600px) {
    font-size: ${({ theme }) => (theme.sizes.fontSize = 24)}px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
export const BlocksWrapper = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  gap: 30px;
  div {
    width: ${({ theme }) => (theme.sizes.width = 350)}px;
    height: ${({ theme }) => (theme.sizes.height = 371)}px;
    box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
    background-color: ${({ theme }) => theme.colors.defaultWhite};
    position: relative;

    p:first-of-type {
      margin-top: 4px;
      margin-left: 140px;
      font-weight: ${({ theme }) => (theme.sizes.weight = 500)}px;
      font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
      line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-family: Manrope-Regular;
    }
    p:nth-of-type(2) {
      margin-top: 39px;
      margin-bottom: 35px;
      padding: 0 35px;
      font-weight: ${({ theme }) => (theme.sizes.weight = 400)}px;
      font-size: ${({ theme }) => (theme.sizes.fontSize = 16)}px;
      line-height: ${({ theme }) => (theme.sizes.lineHeight = 28)}px;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-family: Manrope-Regular;
    }
  }
  img {
    position: absolute;
    top: 35px;
    left: 35px;
    width: ${({ theme }) => (theme.sizes.width = 80)}px;
    height: ${({ theme }) => (theme.sizes.height = 80)}px;
  }
  h5 {
    margin-top: 49px;
    margin-left: 140px;
    font-weight: ${({ theme }) => (theme.sizes.weight = 700)}px;
    font-size: ${({ theme }) => (theme.sizes.fontSize = 16)}px;
    line-height: ${({ theme }) => (theme.sizes.fontSize = 24)}px;
    color: ${({ theme }) => theme.colors.defaultBlack};
    font-family: Manrope-Regular;
  }
`;
