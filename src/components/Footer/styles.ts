import styled from 'styled-components';
import baseTheme from '@/theme/theme';
import { NavLink } from 'react-router-dom';

export const FooterSection = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const SubscribeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
  @media (max-width: 1160px) {
    gap: 30px;
  }
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const TitleWrapper = styled.div`
  margin-top: ${baseTheme.spaces[10]}px;
  width: ${({ theme }) => (theme.sizes.width = 540)}px;
`;

export const FooterTitle = styled.h2`
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 38)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 56)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 800)};
  font-family: Manrope-Regular;
  @media (max-width: 600px) {
    font-size: ${({ theme }) => (theme.sizes.fontSize = 30)}px;
    line-height: ${({ theme }) => (theme.sizes.lineHeight = 40)}px;
    font-weight: ${({ theme }) => (theme.sizes.weight = 800)};
    text-align: center;
  }
`;

export const FooterParagraph = styled.p`
  margin-top: ${baseTheme.spaces[4]}px;
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 33)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)};
  font-family: Manrope-Regular;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const FormWrapper = styled.form`
  margin-top: ${baseTheme.spaces[14]}px;
  width: ${({ theme }) => (theme.sizes.width = 445)}px;
  height: ${({ theme }) => (theme.sizes.height = 54)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1050px) {
    margin-top: ${baseTheme.spaces[4]}px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const FormInput = styled.input`
  padding: ${baseTheme.spaces[3]}px ${baseTheme.spaces[0]}px
    ${baseTheme.spaces[3]}px ${baseTheme.spaces[4]}px;
  background-color: ${({ theme }) => theme.colors.helper};
  border: transparent;
  border-radius: 6px 0 0 6px;
  height: ${({ theme }) => (theme.sizes.height = 54)}px;
  width: ${({ theme }) => (theme.sizes.width = 320)}px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.defaultBlack};
  }
  @media (max-width: 600px) {
    width: 328px;
    border-radius: 6px;
  }
`;

export const SendButton = styled.button`
  padding: ${baseTheme.spaces[2]}px ${baseTheme.spaces[7]}px;
  width: ${({ theme }) => (theme.sizes.width = 125)}px;
  height: ${({ theme }) => (theme.sizes.height = 54)}px;
  background-color: ${({ theme }) => theme.colors.defaultWhite};
  border: transparent;
  border-radius: 0 6px 6px 0;
  color: ${({ theme }) => theme.colors.defaultBlack};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 16)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 700)};
  font-family: Manrope-Regular;
  cursor: pointer;
  @media (max-width: 600px) {
    width: ${({ theme }) => (theme.sizes.width = 328)}px;
    border-radius: 6px;
    margin-top: ${baseTheme.spaces[3]}px;
  }
`;

export const LinksWrapper = styled.div`
  margin-top: ${baseTheme.spaces[10]}px;
  border-top: 1px solid #607d94;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 110px;
  @media (max-width: 1100px) {
    gap: 50px;
  }
  @media (max-width: 920px) {
    display: none;
  }
`;

export const SocialLinksWrapper = styled.div`
  margin-top: ${baseTheme.spaces[8]}px;
  width: ${({ theme }) => (theme.sizes.width = 285)}px;
`;

export const LogoWrapper = styled.img`
  width: ${({ theme }) => (theme.sizes.width = 141)}px;
  height: ${({ theme }) => (theme.sizes.height = 46)}px;
`;

export const LinksParagraph = styled.p`
  margin-top: ${baseTheme.spaces[4]}px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)};
  font-family: Manrope-Regular;
`;

export const IconsWrapper = styled.div`
  margin-top: ${baseTheme.spaces[4]}px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
`;

export const IconsLinks = styled.a``;

export const Icons = styled.img`
  width: ${({ theme }) => (theme.sizes.width = 25)}px;
  height: ${({ theme }) => (theme.sizes.height = 25)}px;
`;

export const QuickLinkWrapper = styled.div`
  margin-top: ${baseTheme.spaces[9]}px;
`;

export const QuickLinkTitle = styled.h5`
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 16)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 700)};
  font-family: Manrope-Regular;
`;

export const QuickLinks = styled.div`
  margin-top: ${baseTheme.spaces[5]}px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;
export const QuickLink = styled(NavLink)`
  margin-bottom: ${baseTheme.spaces[2]}px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)};
  font-family: Manrope-Regular;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.defaultWhite};
  }
`;
export const ServiceLinkWrapper = styled(QuickLinkWrapper)``;
export const ServiceLinkTitle = styled(QuickLinkTitle)``;
export const ServiceLinks = styled(QuickLinks)``;
export const ServiceLink = styled(QuickLink)``;
export const ContactInfoWrapper = styled(QuickLinkWrapper)``;
export const ContactInfoTitle = styled(QuickLinkTitle)``;
export const ContactInfoDescriptions = styled(QuickLinks)``;
export const ContactInfo = styled.p`
  margin-bottom: ${baseTheme.spaces[2]}px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)};
  font-family: Manrope-Regular;
`;
export const RightsWrapper = styled.div`
  margin-top: ${baseTheme.spaces[8]}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Rights = styled.div`
  border-top: 1px solid #607d94;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 634px;
  @media (max-width: 1100px) {
    gap: 200px;
  }
  @media (max-width: 700px) {
    gap: 30px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    border-top: none;
  }
`;
export const RightsParagraphWrapper = styled.div`
  margin-top: ${baseTheme.spaces[6]}px;
  padding-bottom: ${baseTheme.spaces[5]}px;
  @media (max-width: 500px) {
    order: 2;
    display: flex;
    margin-top: ${baseTheme.spaces[2]}px;
    padding-bottom: ${baseTheme.spaces[2]}px;
  }
`;
export const RightsParagraph = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)};
  font-family: Manrope-Regular;
`;

export const PrivacyTermsWrapper = styled(RightsParagraphWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 95px;
  @media (max-width: 700px) {
    gap: 30px;
  }
  @media (max-width: 500px) {
    order: 1;
    display: flex;
    border-bottom: 1px solid #607d94;
  }
`;
export const PrivacyPolicyParagraph = styled(RightsParagraph)``;
export const TermsOfUsParagraph = styled(RightsParagraph)``;
