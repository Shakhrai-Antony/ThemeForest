import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import button_header from '@/assets/images/button_header.png';
import baseTheme from '@/theme/theme';

export const Navigation = styled.nav`
  width: 100%;
  display: block;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const NavigationUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: center;
  height: 100%;
  li:first-of-type {
    a {
      margin-left: ${baseTheme.spaces[0]}px;
    }
  }
  }
`;

export const LogoWrapper = styled.img`
  margin-right: ${baseTheme.spaces[32]}px;
`;

export const NavigationLiWrapper = styled.div`
  width: 501px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationLi = styled.li`
  a:after {
    content: '';
    width: 0;
    height: 2px;
    color: #000000;
    display: block;
    background-color: ${({ theme }) => theme.colors.grayishBlue};
    transition-duration: 300ms;
    margin-top: 1px;
  }
  a:hover:after {
    width: 100%;
  }
  a.active:after {
    width: 100%;
  }
`;

export const Links = styled(NavLink)`
  text-decoration: none;
  font-size: ${({ theme }) => (theme.sizes.weight = 14)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  color: ${({ theme }) => theme.colors.lightGrey};
  letter-spacing: -1px;
  font-family: Manrope-Regular;
`;

export const WatchWrapper = styled.button`
  background-image: url(${button_header});
  background-size: cover;
  width: ${({ theme }) => (theme.sizes.width = 168)}px;
  height: ${({ theme }) => (theme.sizes.height = 44)}px;
  background-repeat: no-repeat;
  border: transparent;
  cursor: pointer;
  margin-left: ${baseTheme.spaces[32]}px;
`;
export const Video = styled.iframe`
  width: 100%;
  height: 450px;
`;
