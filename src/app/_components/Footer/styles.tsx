import styled from 'styled-components'
import theme from '@/styles/theme';

export const FooterNav = styled.footer`
  padding: 40px 0;
  background-color: ${theme.colors.backgroundBlue};
  color: ${theme.colors.white};
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Menu = styled.menu`
  display: flex;
  align-items: baseline;
  gap: 100px;
`;

export const Logo = styled.div`
  display: flex;
`;

export const Gallery = styled.section`
  margin: 60px 0 80px;
`;

export const GalleryHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 40px;
`;

export const GalleryHeadingTitle = styled.h4`
  font-size: 32px;
  margin: 0;
`;

export const GalleryHeadingSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
`;

export const GalleryHeadingSocialArrow = styled.div`
  width: 12px;
`;

export const GalleryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const GalleryItem = styled.div`
  position: relative;
  flex: 1;
  padding-bottom: 15%;
`;

export const Copyright = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 100px;
`;

export const Address = styled.address`
  font-style: normal;
  font-size: 16px;
  max-width: 360px;
  line-height: 1.5;
`;

export const NavRight = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

export const Info = styled.div`
  & {
    display: flex;
    gap: 15px;
    align-items: baseline;
    margin-bottom: 20px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoIcon = styled.span`
  height: 18px;
  position: relative;
  top: 4px;
`;

export const MenuItem = styled.div`
  margin-bottom: 10px;
  font-weight: 400;
  opacity: 0.8;
`;

export const MenuTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 25px;
`;

export const CopyrightSocial = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const CopyrightSocialItem = styled.div`
  width: 30px;
  display: block;
`;


