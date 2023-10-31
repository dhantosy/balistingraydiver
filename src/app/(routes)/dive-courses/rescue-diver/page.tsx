'use client'

import Container from '@/app/_components/Container'
import PriceWidget from '@/app/_components/PriceWidget'

import Hero from './(sections)/Hero'
import Intro from './(sections)/Intro'
import DetailInfo from './(sections)/DetailInfo'

import { Wrapper, WrapperLeft, WrapperRight, Widget } from './styles'

export default function OpenWater() {
  return (
    <>
      <Hero />
      <Container>
        <Wrapper>
          <WrapperLeft>
            <Intro />
            <DetailInfo />
          </WrapperLeft>
          <WrapperRight>
            <Widget>
              <PriceWidget
                title='EFR & Rescue Diver Certification'
                price='IDR 7.500.000'
                duration='2 Days'
                location='Bali Stingray Divers pool and Sanur Reef'
                sessions='Pool sessions and 3 Ocean Dives'
                depth=''
              />
            </Widget>
          </WrapperRight>
        </Wrapper>
      </Container>
    </>
  )
}
