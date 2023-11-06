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
        title='Advance Open Water Dive'
        subtitle='Dive up to 30m deep and helps build confidence to advance diving skills through various adventure dives.'
        backgroundImage='/assets/images/courses/course-3.jpg'
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
                title='Advance Open Water Diving Certification'
                price='IDR 6.150.000'
                duration='2 Days with E-Learning'
                location='Tulamben, Amed, Padang Bai, or Nusa Penida'
                sessions='5 amazing dives'
                depth='Maximum depth is up to 30m'
              />
            </Widget>
          </WrapperRight>
        </Wrapper>
      </Container>
    </>
  )
}
