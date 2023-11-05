import styled from 'styled-components'
import theme from '@/styles/theme';

export const Section = styled.section`
  position: relative;
  height: 500px;
  overflow: hidden;
  background-image: url('/assets/images/beyond-bali/banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    height: 350px;
  }
`;

export const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  align-items: center;
  justify-content: flex-end;
  color: ${theme.colors.white};
  height: 100%;
  padding-bottom: 40px;

  @media screen and (max-width: 1024px) {
    align-items: flex-start;
    padding-bottom: 20px;
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

export const ContentTitle = styled.h3`
  font-size: 32px;
  font-weight: 900;
  margin: 80px 0 20px;

  @media screen and (max-width: 1024px) {
    margin: 40px 0 20px;
  }
`;

export const BoxContainer = styled.div`
  margin: 40px 0 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: 1024px) {
    overflow-x: scroll;
    justify-content: flex-start;
    gap: 30px;
    flex-wrap: nowrap;
    margin: 30px 0 80px;
    padding: 0 20px 30px;
  }
`;

export const BoxContainerOuter = styled.div`
  max-width: 1240px;
  padding: 0 20px;
  margin: auto;

  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

export const BoxWrapper = styled.div`
  flex: 1 1 15%;
  position: relative;
  height: 250px;
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

export const BoxTitle = styled.h3`
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
