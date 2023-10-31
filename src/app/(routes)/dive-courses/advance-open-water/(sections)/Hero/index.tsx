'use client'

import Container from '@/app/_components/Container'
import { Section, Content, Title, Subtitle } from './styles'

export default function Hero() {
  return (
    <Section id='banner'>
      <Container>
        <Content>
          <Title>Advance Open Water Dive</Title>
          <Subtitle>Dive up to 30m deep and helps build confidence to advance diving skills through various adventure dives.</Subtitle>
        </Content>
      </Container>
    </Section>
  )
}
