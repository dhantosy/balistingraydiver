'use client'

import Container from '@/app/_components/Container'
import { Section, Content, Title, Subtitle } from './styles'

export default function Hero() {
  return (
    <Section id='banner'>
      <Container>
        <Content>
          <Title>Amed</Title>
          <Subtitle>Explore Amed with Bali Stingray Divers</Subtitle>
        </Content>
      </Container>
    </Section>
  )
}
