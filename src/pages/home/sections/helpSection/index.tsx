import React from 'react';
import {
  ContactButton,
  HelpSectionWrapper,
  HelpWrapper,
  Paragraph,
  Title,
} from '@/pages/home/sections/helpSection/styles';

const HelpSection = () => {
  return (
    <HelpSectionWrapper>
      <HelpWrapper>
        <Title>Do you need help?</Title>
        <Paragraph>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis┬ásuscipit laboriosam, nisi ut aliquid ex ea commodi.
        </Paragraph>
        <ContactButton>Contact us</ContactButton>
      </HelpWrapper>
    </HelpSectionWrapper>
  );
};

export default HelpSection;
