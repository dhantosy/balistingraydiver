'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation, Text, Logo, HeaderNav, Menu } from './styles'
import Container from '../Container'

export default function Header() {
  return (
    <HeaderNav>
      <Container>
        <Navigation>
          <Link href='/'>
            <Logo>
              <Image
                src="/assets/images/logo-white.png"
                alt="Bali Stingray Diver"
                sizes={`100vw, 33vw`}
                priority
                width='150'
                height='150'
              />
            </Logo>
          </Link>
          <Menu>
            <Link href='/fun-diving'>
              <Text>
                Fun Diving
              </Text>
            </Link>
            <Text>
              <Link href='/dive-courses'>
                Dive Courses
              </Link>
            </Text>
            <Text>
              <Link href='/'>
                Beyond Bali
              </Link>
            </Text>
            <Text>
              <Link href='/'>
                Contact Us
              </Link>
            </Text>
          </Menu>
        </Navigation>
      </Container>
    </HeaderNav>
  )
}
