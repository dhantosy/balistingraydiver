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
            {/* <DetailInfo /> */}
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
