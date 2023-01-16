import React, { useState } from 'react';

import logo from '@/assets/images/logo_header.png';
import { IMenu } from '@/components/Menu/interface';
import {
  Links,
  LogoWrapper,
  Navigation,
  NavigationLi,
  NavigationLiWrapper,
  NavigationUl,
  Video,
  WatchWrapper,
} from '@/components/Menu/styles';
import { links } from '@/constants';
import { Modal } from 'antd';

const Menu = ({ open }: IMenu) => {
  const [videoVisibility, setVideoVisibility] = useState(false);
  const handleOpenVideo = () => {
    setVideoVisibility(true);
  };
  const handleCloseVideo = () => {
    setVideoVisibility(false);
  };

  return (
    <Navigation open={open}>
      <NavigationUl>
        <LogoWrapper src={logo} alt="logo" />
        <NavigationLiWrapper>
          {links.map(({ id, value, to }) => (
            <NavigationLi key={id}>
              <Links to={to}>{value}</Links>
            </NavigationLi>
          ))}
        </NavigationLiWrapper>
        <WatchWrapper type="button" onClick={handleOpenVideo} />
      </NavigationUl>
      <Modal
        open={videoVisibility}
        footer={null}
        onCancel={handleCloseVideo}
        bodyStyle={{ padding: 0 }}
      >
        <Video
          src="https://www.youtube.com/embed/LIqQNG_q2us"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
    </Navigation>
  );
};

export default Menu;
