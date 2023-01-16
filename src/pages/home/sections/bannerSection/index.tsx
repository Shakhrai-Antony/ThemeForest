import React from 'react';

import {
  BannerSectionWrapper,
  BannerWrapper,
  LoadMoreLink,
} from '@/pages/home/sections/bannerSection/styles';

const BannerSection = () => {
  return (
    <BannerSectionWrapper>
      <BannerWrapper>
        <LoadMoreLink>
          learn more
          <div />
        </LoadMoreLink>
      </BannerWrapper>
    </BannerSectionWrapper>
  );
};

export default BannerSection;
