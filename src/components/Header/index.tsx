import React, { useState } from 'react';

import { HeaderWrapper } from '@/components/Header/styles';
import Burger from '@/components/Burger';
import Menu from '@/components/Menu';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <HeaderWrapper>
      <Menu open={open} setOpen={setOpen} />
      <Burger open={open} setOpen={setOpen} />
    </HeaderWrapper>
  );
};

export default Header;
