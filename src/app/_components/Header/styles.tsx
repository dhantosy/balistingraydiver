import styled from 'styled-components'
import theme from '@/styles/theme';

export const HeaderNav = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  padding: 20px 0;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.menu`
  display: flex;
  align-items: center;
  gap: 32px;
  color: ${theme.colors.white};
`;

export const Logo = styled.div`
  display: flex;
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
