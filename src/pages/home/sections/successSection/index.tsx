import React from 'react';
import partner_1 from '@/assets/images/partner_1.png';
import partner_2 from '@/assets/images/partner_2.png';
import partner_3 from '@/assets/images/partner_3.png';
import partner_4 from '@/assets/images/partner_4.png';
import partner_5 from '@/assets/images/partner_5.png';
import partner_6 from '@/assets/images/partner_6.png';
import {
  DataManagementDescription,
  DataManagementNumber,
  DataManagementWrapper,
  NumbersWrapper,
  PartnersWrapper,
  ProjectExecuteDescription,
  ProjectExecuteNumber,
  ProjectExecuteWrapper,
  SatisfiedCustomersDescription,
  SatisfiedCustomersNumber,
  SatisfiedCustomersWrapper,
  SuccessSectionWrapper,
  SuccessText,
  SuccessTextMini,
  SuccessTitle,
  SuccessTitleWrapper,
} from '@/pages/home/sections/successSection/styles';

const partners = [
  { id: 1, value: <img src={partner_1} alt="partner" /> },
  { id: 2, value: <img src={partner_2} alt="partner" /> },
  { id: 3, value: <img src={partner_3} alt="partner" /> },
  { id: 4, value: <img src={partner_4} alt="partner" /> },
  { id: 5, value: <img src={partner_5} alt="partner" /> },
  { id: 6, value: <img src={partner_6} alt="partner" /> },
];

const SuccessSection = () => {
  return (
    <SuccessSectionWrapper>
      <SuccessTitleWrapper>
        <SuccessTitle>
          We provide services that guarantee your success
        </SuccessTitle>
      </SuccessTitleWrapper>
      <NumbersWrapper>
        <ProjectExecuteWrapper>
          <ProjectExecuteNumber>1830+</ProjectExecuteNumber>
          <ProjectExecuteDescription>
            Project executed
          </ProjectExecuteDescription>
        </ProjectExecuteWrapper>
        <SatisfiedCustomersWrapper>
          <SatisfiedCustomersNumber>834+</SatisfiedCustomersNumber>
          <SatisfiedCustomersDescription>
            Satisfied customers
          </SatisfiedCustomersDescription>
        </SatisfiedCustomersWrapper>
        <DataManagementWrapper>
          <DataManagementNumber>390</DataManagementNumber>
          <DataManagementDescription>Data management</DataManagementDescription>
        </DataManagementWrapper>
        <SuccessText>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab
          illo inventore veritatis et quasi.
        </SuccessText>
      </NumbersWrapper>
      <SuccessTextMini>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque lauda, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi.
      </SuccessTextMini>
      <PartnersWrapper>
        {partners.map(({ id, value }) => (
          <div key={id}>{value}</div>
        ))}
      </PartnersWrapper>
    </SuccessSectionWrapper>
  );
};

export default SuccessSection;
