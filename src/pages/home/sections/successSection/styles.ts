import styled from 'styled-components';
import baseTheme from '@/theme/theme';

export const SuccessSectionWrapper = styled.section``;

export const SuccessTitleWrapper = styled.div`
  margin: ${baseTheme.spaces[17]}px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    margin-top: ${baseTheme.spaces[8]}px;
  }
`;

export const SuccessTitle = styled.h2`
  color: ${({ theme }) => theme.colors.defaultBlack};
  font-weight: ${({ theme }) => (theme.sizes.weight = 800)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 38)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 56)}px;
  font-family: Manrope-Regular;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const NumbersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 31px;
`;

export const ProjectExecuteWrapper = styled.div`
  margin-top: ${baseTheme.spaces[4]}px;
`;

export const ProjectExecuteNumber = styled.p`
  font-weight: ${({ theme }) => (theme.sizes.weight = 800)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 50)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 112)}px;
  font-family: Manrope-Regular;
  color: ${({ theme }) => theme.colors.primaryBlue};
  @media (max-width: 500px) {
    font-size: ${({ theme }) => (theme.sizes.fontSize = 30)}px;
    line-height: ${({ theme }) => (theme.sizes.lineHeight = 70)}px;
    text-align: center;
  }
`;

export const ProjectExecuteDescription = styled.p`
  margin-top: ${-baseTheme.spaces[4]}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 16)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 28)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)}px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-family: Manrope-Regular;
  @media (max-width: 500px) {
    margin-top: ${baseTheme.spaces[1]}px;
    text-align: center;
    font-size: ${({ theme }) => (theme.sizes.fontSize = 14)}px;
    line-height: ${({ theme }) => (theme.sizes.lineHeight = 24)}px;
  }
`;

export const SatisfiedCustomersWrapper = styled(ProjectExecuteWrapper)``;
export const SatisfiedCustomersNumber = styled(ProjectExecuteNumber)``;
export const SatisfiedCustomersDescription = styled(
  ProjectExecuteDescription,
)``;
export const DataManagementWrapper = styled(ProjectExecuteWrapper)``;
export const DataManagementNumber = styled(ProjectExecuteNumber)``;
export const DataManagementDescription = styled(ProjectExecuteDescription)``;

export const SuccessText = styled.div`
  margin-top: ${baseTheme.spaces[8]}px;
  width: ${({ theme }) => (theme.sizes.width = 540)}px;
  font-weight: ${({ theme }) => (theme.sizes.weight = 400)}px;
  line-height: ${({ theme }) => (theme.sizes.lineHeight = 33)}px;
  font-size: ${({ theme }) => (theme.sizes.fontSize = 20)}px;
  font-family: Manrope-Regular;
  color: ${({ theme }) => theme.colors.darkGrey};
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SuccessTextMini = styled(SuccessText)`
  display: none;
  @media (max-width: 1000px) {
    display: block;
    width: 100%;
    text-align: center;
  }
`;

export const PartnersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1110px;
  flex-wrap: wrap;
  margin: ${baseTheme.spaces[9]}px auto 0;
  div {
    width: ${({ theme }) => (theme.sizes.width = 185)}px;
    height: ${({ theme }) => (theme.sizes.height = 132)}px;
  }

  @media (max-width: 1100px) {
    width: auto;
    margin-top: ${baseTheme.spaces[4]}px;
  }
`;
