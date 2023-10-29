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

export const Wrapper = styled.div`
  display: flex;
  gap: 60px;
  padding: 80px 0;
`;

export const WrapperLeft = styled.div`
  width: calc(67% - 30px);
`;

export const WrapperRight = styled.div`
  width: calc(33% - 30px);
`;

export const Widget = styled.div`
  position: sticky;
  top: 100px;
  border-radius: 15px;
  overflow: hidden;
`;
