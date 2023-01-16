import React from 'react';

import {
  SloganContent,
  SloganContentWrapper,
  SloganDescription,
  SloganSection,
  SloganWrapper,
} from '@/pages/home/sections/sloganSection/styles';

const Slogan = () => {
  return (
    <SloganSection>
      <SloganWrapper>
        <SloganDescription>
          Find true power in your data with <span>Ensome</span>
        </SloganDescription>
      </SloganWrapper>
      <SloganContentWrapper>
        <SloganContent>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi.
        </SloganContent>
      </SloganContentWrapper>
    </SloganSection>
  );
};

export default Slogan;
