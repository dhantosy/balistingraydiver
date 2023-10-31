import styled from 'styled-components'
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  display: block;
  background-image: url('/assets/images/gallery-3.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${theme.colors.white};
  position: relative;
  width: 100%;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    left: 0;
    top: 0;
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
  padding: 100px 40px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    padding: 40px;
    text-align: left;
    align-items: flex-start;
  }
`;

export const Info = styled.div`
  & {
    display: flex;
    gap: 15px;
    align-items: baseline;
    margin-bottom: 20px;
    font-weight: 600;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoIcon = styled.span`
  width: 18px;
  position: relative;
  top: 4px;
`;

export const Title = styled.h4`
  margin: 0 0 40px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
`;
