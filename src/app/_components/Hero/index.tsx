'use client'

import Container from '@/app/_components/Container'
import { Section, Content, Title, Subtitle } from './styles'

type Props = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

export default function Hero({ title, subtitle, backgroundImage }: Props) {
  return (
    <Section id='banner' style={{ 'backgroundImage': `url(${backgroundImage})` }}>
      <Container>
        <Content>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Content>
      </Container>
    </Section>
  )
}
