'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

import {
  Navigation,
  Text,
  Logo,
  HeaderNav,
  Menu,
  MenuItem,
  Dropdown,
  DropdownText,
  TextHasDropdown,
  Icon,
  MobileMenuContainer,
  LogoName,
} from './styles'
import Container from '../Container'
import { useScrollPosition}  from '@/hooks/useScrollPosition';
import MobileMenuItem from './MobileMenuItem'

const headerMenus = [
  {
    parent: 'Fun Diving',
    children: [
      {
        title: 'Nusa Penida',
        link: '/fun-diving/nusa-penida'
      },
      {
        title: 'Padang Bai',
        link: '/fun-diving/padang-bai'
      },
      {
        title: 'Amed',
        link: '/fun-diving/amed'
      },
      {
        title: 'Tulamben',
        link: '/fun-diving/tulamben'
      },
      {
        title: 'Gili Tepekong',
        link: '/fun-diving/gili-tepekong'
      },
      {
        title: 'Menjangan',
        link: '/fun-diving/menjangan'
      } 
    ]
  },
  {
    parent: 'Dive Courses',
    children: [
      {
        title: 'Open Water',
        link: '/dive-courses/open-water'
      },
      {
        title: 'Advance Open Water',
        link: '/dive-courses/advance-open-water'
      },
      {
        title: 'Rescue Diver',
        link: '/dive-courses/rescue-diver'
      },
      {
        title: 'Divemaster',
        link: '/dive-courses/divemaster'
      },
    ]
  },
  {
    parent: 'Beyond Bali',
    linkParent: '/beyond-bali'
  }
];

export default function Header() {
  const pathname = usePathname();
  const scrollPosition = useScrollPosition();
  const [active, setActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const handleMobileMenuClick = useCallback(() => {
    setMobileMenuActive(!mobileMenuActive);
  }, [mobileMenuActive]);

  useEffect(() => {
    setMobileMenuActive(false);
  }, [pathname])

  useEffect(() => {

    if (active) {
      if (scrollPosition < 101) setActive(false);
    } else {
      if (scrollPosition >= 100) setActive(true);
    }
  }, [active, scrollPosition]);

  function HeaderItemMenuDesktop() {
    return (
      <Menu>
        {headerMenus.map(({ parent, children, linkParent }) => {

          return (
            <React.Fragment key={parent}>
              <MenuItem className='desktop'>
                <Text>
                  {children && (
                    <>
                      <TextHasDropdown>{parent}</TextHasDropdown>
                      <Dropdown className='dropdown'>
                        {children.map(({ title, link }) => {
                          return (
                            <Link href={link} key={title}>
                              <DropdownText>
                                {title}
                              </DropdownText>
                            </Link>
                          )
                        })}
                      </Dropdown>
                    </>
                  )}
                  {linkParent && (
                    <Link href={linkParent}>
                      {parent}
                    </Link>
                  )}
                </Text>
              </MenuItem>
            </React.Fragment>
          )
        })}
      </Menu>
    )
  };

  function HeaderItemMenuMobile() {

    return (
      <div>
        {headerMenus.map(({ parent, children, linkParent }) => {

          return (
            <React.Fragment key={parent}>
              <MobileMenuItem
                parent={parent}
                hasChildren={children}
                linkParent={linkParent}
              />
            </React.Fragment>
          )
        })}
      </div>
    )
  };

  return (
    <HeaderNav $active={active}>
      <Container>
        <Navigation>
          <Link href='/'>
            <Logo $active={active} className='desktop'>
              {active ? (
                <>
                  <Image
                    src="/assets/images/logo-black.png"
                    alt="Bali Stingray Diver"
                    sizes={`100vw, 33vw`}
                    priority
                    width='50'
                    height='50'
                  />
                  <LogoName>Bali Stingray Divers</LogoName>
                </>
              ) : (
                <>
                  <Image
                    src="/assets/images/logo-white.png"
                    alt="Bali Stingray Diver"
                    sizes={`100vw, 33vw`}
                    priority
                    width='150'
                    height='150'
                  />
                </>
              )}
            </Logo>
            <Logo className='mobile'>
              <Image
                src="/assets/images/logo-black.png"
                alt="Bali Stingray Diver"
                sizes={`100vw, 33vw`}
                priority
                width='50'
                height='50'
              />
              <LogoName>Bali Stingray Divers</LogoName>
            </Logo>
          </Link>
          <Menu>
            {HeaderItemMenuDesktop()}
            <MenuItem className='mobile'>
              <Text className='mobile'>
                <Icon onClick={handleMobileMenuClick}>
                  <FaBars />
                </Icon>
              </Text>
            </MenuItem>
            <MobileMenuContainer $isMobileMenuActive={mobileMenuActive}>
              {HeaderItemMenuMobile()}
            </MobileMenuContainer>
          </Menu>
        </Navigation>
      </Container>
    </HeaderNav>
  )
}
