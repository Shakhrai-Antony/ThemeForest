import styled from 'styled-components';
import baseTheme from '@/theme/theme';
import footer_accordion from '@/assets/images/footer_accordion.png';
import { ContactInfo, QuickLink } from '@/components/Footer/styles';

export const LinksWrapperMobile = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 920px) {
    display: flex;
  }
`;
export const QuickLinkWrapperMobile = styled.div`
  border-bottom: 1px solid #607d94;
  margin-top: ${baseTheme.spaces[5]}px;
  padding-bottom: ${baseTheme.spaces[3]}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => (theme.sizes.width = 328)}px;
`;

export const QuickLinkTitleMobile = styled.h5`
  color: ${({ theme }) => theme.colors.defaultWhite};
  font-size: ${({ theme }) => (theme.sizes.fontSize = 16)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 700)};
  font-family: Manrope-Regular;
`;
export const QuickLinkIconMobile = styled.button`
  width: ${({ theme }) => (theme.sizes.width = 13)}px;
  height: ${({ theme }) => (theme.sizes.height = 7)}px;
  background-image: url(${footer_accordion});
  background-size: 12px 7px;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
export const ServiceLinkWrapperMobile = styled(QuickLinkWrapperMobile)``;
export const ServiceLinkTitleMobile = styled(QuickLinkTitleMobile)``;
export const ServiceLinkIconMobile = styled(QuickLinkIconMobile)``;
export const ContactInfoMobile = styled.div``;
export const ContactInfoWrapperMobile = styled(QuickLinkWrapperMobile)``;
export const ContactInfoTitleMobile = styled(QuickLinkTitleMobile)``;
export const ContactInfoIconMobile = styled(QuickLinkIconMobile)``;
export const ContactInfoMobileAdress = styled.div`
  display: ${({ id }) => (id === 3 ? 'block' : 'none')};
  p:first-child {
    margin-top: ${baseTheme.spaces[3]}px;
  }
`;
export const ContactInfoParagraphMobile = styled(ContactInfo)`
  color: ${({ theme }) => theme.colors.defaultWhite};
`;
export const ServiceLinkMobile = styled(ContactInfoMobile)``;
export const ServiceLinksMobileWrapper = styled.div`
  display: ${({ id }) => (id === 2 ? 'flex' : 'none')};
  justify-content: start;
  flex-direction: column;
  align-items: start;
  a:first-child {
    margin-top: ${baseTheme.spaces[3]}px;
  }
  a:last-child {
    margin-bottom: ${baseTheme.spaces[0]}px;
  }
`;
export const ServiceLinksMobile = styled(QuickLink)`
  color: ${({ theme }) => theme.colors.defaultWhite};
  &:hover {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
export const QuickLinkMobile = styled(ContactInfoMobile)``;
export const QuickLinksMobileWrapper = styled(ServiceLinksMobileWrapper)`
  display: ${({ id }) => (id === 1 ? 'flex' : 'none')};
`;
export const QuickLinksMobile = styled(QuickLink)`
  color: ${({ theme }) => theme.colors.defaultWhite};
  &:hover {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
export const SocialLinksMobileWrapper = styled.div`
  display: none;
  margin: ${baseTheme.spaces[5]}px auto 0;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => (theme.sizes.width = 328)}px;
  @media (max-width: 920px) {
    display: flex;
  }
`;
export const SocialLinksMobileTitle = styled(QuickLinkTitleMobile)``;
