'use client'

import Container from '@/app/_components/Container'
import ContactWidget from '@/app/_components/ContactWidget'
import Hero from '@/app/_components/Hero'
import Gallery from '@/app/_components/Gallery'

import Intro from './(sections)/Intro'
import DetailInfo from './(sections)/DetailInfo'


const data = [
  {
    image: '/assets/images/tulamben/tulamben-1.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-2.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-3.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-4.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-5.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-6.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-8.jpg',
    alt: 'tulamben diving',
  },
  {
    image: '/assets/images/tulamben/tulamben-9.jpg',
    alt: 'tulamben diving',
  },
]

import { Wrapper, WrapperLeft, WrapperRight, Widget } from './styles'

export default function Tulamben() {
  return (
    <>
      <Hero
        title='Tulamben'
        subtitle='Explore Tulamben with Bali Stingray Divers'
        backgroundImage='/assets/images/tulamben/tulamben-6.jpg'
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
              <ContactWidget title='Discover the beauty of Tulamben underwater world with us' />
            </Widget>
          </WrapperRight>
        </Wrapper>
      </Container>
    </>
  )
}
