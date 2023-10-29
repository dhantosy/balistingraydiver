import styled from 'styled-components'
import theme from '@/styles/theme';

export const Section = styled.section`
  position: relative;
  height: 500px;
  overflow: hidden;
  background-image: url('/assets/images/nusa-penida.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 900;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin: 20px 0 0;
  max-width: 640px;
  text-align: center;
  line-height: 1.2;
`;
