'use client'

import Container from '@/app/_components/Container'
import ContactWidget from '@/app/_components/ContactWidget'

import Hero from './(sections)/Hero'
import Intro from './(sections)/Intro'
import Gallery from './(sections)/Gallery'
import DetailInfo from './(sections)/DetailInfo'

import { Wrapper, WrapperLeft, WrapperRight, Widget } from './styles'

export default function Padangbai() {
  return (
    <>
      <Hero />
      <Container>
        <Wrapper>
          <WrapperLeft>
            <Intro />
            <Gallery />
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
