import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  height: ${({ theme }) => (theme.sizes.height = 126)}px;
  background: ${({ theme }) => theme.colors.headerBackground};
  @media (max-width: 560px) {
    background: ${({ theme }) => theme.colors.defaultWhite};
  }
`;
