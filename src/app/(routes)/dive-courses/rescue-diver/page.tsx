'use client'

import Container from '@/app/_components/Container'
import PriceWidget from '@/app/_components/PriceWidget'
import Hero from '@/app/_components/Hero'

import Intro from './(sections)/Intro'
import DetailInfo from './(sections)/DetailInfo'

import { Wrapper, WrapperLeft, WrapperRight, Widget } from './styles'

export default function OpenWater() {
  return (
    <>
      <Hero
        title='EFR & Rescue Diver'
        subtitle='A step towards going Pro or becoming Master Scuba Diver Become a Respected and Safer Buddy with the PADI Rescue Diver Course.'
        backgroundImage='/assets/images/courses/course-1.jpg'
      />
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
                duration='3 Days'
                location='Bali Stingray Divers pool and Sanur Reef'
                sessions='Pool sessions and 2 Ocean Dives'
                depth=''
              />
            </Widget>
          </WrapperRight>
        </Wrapper>
      </Container>
    </>
  )
}
