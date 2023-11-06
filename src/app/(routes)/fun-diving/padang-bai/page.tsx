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
    image: '/assets/images/padang-bai/padang-bai-1.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-2.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-3.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-4.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-5.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-6.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-7.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-8.jpg',
    alt: 'padang bai diving',
  },
  {
    image: '/assets/images/padang-bai/padang-bai-9.jpg',
    alt: 'padang bai diving',
  },
]

export default function PadangBai() {
  return (
    <>
      <Hero
        title='Padang Bai'
        subtitle='Explore Padang Bai with Bali Stingray Divers'
        backgroundImage='/assets/images/padang-bai/padang-bai-5.jpg'
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
              <ContactWidget title='Discover the beauty of Padang Bai underwater world with us' />
            </Widget>
          </WrapperRight>
        </Wrapper>
      </Container>
    </>
  )
}
