import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 60px;
  padding: 80px 0;

  @media only screen and (max-width: 1024px) {

    & {
      flex-direction: column-reverse;
      padding: 40px 0;
    }
  }
`;

export const WrapperLeft = styled.div`
  width: calc(67% - 30px);

  @media only screen and (max-width: 1024px) {

    & {
      width: 100%;
    }
  }
`;

export const WrapperRight = styled.div`
  width: calc(33% - 30px);

  @media only screen and (max-width: 1024px) {

    & {
      width: 100%;
    }
  }
`;

export const Widget = styled.div`
  position: sticky;
  top: 100px;
  border-radius: 15px;
  overflow: hidden;
`;
