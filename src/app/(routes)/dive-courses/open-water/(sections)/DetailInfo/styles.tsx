import styled from 'styled-components'
import theme from '@/styles/theme';

export const SubTitle = styled.h3`
  margin: 60px 0 20px;
  font-size: 24px;
  font-weight: 600;
  max-width: 650px;
  line-height: 1.3;
`;

export const List = styled.ul`
  display: flex;
  padding-left: 0;
  gap: 15px;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {

    & {
      flex-direction: column;
    }
  }
`;

export const ListItem = styled.li`
  flex: 1 1 25%;
  display: flex;
  gap: 10px;
  list-style: none;
  align-items: baseline;
  line-height: 1.3;
`;

export const Icon = styled.div`
  width: 15px;
  position: relative;
  color: green;
  flex: 0 0 15px;
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

export const StrongTitle = styled.div`
  font-weight: 600;
`;

export const ScheduleTime = styled.div`
  font-weight: 500;
`;

export const ScheduleWrapper = styled.div`
  max-width: 100%;
`;

export const Pricing = styled.div`
  margin-bottom: 20px;
  flex: 1 1 25%;
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
  gap: 30px;
`;

export const PricingSection = styled.div`
  padding: 0 35px 20px;
  margin-top: 50px;
  background-color: ${theme.colors.blueMain};
  border-radius: 15px;
  overflow: hidden;
  color: ${theme.colors.cyan};

  & > .uppercase {
    text-transform: uppercase;
    font-weight: 600;
    margin-top: 40px;
  }
`;

export const Space = styled.div`
  margin-bottom: 15px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  gap: 30px;

  & > div {
    flex: 1;
  }
`;
