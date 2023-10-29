'use client'

import Image from 'next/image'
import Link from 'next/link'
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
} from './styles'
import Container from '../Container'

import { useScrollPosition}  from '@/hooks/useScrollPosition';
import { useEffect, useState } from 'react'

export default function Header() {
  const scrollPosition = useScrollPosition();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      if (scrollPosition < 101) setActive(false);
    } else {
      if (scrollPosition >= 100) setActive(true);
    }

  }, [active, scrollPosition]);

  return (
    <HeaderNav $active={active}>
      <Container>
        <Navigation>
          <Link href='/'>
            <Logo $active={active}>
              {active ? (
                <Image
                  src="/assets/images/logo-black.png"
                  alt="Bali Stingray Diver"
                  sizes={`100vw, 33vw`}
                  priority
                  width='50'
                  height='50'
                />
              ) : (
                <Image
                  src="/assets/images/logo-white.png"
                  alt="Bali Stingray Diver"
                  sizes={`100vw, 33vw`}
                  priority
                  width='150'
                  height='150'
                />
              )}
            </Logo>
          </Link>
          <Menu>
            <MenuItem>
              <Text>
                <TextHasDropdown>
                  Fun Diving
                </TextHasDropdown>
                <Dropdown className='dropdown'>
                  <Link href='/'>
                    <DropdownText>
                      Nusa Penida
                    </DropdownText>
                  </Link>
                  <Link href='/'>
                    <DropdownText>
                      Padang Bai
                    </DropdownText>
                  </Link>
                  <Link href='/'>
                    <DropdownText>
                      Amed
                    </DropdownText>
                  </Link>
                  <Link href='/'>
                    <DropdownText>
                      Tulamben
                    </DropdownText>
                  </Link>
                  <Link href='/'>
                    <DropdownText>
                      Gili Tepekong
                    </DropdownText>
                  </Link>
                  <Link href='/'>
                    <DropdownText>
                      Menjangan
                    </DropdownText>
                  </Link>
                </Dropdown>
              </Text>
            </MenuItem>
            <MenuItem>
              <Text>
                <TextHasDropdown>
                  Dive Courses
                </TextHasDropdown>
                <Dropdown className='dropdown'>
                  <Link href='/'>
                    <DropdownText>
                      Open Water
                    </DropdownText>
                  </Link>
                  <Link href='/'>
                    <DropdownText>
                      Advance Open Water
                    </DropdownText>
                  </Link>
                  <Link href='/'>
                    <DropdownText>
                      Rescue Diver
                    </DropdownText>
                  </Link>
                  <Link href='/'>
                    <DropdownText>
                      Divemaster
                    </DropdownText>
                  </Link>
                </Dropdown>
              </Text>
            </MenuItem>
            <Text>
              <Link href='/'>
                Beyond Bali
              </Link>
            </Text>
            <Text>
              Contact Us
            </Text>
          </Menu>
        </Navigation>
      </Container>
    </HeaderNav>
  )
}
