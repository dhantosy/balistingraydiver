'use client'

import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { Section, Title, Subtitle, Heading, BoxTitle, BoxSubtitle, BoxMore, BoxContent, BoxWrapper, BoxContainer, BoxContainerOuter, BoxArrow, Anchor } from './styles'

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
    image: '/assets/images/gallery-2.jpg',
    link: '/',
  },
  {
    title: 'Amed',
    subtitle: 'Amed diving trip is a hidden gem in the North East of Bali Combination of natural and artificial reefs is Perfect for photography.',
    image: '/assets/images/gallery-3.jpg',
    link: '/',
  },
  {
    title: 'Tulamben',
    subtitle: 'USAT Liberty Shipwreck (1942) Colourful and diverse marine life Tulamben diving is an excellent site for Beginners to Expert.',
    image: '/assets/images/gallery-6.jpg',
    link: '/',
  },
  {
    title: 'Gili Tepekong',
    subtitle: 'Gili Tepekong & Mimpang diving trip is suitable for experienced divers. The abundance of marine life Shark encounters',
    image: '/assets/images/gallery-1.jpg',
    link: '/',
  },
  {
    title: 'Menjangan',
    subtitle: 'The home  Turtles, Fire Dartfish, Red-Toothed Triggerfish, Wall diving, Nudibranchs, Orangutan Crabs Bat fish, Blue dogtooth tuna, and Tip Reef in Menjangan',
    image: '/assets/images/gallery-4.jpg',
    link: '/',
  },
]

export default function Destinations() {
  return (
    <Section>
      <Anchor id='fun-diving' />
      <Heading>
        <Title>Fun Diving</Title>
        <Subtitle>Whether you are a certified diver or a beginner, fun diving offers the opportunity to discover breathtaking marine life, vibrant coral reefs, and fascinating underwater landscapes</Subtitle>
      </Heading>
      <BoxContainerOuter>
        <BoxContainer>
          {sites.map(({ title, subtitle, image, link }) => {

            return (
              <BoxWrapper key={title} style={{ backgroundImage: `url(${image})` }}>
                <Link href={link}>
                  <BoxContent>
                    <BoxTitle>{title}</BoxTitle>
                    <BoxSubtitle>{subtitle}</BoxSubtitle>
                    <BoxMore>
                      Read More
                      <BoxArrow>
                        <FaArrowRight />
                      </BoxArrow>
                    </BoxMore>
                  </BoxContent>
                </Link>
              </BoxWrapper>
            )
          })}
        </BoxContainer>
      </BoxContainerOuter>
    </Section>
  )
}
