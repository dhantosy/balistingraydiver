import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 100px 0;
`;

export const Heading = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 800px;
  margin: 25px auto;
`;

export const BoxContainer = styled.div`
  margin: 60px 0 0;
  display: flex;
  flex-wrap: wrap;
  align-items: normal;
  justify-content: center;
  gap: 30px;
`;

export const BoxWrapper = styled.div`
  flex: 1 1 20%;
  position: relative;
  background-color: #f2f2f4;
  border-radius: 10px;
  overflow: hidden;
`;

export const BoxContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoxContentTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 0;
  padding: 25px;
  text-align: center;
  min-height: 300px;
`;

export const BoxTitle = styled.h4`
  font-size: 20px;
  text-transform: uppercase;
  color: ${theme.colors.blueMain};
  line-height: 1.2;
  font-weight: 900;
  margin: 30px 0 0;
`;

export const BoxSubtitle = styled.p`
  font-size: 16px;
  color: ${theme.colors.blueSecondary};
  margin: 15px 0 0;
`;

export const BoxMore = styled.div`
  text-transform: uppercase;
  font-size: 16px;
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

