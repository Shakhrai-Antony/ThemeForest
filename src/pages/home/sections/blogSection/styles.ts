import styled from 'styled-components';
import baseTheme from '@/theme/theme';
import { SwiperWrapper } from '@/pages/home/sections/testimonialsSection/styles';

export const BlogSectionWrapper = styled.section`
  margin-top: ${baseTheme.spaces[22]}px;
`;

export const BlogSwiperWrapper = styled(SwiperWrapper)`
  gap: 720px;
  @media (max-width: 1100px) {
    gap: 30px;
  }
`;

export const BlogWrapper = styled.div`
  margin-top: ${baseTheme.spaces[8]}px;
  gap: 30px;
`;
