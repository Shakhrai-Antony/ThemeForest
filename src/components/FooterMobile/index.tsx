import React, { useState } from 'react';
import { Icons, IconsLinks } from '@/components/Footer/styles';
import { contactInfo, quickLinks, service } from '@/constants';
import facebook from '@/assets/images/facebook.png';
import twitter from '@/assets/images/twitter.png';
import linkedIn from '@/assets/images/linkedIn.png';
import youtube from '@/assets/images/youtube.png';
import enternet from '@/assets/images/enternet.png';
import vk from '@/assets/images/vk.png';
import {
  ContactInfoIconMobile,
  ContactInfoMobile,
  ContactInfoMobileAdress,
  ContactInfoParagraphMobile,
  ContactInfoTitleMobile,
  ContactInfoWrapperMobile,
  LinksWrapperMobile,
  QuickLinkIconMobile,
  QuickLinkMobile,
  QuickLinksMobile,
  QuickLinksMobileWrapper,
  QuickLinkTitleMobile,
  QuickLinkWrapperMobile,
  ServiceLinkIconMobile,
  ServiceLinkMobile,
  ServiceLinksMobile,
  ServiceLinksMobileWrapper,
  ServiceLinkTitleMobile,
  ServiceLinkWrapperMobile,
  SocialLinksMobileTitle,
  SocialLinksMobileWrapper,
} from '@/components/FooterMobile/styles';

export const socialLinks = [
  { id: 1, logo: facebook, alt: 'facebook', to: 'https://www.facebook.com/' },
  { id: 2, logo: twitter, alt: 'twitter', to: 'https://twitter.com/' },
  { id: 3, logo: linkedIn, alt: 'linkedIn', to: 'https://www.linkedin.com/' },
  { id: 4, logo: youtube, alt: 'youtube', to: 'https://www.youtube.com/' },
  { id: 5, logo: enternet, alt: 'odnoklassniki', to: 'https://ok.ru/' },
  { id: 6, logo: vk, alt: 'vk', to: 'https://vk.com/' },
];

const FooterMobile = () => {
  const [accordionStatus, setAccordionStatus] = useState<number | null>(null);
  const handleAccordionStatus = (id: number) => () => {
    accordionStatus === id ? setAccordionStatus(null) : setAccordionStatus(id);
  };
  return (
    <>
      <LinksWrapperMobile>
        <QuickLinkMobile>
          <QuickLinkWrapperMobile>
            <QuickLinkTitleMobile>Quick link</QuickLinkTitleMobile>
            <QuickLinkIconMobile
              type="button"
              onClick={handleAccordionStatus(1)}
            />
          </QuickLinkWrapperMobile>
          <QuickLinksMobileWrapper id={accordionStatus}>
            {quickLinks.map(({ id, link, to }) => (
              <QuickLinksMobile key={id} to={to}>
                {link}
              </QuickLinksMobile>
            ))}
          </QuickLinksMobileWrapper>
        </QuickLinkMobile>
        <ServiceLinkMobile>
          <ServiceLinkWrapperMobile>
            <ServiceLinkTitleMobile>Service</ServiceLinkTitleMobile>
            <ServiceLinkIconMobile
              type="button"
              onClick={handleAccordionStatus(2)}
            />
          </ServiceLinkWrapperMobile>
          <ServiceLinksMobileWrapper id={accordionStatus}>
            {service.map(({ id, link, to }) => (
              <ServiceLinksMobile key={id} to={to}>
                {link}
              </ServiceLinksMobile>
            ))}
          </ServiceLinksMobileWrapper>
        </ServiceLinkMobile>
        <ContactInfoMobile>
          <ContactInfoWrapperMobile>
            <ContactInfoTitleMobile>Contact info</ContactInfoTitleMobile>
            <ContactInfoIconMobile
              type="button"
              onClick={handleAccordionStatus(3)}
            />
          </ContactInfoWrapperMobile>
          <ContactInfoMobileAdress id={accordionStatus}>
            {contactInfo.map(({ id, description }) => (
              <ContactInfoParagraphMobile key={id}>
                {description}
              </ContactInfoParagraphMobile>
            ))}
          </ContactInfoMobileAdress>
        </ContactInfoMobile>
      </LinksWrapperMobile>
      <SocialLinksMobileWrapper>
        <SocialLinksMobileTitle>Follow us</SocialLinksMobileTitle>
        {socialLinks.map(({ id, logo, alt, to }) => (
          <IconsLinks key={id} href={to}>
            <Icons src={logo} alt={alt} />
          </IconsLinks>
        ))}
      </SocialLinksMobileWrapper>
    </>
  );
};
export default FooterMobile;
