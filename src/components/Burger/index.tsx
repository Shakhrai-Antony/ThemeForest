import React, { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import logo from '@/assets/images/logo_header.png';
import { IBurger } from '@/components/Burger/interface';
import {
  BottomLine,
  BurgerContent,
  BurgerWrapper,
  LinksBurger,
  Logo,
  MiddleLine,
  NavigationBurger,
  StyledBurger,
  TopLine,
} from '@/components/Burger/styles';
import { links } from '@/constants';

const Burger = ({ open, setOpen }: IBurger) => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setOpen((prevState) => !prevState);
  };
  const { width } = useWindowSize();
  useEffect(() => {
    if (width > 1200) {
      setVisible(false);
      setOpen(false);
    }
    if (width < 1200) setVisible(true);
  }, [width]);

  return (
    <BurgerWrapper>
      <StyledBurger open={open} onClick={handleClose} visible={visible}>
        <TopLine />
        <MiddleLine />
        <BottomLine />
      </StyledBurger>
      <Logo src={logo} alt="logo" />
      <BurgerContent open={open}>
        {links.map(({ id, value, to }) => (
          <NavigationBurger key={id}>
            <LinksBurger to={to}>{value}</LinksBurger>
          </NavigationBurger>
        ))}
      </BurgerContent>
    </BurgerWrapper>
  );
};

export default Burger;
