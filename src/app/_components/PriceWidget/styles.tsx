import styled from 'styled-components'
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  background-color: ${theme.colors.backgroundGrey};
  color: ${theme.colors.blueMain};
  position: relative;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  padding: 0;
`;

export const ContentTop = styled.div`
  padding: 30px;
`;

export const Info = styled.div`
  & {
    display: flex;
    gap: 15px;
    align-items: flex-start;
    margin-bottom: 25px;
    font-weight: 600;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.price > div {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const InfoIcon = styled.span`
  width: 15px;
  position: relative;
  top: 4px;
  flex: 0 0 15px;
`;

export const Title = styled.h4`
  margin: 0 0 20px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
`;

export const BoxMore = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.blueMain};
  font-weight: 600;
  padding: 0 0 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxIcon = styled.div`
  width: 40px;
  padding: 15px 10px;
  background-color: ${theme.colors.cyan};
`;
