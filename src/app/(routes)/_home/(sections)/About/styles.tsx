import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  display: flex;
`;

export const Grid = styled.div`
  & {
    flex: 1;
    position: relative;
    overflow: hidden;
  }

  &:first-child {
    background-color: ${theme.colors.blueMain};
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
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 20px;
`;

export const VideoWrapper = styled.div`
  & {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    overflow: hidden;
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
`;

