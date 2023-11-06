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
    image: '/assets/images/gili-tepekong/gili-tepekong-1.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-2.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-3.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-4.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-5.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-6.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-7.jpg',
    alt: 'gili tepekong diving',
  },
  {
    image: '/assets/images/gili-tepekong/gili-tepekong-8.jpg',
    alt: 'gili tepekong diving',
  },
]

export default function GiliTepekong() {
  return (
    <>
      <Hero
        title='Gili Tepekong / Mimpang'
        subtitle='Explore Gili Tepekong / Mimpang with Bali Stingray Divers'
        backgroundImage='/assets/images/gili-tepekong/gili-tepekong-4.jpg'
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
              <ContactWidget title='Discover the beauty of Gili Tepekong and Mimpang underwater world with us' />
            </Widget>
          </WrapperRight>
        </Wrapper>
      </Container>
    </>
  )
}
