import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import baseTheme from '@/theme/theme';

export const BurgerWrapper = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: flex;
    width: 100%;
    align-items: center;
  }
`;

export const StyledBurger = styled.button`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: absolute;
  top: 5%;
  right: 2rem;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ theme }) => (theme.sizes.width = 32)}px;
  height: ${({ theme }) => (theme.sizes.height = 32)}px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${baseTheme.spaces[0]}px;
  z-index: 10;

  @media (max-width: 375px) {
    top: 7%;
  }

  &:focus {
    outline: none;
  }

  div {
    width: ${({ theme }) => (theme.sizes.width = 32)}px;
    height: ${({ theme }) => (theme.sizes.height = 4)}px;
    background: ${({ theme }) => theme.colors.primaryBlue};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const BurgerContent = styled.div`
  opacity: ${({ open }) => (open ? '1' : '0')};
  width: 50vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.grayishBlue};
  position: absolute;
  right: 0;
  top: 0;
  transition-duration: 0.35s;
  li:first-child {
    margin-top: ${baseTheme.spaces[22]}px;
  }
  z-index: 3;
`;

export const Logo = styled.img`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    width: ${({ theme }) => (theme.sizes.width = 141)}px;
    height: ${({ theme }) => (theme.sizes.height = 46)}px;
    margin-left: ${baseTheme.spaces[4]}px;
  }
`;

export const NavigationBurger = styled.li`
  display: flex;
  align-items: start;
  flex-direction: column;
  list-style: none;
  text-decoration: none;
  padding-bottom: 20px;
  a:after {
    content: '';
    width: 0;
    height: 2px;
    color: #000000;
    display: block;
    background-color: ${({ theme }) => theme.colors.defaultWhite};
    transition-duration: 300ms;
    margin-top: 1px;
  }
  a:hover:after {
    width: 100%;
  }
`;

export const LinksBurger = styled(NavLink)`
  text-decoration: none;
  font-size: ${({ theme }) => (theme.sizes.weight = 20)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  color: ${({ theme }) => theme.colors.lightGrey};
  letter-spacing: -1px;
  font-family: Manrope-Regular;
  margin-left: ${baseTheme.spaces[7]}px;
`;

export const TopLine = styled.div``;
export const MiddleLine = styled.div``;
export const BottomLine = styled.div``;
