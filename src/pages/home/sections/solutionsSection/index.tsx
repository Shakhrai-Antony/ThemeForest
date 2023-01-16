import React from 'react';
import {
  SolutionBanner,
  SolutionButton,
  SolutionButtonMobile,
  SolutionDescription,
  SolutionParagraph,
  SolutionParagraphMobile,
  SolutionsSectionWrapper,
  SolutionTitle,
} from '@/pages/home/sections/solutionsSection/styles';

const SolutionsSection = () => {
  return (
    <>
      <SolutionsSectionWrapper>
        <SolutionBanner />
        <SolutionDescription>
          <SolutionTitle>Radically new solutions for data</SolutionTitle>
          <SolutionParagraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi.
          </SolutionParagraph>
          <SolutionButton>Learn more</SolutionButton>
        </SolutionDescription>
      </SolutionsSectionWrapper>
      <SolutionParagraphMobile>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi.
      </SolutionParagraphMobile>
      <SolutionButtonMobile>Learn more</SolutionButtonMobile>
    </>
  );
};

export default SolutionsSection;
