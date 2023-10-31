'use client'

import Container from '@/app/_components/Container'
import { Section, Content, Title, Subtitle } from './styles'

export default function Hero() {
  return (
    <Section id='banner'>
      <Container>
        <Content>
          <Title>Divemaster</Title>
          <Subtitle>Act as a Certified Assistant to PADI Instructors!</Subtitle>
        </Content>
      </Container>
    </Section>
  )
}
