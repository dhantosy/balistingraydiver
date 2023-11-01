'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FaArrowRight,
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookSquare
} from 'react-icons/fa'
import {
  Navigation,
  Gallery,
  GalleryHeading,
  GalleryHeadingTitle,
  GalleryHeadingSocial,
  GalleryHeadingSocialArrow,
  GalleryContent,
  GalleryItem,
  Logo,
  FooterNav,
  NavRight,
  Menu,
  MenuTitle,
  MenuItem,
  Address,
  Copyright,
  Info,
  InfoIcon,
  CopyrightSocial,
  CopyrightSocialItem
} from './styles'
import Container from '../Container'

const photos = [
  '/assets/images/gallery-2.jpg',
  '/assets/images/gallery-1.jpg',
  '/assets/images/gallery-3.jpg',
  '/assets/images/gallery-4.jpg',
  '/assets/images/gallery-5.jpg',
  '/assets/images/gallery-6.jpg',
];

const menu = [
  {
    title: 'Fun Diving',
    children: [
      {
        menuTitle: 'Nusa Penida',
        link: '/fun-diving/nusa-penida',
      },
      {
        menuTitle: 'Padang Bai',
        link: '/fun-diving/padang-bai',
      },
      {
        menuTitle: 'Amed',
        link: '/fun-diving/amed',
      },
      {
        menuTitle: 'Tulamben',
        link: '/fun-diving/tulamben',
      },
      {
        menuTitle: 'Gili Tepekong',
        link: '/fun-diving/gili-tepekong',
      },
      {
        menuTitle: 'Menjangan',
        link: '/fun-diving/menjangan',
      },
    ]
  },
  {
    title: 'Dive Courses',
    children: [
      {
        menuTitle: 'Open Water',
        link: '/dive-courses/open-water',
      },
      {
        menuTitle: 'Advance Open Water',
        link: '/dive-courses/advance-open-water',
      },
      {
        menuTitle: 'Rescue Diver',
        link: '/dive-courses/rescue-diver',
      },
      {
        menuTitle: 'Divemaster',
        link: '/dive-courses/divemaster',
      },
    ]
  },
];

export default function Footer() {
  return (
    <FooterNav>
      <Gallery>
        <Container>
          <GalleryHeading>
            <GalleryHeadingTitle>Some of our shots</GalleryHeadingTitle>
            <a href='https://www.instagram.com/balistingray/' target='_blank'>
              <GalleryHeadingSocial>
                <h4>More on Instagram</h4>
                <GalleryHeadingSocialArrow className='arrow'>
                  <FaArrowRight />
                </GalleryHeadingSocialArrow>
              </GalleryHeadingSocial>
            </a>
          </GalleryHeading>
        </Container>
        <GalleryContent>
          {photos.map((photo, i) => {
            return (
              <GalleryItem key={i}>
                <Image
                  src={photo}
                  alt={photo}
                  sizes={`100vw, 33vw`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </GalleryItem>
            )
          })}
        </GalleryContent>
      </Gallery>
      <Container>
        <Navigation>
          <NavRight>
            <Link href='/'>
              <Logo>
                <Image
                  src='/assets/images/logo-white.png'
                  alt='Bali Stingray Diver'
                  sizes={`100vw, 33vw`}
                  width='150'
                  height='150'
                />
              </Logo>
            </Link>
            <div>
              <Info>
                <InfoIcon><FaMapMarkerAlt /></InfoIcon>
                <Address>
                  Gg. V No.8/9, Sanur Kauh, Denpasar Selatan Kota Denpasar, Bali 80227
                </Address>
              </Info>
              <Info>
                <InfoIcon><FaRegEnvelope /></InfoIcon>
                <a href='mailto:infobalistingray@gmail.com'>infobalistingray@gmail.com</a>
              </Info>
              <Info>
                <InfoIcon><FaPhoneAlt /></InfoIcon>
                <a href='tel:+6281246529722'>+62 812 4652 9722</a>
              </Info>
            </div>
          </NavRight>
          <Menu>
            {menu.map(({ title, children }) => {
              return (
                <div key={title}>
                  <MenuTitle>{title}</MenuTitle>
                  {children.map(({ menuTitle, link }) => {
                    return (
                      <MenuItem key={menuTitle}>
                        <Link href={link}>
                          {menuTitle}
                        </Link>
                      </MenuItem>
                    )
                  })}
                </div>
              )
            })}
          </Menu>
        </Navigation>
        <Copyright>
          <CopyrightSocial>
            <a href='https://www.instagram.com/balistingray/' target='_blank' aria-label='Bali Stingray Divers Instagram'>
              <CopyrightSocialItem>
                <FaInstagram />
              </CopyrightSocialItem>
            </a>
            <a href='https://www.facebook.com/stingraydiversbali' target='_blank' aria-label='Bali Stingray Divers Facebook'>
              <CopyrightSocialItem>
                <FaFacebookSquare />
              </CopyrightSocialItem>
            </a>
          </CopyrightSocial>
          Bali Stingray Divers © 2023. All Rights Reserved.
        </Copyright>
      </Container>
    </FooterNav>
  )
}
