import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 100px 0;
  background-color: ${theme.colors.backgroundGrey};
`;

export const Heading = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 800px;
  margin: 25px auto;
`;

export const BoxContainer = styled.div`
  margin: 60px 0 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

