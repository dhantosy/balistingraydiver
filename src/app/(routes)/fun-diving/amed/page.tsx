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
    image: '/assets/images/amed/amed-1.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-2.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-3.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-4.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-5.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-6.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-7.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-8.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-9.jpg',
    alt: 'amed diving',
  },
  {
    image: '/assets/images/amed/amed-10.jpg',
    alt: 'amed diving',
  },
]

export default function Amed() {
  return (
    <>
      <Hero
        title='Amed'
        subtitle='Explore Amed with Bali Stingray Divers'
        backgroundImage='/assets/images/amed/amed-3.jpg'
      />
      <Container>
        <Wrapper>
          <WrapperLeft>
            <Intro />
            <Gallery data={data}/>
            <DetailInfo />
          </WrapperLeft>
          <WrapperRight>
            <Widget>
              <ContactWidget title='Discover the beauty of Amed underwater world with us' />
            </Widget>
          </WrapperRight>
        </Wrapper>
      </Container>
    </>
  )
}
