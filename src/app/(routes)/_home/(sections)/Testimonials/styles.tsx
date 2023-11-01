import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 100px 0 60px;
  background-color: ${theme.colors.backgroundGrey};

  @media screen and (max-width: 1024px) {
    padding: 40px 0;
  }
`;

export const Heading = styled.div`
  text-align: center;

  @media screen and (max-width: 1024px) {
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
`;

export const Name = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  position: relative;
  display: inline-block;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 1.4;
  margin: 25px 0 0;
`;

export const Source = styled.p`
  font-size: 14px;
  font-style: italic;
`;

export const Rating = styled.div`
  display: flex;
  gap: 3px;
  width: 130px;
  margin: 20px 0 10px;
  color: ${theme.colors.yellow};
`;

export const Quote = styled.div`
  position: absolute;
  width: 30px;
  color: #cfcfcf;
  right: -0;
  top: 0;
`;

export const BoxContainer = styled.div`
  margin: 60px 0 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

