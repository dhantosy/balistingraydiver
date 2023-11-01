import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.div`
  background-color: ${theme.colors.white};
  overflow: hidden;
  margin: 60px 0;

  @media screen and (max-width: 1024px) {
    margin: 60px 0 40px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 50%;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
`;

export const BoxContainer = styled.div`
  overflow: hidden;
  position: relative;
`;
