'use client'

import Image from 'next/image'
import Container from '@/app/_components/Container'
import { Section, Content, Title, Subtitle } from './styles'

type Props = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

export default function Hero({ title, subtitle, backgroundImage }: Props) {
  return (
    <Section id='banner'>
      <Image
        src={backgroundImage}
        alt={title}
        sizes={`100vw, 33vw`}
        fill
        style={{ objectFit: 'cover' }}
        className='image'
        priority
      />
      <Container>
        <Content>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Content>
      </Container>
    </Section>
  )
}
