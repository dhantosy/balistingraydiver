'use client'

import Container from '@/app/_components/Container'
import PriceWidget from '@/app/_components/PriceWidget'
import Hero from '@/app/_components/Hero'

import Intro from './(sections)/Intro'

import { Wrapper, WrapperLeft, WrapperRight, Widget } from './styles'

export default function OpenWater() {
  return (
    <>
      <Hero
        title='Divemaster'
        subtitle='Act as a Certified Assistant to PADI Instructors!'
        backgroundImage='/assets/images/courses/course-4.jpg'
      />
      <Container>
        <Wrapper>
          <WrapperLeft>
            <Intro />
          </WrapperLeft>
          <WrapperRight>
            <Widget>
              <PriceWidget
                title='Divemaster Certification'
                price='ASK US'
                duration=''
                location=''
                sessions=''
                depth=''
              />
            </Widget>
          </WrapperRight>
        </Wrapper>
      </Container>
    </>
  )
}
