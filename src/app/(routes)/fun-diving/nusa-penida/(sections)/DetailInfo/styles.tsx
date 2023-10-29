import styled from 'styled-components'
import theme from '@/styles/theme';

export const SubTitle = styled.h3`
  margin: 50px 0 25px;
  font-size: 24px;
  font-weight: 600;
`;

export const List = styled.ul`
  display: flex;
  padding-left: 0;
  gap: 15px;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  flex: 1 1 25%;
  display: flex;
  gap: 10px;
  list-style: none;
`;

export const Icon = styled.div`
  width: 15px;
  position: relative;
  color: green;
`;

export const Note = styled.div`
  margin-top: 20px;
  font-style: italic;
`;

export const Schedule = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: ${theme.colors.backgroundGrey};

  &:nth-child(odd) {
    background-color: ${theme.colors.white};
  }
`;

export const ScheduleTitle = styled.div`
  
`;

export const ScheduleTime = styled.div`
  font-weight: 500;
`;

export const ScheduleWrapper = styled.div`
  max-width: 600px;
`;

export const Pricing = styled.div`
  margin-bottom: 20px;
`;

export const PricingTitle = styled.div`
  margin-bottom: 5px;
  color: ${theme.colors.white};
`;

export const PricingTag = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.white};
`;

export const PricingWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
`;

export const PricingSection = styled.div`
  padding: 0 35px 25px;
  margin-top: 50px;
  background-color: ${theme.colors.blueMain};
  border-radius: 15px;
  overflow: hidden;
  color: ${theme.colors.cyan};

  & > .uppercase {
    text-transform: uppercase;
    font-weight: 600;
  }
`;

export const Space = styled.div`
  margin-bottom: 15px;
`;
