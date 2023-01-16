import React from 'react';
import {
  ContactInfo,
  ContactInfoDescriptions,
  ContactInfoTitle,
  ContactInfoWrapper,
  FooterParagraph,
  FooterSection,
  FooterTitle,
  FormInput,
  FormWrapper,
  Icons,
  IconsLinks,
  IconsWrapper,
  LinksParagraph,
  LinksWrapper,
  LogoWrapper,
  PrivacyPolicyParagraph,
  PrivacyTermsWrapper,
  QuickLink,
  QuickLinks,
  QuickLinkTitle,
  QuickLinkWrapper,
  Rights,
  RightsParagraph,
  RightsParagraphWrapper,
  RightsWrapper,
  SendButton,
  ServiceLink,
  ServiceLinks,
  ServiceLinkTitle,
  ServiceLinkWrapper,
  SocialLinksWrapper,
  SubscribeWrapper,
  TermsOfUsParagraph,
  TitleWrapper,
} from '@/components/Footer/styles';
import logo_footer from '@/assets/images/logo_footer.png';
import { contactInfo, quickLinks, service } from '@/constants';
import FooterMobile, { socialLinks } from '@/components/FooterMobile';

const Footer = () => {
  return (
    <FooterSection>
      <SubscribeWrapper>
        <TitleWrapper>
          <FooterTitle>Subscribe to our newsletter</FooterTitle>
          <FooterParagraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </FooterParagraph>
        </TitleWrapper>
        <FormWrapper>
          <FormInput type="text" name="Email" placeholder="Your email" />
          <SendButton type="submit">Send</SendButton>
        </FormWrapper>
      </SubscribeWrapper>
      <LinksWrapper>
        <SocialLinksWrapper>
          <LogoWrapper src={logo_footer} alt="logo" />
          <LinksParagraph>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.
          </LinksParagraph>
          <IconsWrapper>
            {socialLinks.map(({ id, logo, alt, to }) => (
              <IconsLinks key={id} href={to}>
                <Icons src={logo} alt={alt} />
              </IconsLinks>
            ))}
          </IconsWrapper>
        </SocialLinksWrapper>
        <QuickLinkWrapper>
          <QuickLinkTitle>Quick link</QuickLinkTitle>
          <QuickLinks>
            {quickLinks.map(({ id, link, to }) => (
              <QuickLink key={id} to={to}>
                {link}
              </QuickLink>
            ))}
          </QuickLinks>
        </QuickLinkWrapper>
        <ServiceLinkWrapper>
          <ServiceLinkTitle>Service</ServiceLinkTitle>
          <ServiceLinks>
            {service.map(({ id, link, to }) => (
              <ServiceLink key={id} to={to}>
                {link}
              </ServiceLink>
            ))}
          </ServiceLinks>
        </ServiceLinkWrapper>
        <ContactInfoWrapper>
          <ContactInfoTitle>Contact info</ContactInfoTitle>
          <ContactInfoDescriptions>
            {contactInfo.map(({ id, description }) => (
              <ContactInfo key={id}>{description}</ContactInfo>
            ))}
          </ContactInfoDescriptions>
        </ContactInfoWrapper>
      </LinksWrapper>
      <FooterMobile />
      <RightsWrapper>
        <Rights>
          <RightsParagraphWrapper>
            <RightsParagraph>Ensome© 2022 All Rights Reserved</RightsParagraph>
          </RightsParagraphWrapper>
          <PrivacyTermsWrapper>
            <PrivacyPolicyParagraph>Privacy policy</PrivacyPolicyParagraph>
            <TermsOfUsParagraph>Terms of us</TermsOfUsParagraph>
          </PrivacyTermsWrapper>
        </Rights>
      </RightsWrapper>
    </FooterSection>
  );
};

export default Footer;
