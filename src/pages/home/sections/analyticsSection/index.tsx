import React from 'react';
import {
  AnalyticsContent,
  AnalyticsContentWrapper,
  AnalyticsDescription,
  AnalyticsSectionWrapper,
  AnalyticsWrapper,
  ButtonWrapper,
} from '@/pages/home/sections/analyticsSection/styles';

const AnalyticsSection = () => {
  return (
    <AnalyticsSectionWrapper>
      <AnalyticsWrapper>
        <AnalyticsDescription>
          The <span>newest</span> business analytics platform
        </AnalyticsDescription>
      </AnalyticsWrapper>
      <AnalyticsContentWrapper>
        <AnalyticsContent>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi.
        </AnalyticsContent>
        <ButtonWrapper>Discover more</ButtonWrapper>
      </AnalyticsContentWrapper>
    </AnalyticsSectionWrapper>
  );
};

export default AnalyticsSection;
