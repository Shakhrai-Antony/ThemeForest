import React from 'react';
import {
  BenefitsDescriptionWrapper,
  BenefitsParagraph,
  BenefitsSectionWrapper,
  BenefitsTitle,
  BenefitsWrapper,
  Blocks,
  BlocksParagraph,
  BlocksWrapper,
  BlockTitle,
} from '@/pages/home/sections/benefitsSection/styles';
import brain_icon from '@/assets/images/brain_icon.png';
import diagram_icon from '@/assets/images/diagram_icon.png';
import key_icon from '@/assets/images/key_icon.png';
import data_icon from '@/assets/images/data_icon.png';

const blocks = [
  {
    id: 1,
    value: <img src={brain_icon} alt="icon" />,
    title: 'Machine learning',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae abillo',
  },
  {
    id: 2,
    value: <img src={diagram_icon} alt="icon" />,
    title: 'Embed analytics',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae abillo',
  },
  {
    id: 3,
    value: <img src={key_icon} alt="icon" />,
    title: 'Access control',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae abillo',
  },
  {
    id: 4,
    value: <img src={data_icon} alt="icon" />,
    title: 'Data analytics',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae abillo',
  },
];

const BenefitsSection = () => {
  return (
    <BenefitsSectionWrapper>
      <BenefitsWrapper>
        <BenefitsDescriptionWrapper>
          <BenefitsTitle>The benefits of Ensome</BenefitsTitle>
          <BenefitsParagraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi.
          </BenefitsParagraph>
        </BenefitsDescriptionWrapper>
        <BlocksWrapper>
          {blocks.map(({ id, value, title, description }) => (
            <Blocks key={id}>
              {value}
              <BlockTitle>{title}</BlockTitle>
              <BlocksParagraph>{description}</BlocksParagraph>
            </Blocks>
          ))}
        </BlocksWrapper>
      </BenefitsWrapper>
    </BenefitsSectionWrapper>
  );
};

export default BenefitsSection;
