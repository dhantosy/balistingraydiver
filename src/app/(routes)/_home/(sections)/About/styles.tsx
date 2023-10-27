import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 100px 0;
`;

export const Heading = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 20px 0 50px;
  line-height: 1.2;
  max-width: 800px;
  margin: 25px auto;
`;

export const BoxContainer = styled.div`
  margin: 60px 0 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const BoxWrapper = styled.div`
  flex: 1 1 30%;
  height: 100px;
  position: relative;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
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
  font-size: 20px;
  text-transform: uppercase;
  color: ${theme.colors.white};
  margin: 0;
`;

export const BoxSubtitle = styled.p`
  font-size: 16px;
  color: ${theme.colors.offwhite};
  margin: 15px 0 25px;
`;

export const BoxMore = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  color: ${theme.colors.cyan};
  font-weight: 600;
`;

