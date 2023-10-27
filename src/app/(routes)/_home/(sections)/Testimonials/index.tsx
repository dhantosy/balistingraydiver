'use client'

import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, BoxContainer } from './styles'

const sites = [
  {
    title: 'Open Water',
    subtitle: 'Beginner PADI certification that will teach you the skills to dive safely and independently anywhere in the world.',
    link: '/',
  },
  {
    title: 'Advanced Open Water',
    subtitle: 'Dive to 30m deep and helps build confidence to advance diving skills through various adventure dives.',
    link: '/',
  },
  {
    title: 'Rescue Diver',
    subtitle: 'A step towards going Pro or Master Scuba Diver and become a safer buddy with the PADI Rescue diver course.',
    link: '/',
  },
  {
    title: 'Divemaster',
    subtitle: 'Act as a certified assistant to PADI Instructors!',
    link: '/',
  },
]

export default function Testimonials() {
  return (
    <Section id='dive-courses'>
      <Container>
        <Heading>
          <Title>What Our Clients Say</Title>
        </Heading>
        <BoxContainer>
          
        </BoxContainer>
      </Container>
    </Section>
  )
}
