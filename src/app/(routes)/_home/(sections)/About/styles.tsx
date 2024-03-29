import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Grid = styled.div`
  & {
    flex: 1;
    position: relative;
    overflow: hidden;
    background-color: ${theme.colors.blueMain};
  }

  &:first-child {
    color: ${theme.colors.white};
  }
`;

export const GridContent = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 120px;
  padding: 60px 0 60px 20px;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 50px 20px 40px;
    margin: 0;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 20px;
  color: ${theme.colors.cyan};

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
`;

export const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  background-color: ${theme.colors.blueMain};

  @media screen and (max-width: 1024px) {
    height: 280px;
    position: static;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    left: 0;
    top: 0;
  }
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 20px 0 50px;
  line-height: 1.2;
  max-width: 800px;
  margin: 25px auto;
`;

export const Video = styled.video`
  width: auto;
  position: absolute;
  height: auto;
`;

export const Text = styled.div`
  opacity: 0.9;
`;

export const ImageWrapper = styled.div`
  display: inline-flex;
  position: absolute;
  z-index: 2;
  border-radius: 10px;
  overflow: hidden;
  left: 50%;
  top: 50%;
  margin-top: -160px;
  margin-left: -125px;

  @media screen and (max-width: 1024px) {
    max-width: 150px;
    margin-top: 0;
    top: 40px;
    margin-left: -75px;
  }
`;

