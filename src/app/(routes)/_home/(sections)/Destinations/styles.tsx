import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 100px 0;
  width: 100%;
  max-width: 1240px;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;

  @media screen and (max-width: 1024px) {
    padding: 40px 0;
  }
`;

export const Heading = styled.div`
  text-align: center;
  padding: 0 20px;

  @media screen and (max-width: 1024px) {
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 800px;
  margin: 25px auto;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin: 25px 0;
  }
`;

export const BoxContainer = styled.div`
  margin: 60px 0 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media screen and (max-width: 1024px) {
    overflow-x: scroll;
    justify-content: flex-start;
    gap: 30px;
    flex-wrap: nowrap;
    margin: 30px 0 0;
    padding: 0 20px 30px;
  }
`;

export const BoxContainerOuter = styled.div`
`;

export const BoxWrapper = styled.div`
  flex: 1 1 30%;
  position: relative;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    flex: 0 0 230px;
    height: 320px;
  }
`;

export const BoxContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const BoxTitle = styled.h4`
  font-size: 24px;
  text-transform: uppercase;
  color: ${theme.colors.white};
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const BoxSubtitle = styled.p`
  font-size: 18px;
  color: ${theme.colors.white};
  opacity: 0.8;
  margin: 15px 0 25px;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const BoxMore = styled.div`
  text-transform: uppercase;
  font-size: 16px;
  color: ${theme.colors.cyan};
  font-weight: 700;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const BoxArrow = styled.div`
  width: 12px;
`;

export const Anchor = styled.div`
  position: relative;
  top: -90px;
`;

