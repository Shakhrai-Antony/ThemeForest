import React from 'react';

import Header from '@/components/Header';
import { LayoutProps } from '@/components/Layout/interface';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
