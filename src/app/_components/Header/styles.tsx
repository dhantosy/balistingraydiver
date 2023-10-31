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

  @media screen and (max-width: 1024px) {
    background-color: ${theme.colors.white};
    color: ${theme.colors.blueMain};
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  }
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

  &.mobile {
    display: none;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {

    &.desktop {
      display: none;
    }

    &.mobile {
      display: block;
    }
  }
`;

export const Logo = styled.div<{ $active?: boolean; }>`
  display: flex;
  padding: ${props => props.$active ? '0' : '15px 0 0'};

  &.mobile {
    display: none;
    padding: 0;
  }

  @media screen and (max-width: 1024px) {

    &.desktop {
      display: none;
    }

    &.mobile {
      display: flex;
    }
  }
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

export const Icon = styled.div`
  width: 40px;
  padding: 17px 0 13px 10px;
  line-height: 1;
`;

export const MobileMenuContainer = styled.div<{ $isMobileMenuActive?: boolean; }>`
  display: ${props => props.$isMobileMenuActive ? 'block' : 'none'};
  position: fixed;
  top: 62px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  padding: 50px 20px;
  z-index: 9;
`;

export const TextHasDropdownMobile = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 20px 0;
  font-size: 20px;
`;

export const IconMobileArrow = styled.div`
  flex: 0 0 20px;
  display: flex;
`;

export const DropdownMobile = styled.div<{ $isMobileMenuItemExpand?: boolean; }>`
  display: ${props => props.$isMobileMenuItemExpand ? 'block' : 'none'};
`;
