import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import blue_circle from '@/assets/images/blue_circle.png';
import discussion_banner from '@/assets/images/discussion_banner.png';
import discussion_banner_mini from '@/assets/images/discussion_banner_mini.png';
import baseTheme from '@/theme/theme';

export const BannerSectionWrapper = styled.section`
  margin-top: ${baseTheme.spaces[11]}px;
  position: relative;
`;

export const BannerWrapper = styled.div`
  background-image: url(${discussion_banner});
  background-size: contain;
  background-repeat: no-repeat;
  height: ${({ theme }) => (theme.sizes.height = 590)}px;
  width: 100%;
  @media (max-width: 1200px) {
    height: ${({ theme }) => (theme.sizes.height = 400)}px;
  }
  @media (max-width: 800px) {
    height: ${({ theme }) => (theme.sizes.height = 300)}px;
  }
  @media (max-width: 600px) {
    height: ${({ theme }) => (theme.sizes.height = 200)}px;
  }
  @media (max-width: 400px) {
    background-image: url(${discussion_banner_mini});
    background-size: cover;
  }
`;

export const LoadMoreLink = styled(NavLink)`
  background-image: url(${blue_circle});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  width: 120px;
  height: 120px;
  position: absolute;
  top: -65px;
  right: 25%;
  outline: 5px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${baseTheme.colors.defaultWhite};
  background-color: ${baseTheme.colors.primaryBlue};
  text-decoration: none;
  & > div {
    width: calc(${({ theme }) => (theme.sizes.width = 130)}px - 15%);
    height: calc(${({ theme }) => (theme.sizes.height = 130)}px - 15%);
    border: 1px solid ${baseTheme.colors.defaultWhite};
    position: absolute;
    border-radius: 50%;
    font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
    font-weight: ${({ theme }) => (theme.sizes.weight = 600)}px;
    line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  }
`;
