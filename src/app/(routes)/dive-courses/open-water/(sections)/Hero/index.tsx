'use client'

import Container from '@/app/_components/Container'
import { Section, Content, Title, Subtitle } from './styles'

export default function Hero() {
  return (
    <Section id='banner'>
      <Container>
        <Content>
          <Title>Open Water Dive</Title>
          <Subtitle>Beginner PADI certification that will teach you the skills to dive safely and independently anywhere in the world.</Subtitle>
        </Content>
      </Container>
    </Section>
  )
}
