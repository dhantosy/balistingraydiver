'use client'

import Link from 'next/link'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, BoxTitle, BoxSubtitle, BoxMore, BoxContent, BoxWrapper, BoxContainer } from './styles'

const sites = [
  {
    title: 'Nusa Penida',
    subtitle: 'Vibrant corals and unique marine life Exhilarating drift sites Nusa Penida diving trip is a favourite for experienced divers.',
    image: '/assets/images/nusa-penida.jpg',
    link: '/',
  },
  {
    title: 'Padang Bai',
    subtitle: 'Colourful and diverse marine life Perfect for snorkelling Padang Bai diving trip is ideal for macro photography.',
    image: '/assets/images/nusa-penida.jpg',
    link: '/',
  },
  {
    title: 'Amed',
    subtitle: 'Amed diving trip is a hidden gem in the North East of Bali Combination of natural and artificial reefs is Perfect for photography.',
    image: '/assets/images/nusa-penida.jpg',
    link: '/',
  },
  {
    title: 'Tulamben',
    subtitle: 'USAT Liberty Shipwreck (1942) Colourful and diverse marine life Tulamben diving is an excellent site for Beginners to Expert.',
    image: '/assets/images/nusa-penida.jpg',
    link: '/',
  },
  {
    title: 'Gili Tepekong',
    subtitle: 'Gili Tepekong & Mimpang diving trip is suitable for experienced divers. The abundance of marine life Shark encounters',
    image: '/assets/images/nusa-penida.jpg',
    link: '/',
  },
  {
    title: 'Menjangan',
    subtitle: 'Menjangan is full of nooks and crannies, overhangs and crevasses with soft corals, sponges, and Bali’s highest concentration of Gorgonian seafans.',
    image: '/assets/images/nusa-penida.jpg',
    link: '/',
  },
]

export default function Destinations() {
  return (
    <Section id='fun-diving'>
      <Container>
        <Heading>
          <Title>Fun Diving</Title>
          <Subtitle>Whether you are a certified diver or a beginner, fun diving offers the opportunity to discover breathtaking marine life, vibrant coral reefs, and fascinating underwater landscapes</Subtitle>
        </Heading>
        <BoxContainer>
          {sites.map(({ title, subtitle, image, link }) => {

            return (
              <BoxWrapper key={title} style={{ backgroundImage: `url(${image})` }}>
                <Link href={link}>
                  <BoxContent>
                    <BoxTitle>{title}</BoxTitle>
                    <BoxSubtitle>{subtitle}</BoxSubtitle>
                    <BoxMore>Learn More</BoxMore>
                  </BoxContent>
                </Link>
              </BoxWrapper>
            )
          })}
        </BoxContainer>
      </Container>
    </Section>
  )
}
