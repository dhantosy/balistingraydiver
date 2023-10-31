import styled from 'styled-components'

export const Title = styled.h3`
  margin: 0 0 30px;
  font-size: 40px;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
  margin: 60px 0 25px;
  font-size: 24px;
  font-weight: 600;
  max-width: 600px;
  line-height: 1.3;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  gap: 15px;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
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
