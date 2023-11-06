import styled from 'styled-components'
import theme from '@/styles/theme';

export const Section = styled.section`
  position: relative;
  height: 500px;
  overflow: hidden;
  background-image: url('/assets/images/menjangan/menjangan-9.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${theme.colors.blueMain};

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    left: 0;
    top: 0;
  }

  @media screen and (max-width: 1024px) {
    height: 350px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  height: 100%;

  @media screen and (max-width: 1024px) {
    justify-content: flex-end;
    align-items: flex-start;
    padding-bottom: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 900;
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin: 20px 0 0;
  max-width: 640px;
  text-align: center;
  line-height: 1.2;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    text-align: left;
  }
`;
