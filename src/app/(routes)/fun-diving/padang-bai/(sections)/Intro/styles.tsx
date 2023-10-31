import styled from 'styled-components'

export const Title = styled.h3`
  margin: 0 0 30px;
  font-size: 40px;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h3`
  margin: 60px 0 25px;
  font-size: 24px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    margin: 40px 0 25px;
  }
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

  @media screen and (max-width: 1024px) {
    flex: 1 1 40%;
  }
`;

export const Icon = styled.div`
  width: 15px;
  position: relative;
`;
