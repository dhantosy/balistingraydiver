'use client'

import Container from '@/app/_components/Container'
import ContactWidget from '@/app/_components/ContactWidget'
import Hero from '@/app/_components/Hero'
import Gallery from '@/app/_components/Gallery'

import Intro from './(sections)/Intro'
import DetailInfo from './(sections)/DetailInfo'

import { Wrapper, WrapperLeft, WrapperRight, Widget } from './styles'

const data = [
  {
    image: '/assets/images/nusa-penida/nusa-penida-1.jpg',
    alt: 'nusa penida diving',
  },
  {
    image: '/assets/images/nusa-penida/nusa-penida-2.jpg',
    alt: 'nusa penida diving',
  },
  {
    image: '/assets/images/nusa-penida/nusa-penida-3.jpg',
    alt: 'nusa penida diving',
  },
  {
    image: '/assets/images/nusa-penida/nusa-penida-4.jpg',
    alt: 'nusa penida diving',
  },
  {
    image: '/assets/images/nusa-penida/nusa-penida-5.jpg',
    alt: 'nusa penida diving',
  },
  {
    image: '/assets/images/nusa-penida/nusa-penida-6.jpg',
    alt: 'nusa penida diving',
  },
  {
    image: '/assets/images/nusa-penida/nusa-penida-7.jpg',
    alt: 'nusa penida diving',
  },
]

export default function NusaPenida() {
  return (
    <>
      <Hero
        title='Nusa Penida'
        subtitle='Explore Nusa Penida with Bali Stingray Divers'
        backgroundImage='/assets/images/nusa-penida.jpg'
      />
      <Container>
        <Wrapper>
          <WrapperLeft>
            <Intro />
            <Gallery data={data} />
            <DetailInfo />
          </WrapperLeft>
          <WrapperRight>
            <Widget>
              <ContactWidget title='Discover the beauty of Nusa Penida underwater world with us' />
            </Widget>
          </WrapperRight>
        </Wrapper>
      </Container>
    </>
  )
}
