import React from 'react';
import {
  ChoosePlanButton,
  ChoosePlanWrapper,
  Possibilities,
  PossibilitiesWrapper,
  PricingBlock,
  PricingBlocksWrapper,
  PricingOption,
  PricingOptionTitle,
  PricingSectionWrapper,
  PricingTitle,
} from '@/pages/home/sections/pricingBlocks/styles';
import { pricingBlocks } from '@/constants';

const PricingSection = () => {
  return (
    <PricingSectionWrapper>
      <PricingTitle>Our pricing</PricingTitle>
      <PricingBlocksWrapper>
        {pricingBlocks.map(
          ({ id, title, price, month, year, button, possibilities }) => (
            <PricingBlock key={id}>
              <PricingOptionTitle>{title}</PricingOptionTitle>
              <PricingOption>
                <p>{price}</p>
                <button type="button">{month}</button>
                <button type="button">{year}</button>
              </PricingOption>
              <ChoosePlanWrapper>
                <ChoosePlanButton type="button">{button}</ChoosePlanButton>
              </ChoosePlanWrapper>
              <PossibilitiesWrapper>
                <ul>
                  {possibilities.map((item, index) => (
                    <Possibilities key={index}>{item}</Possibilities>
                  ))}
                </ul>
              </PossibilitiesWrapper>
            </PricingBlock>
          ),
        )}
      </PricingBlocksWrapper>
    </PricingSectionWrapper>
  );
};

export default PricingSection;
