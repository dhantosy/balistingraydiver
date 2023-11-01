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

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 50px;

  }
`;

export const Menu = styled.menu`
  display: flex;
  align-items: baseline;
  gap: 100px;

  @media screen and (max-width: 1024px) {
    gap: 40px;
  }
`;

export const Logo = styled.div`
  display: flex;
`;

export const Gallery = styled.section`
  margin: 60px 0 80px;

  @media screen and (max-width: 1024px) {
    margin: 20px 0 40px;
  }
`;

export const GalleryHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 40px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 20px;
  }
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
  color: ${theme.colors.cyan};

  &:hover {
    & > .arrow {
      left: 5px;
    }
  }
`;

export const GalleryHeadingSocialArrow = styled.div`
  width: 12px;
  position: relative;
  left: 0px;
  transition: left 0.2s ease-in-out;
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

  @media screen and (max-width: 1024px) {
    padding-bottom: 20%;
    flex: 1 1 30%;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 100px;

  @media screen and (max-width: 1024px) {
    text-align: left;
  }
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

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
  }
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
  width: 18px;
  position: relative;
  top: 4px;
  flex: 0 0 18px;
`;

export const MenuItem = styled.div`
  margin-bottom: 10px;
  font-weight: 400;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
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

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const CopyrightSocialItem = styled.div`
  width: 30px;
  display: block;
`;


