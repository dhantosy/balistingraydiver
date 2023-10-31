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
                title='Open Water Diving Certification'
                price='IDR 6.900.000'
                duration='3 Days with E-Learning'
                location='Tulamben, Amed, or Padang Bai'
                sessions='Pool sessions and 4 Ocean Dives'
                depth='Maximum depth is up to 18m or equivalent to 60 ft'
              />
            </Widget>
          </WrapperRight>
        </Wrapper>
      </Container>
    </>
  )
}
