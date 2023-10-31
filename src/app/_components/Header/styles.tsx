import styled from 'styled-components'
import theme from '@/styles/theme';

export const HeaderNav = styled.header<{ $active?: boolean; }>`
  position: fixed;
  background-color: ${props => props.$active ? theme.colors.white : 'transparent'};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  color: ${props => props.$active ? theme.colors.blueMain : theme.colors.white};
  box-shadow: ${props => props.$active ? '0 5px 5px rgba(0,0,0,0.1)' : 'none'};
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.menu`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const MenuItem = styled.div`
  position: relative;
`;

export const Logo = styled.div<{ $active?: boolean; }>`
  display: flex;
  padding: ${props => props.$active ? '0' : '15px 0 0'};
`;

export const Text = styled.div`

  & {
    font-size: 18px;
    font-weight: 600;
  }

  &:hover > .dropdown {
    opacity: 1;
    visibility: visible;
    top: 65px;
  }
`;

export const TextHasDropdown = styled.div`
  padding: 20px 0;
`;

export const Dropdown = styled.div`
  position: absolute;
  background: ${theme.colors.white};
  top: 50px;
  left: 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 240px;
  color: ${theme.colors.blueMain};
  padding: 10px 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
`;

export const DropdownText = styled.div`
  padding: 10px 25px;
  opacity: 0.9;
  font-weight: 500;
  transition: font-weight 0.1s ease-in-out;

  &:hover {
    font-weight: 700;
  }
`;
