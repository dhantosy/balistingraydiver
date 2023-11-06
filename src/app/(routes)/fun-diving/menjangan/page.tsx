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
    image: '/assets/images/menjangan/menjangan-1.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-2.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-3.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-4.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-5.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-6.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-7.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-8.jpg',
    alt: 'menjangan diving',
  },
  {
    image: '/assets/images/menjangan/menjangan-9.jpg',
    alt: 'menjangan diving',
  },
]

export default function Menjangan() {
  return (
    <>
      <Hero
        title='Menjangan'
        subtitle='Explore Menjangan with Bali Stingray Divers'
        backgroundImage='/assets/images/menjangan/menjangan-9.jpg'
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
              <ContactWidget title='Discover the beauty of Menjangan underwater world with us' />
            </Widget>
          </WrapperRight>
        </Wrapper>
      </Container>
    </>
  )
}
