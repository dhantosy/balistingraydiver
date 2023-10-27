'use client'

import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa'
import Container from '@/app/_components/Container'
import { Section, Title, Subtitle, Heading, BoxTitle, BoxSubtitle, BoxMore, BoxContent, BoxWrapper, BoxContainer, BoxPretitle, BoxContentTop, BoxIcon } from './styles'

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

export default function Courses() {
  return (
    <Section id='dive-courses'>
      <Container>
        <Heading>
          <Title>Diving Courses</Title>
          <Subtitle>PADI Dive courses are designed to provide comprehensive training and knowledge for individuals who are eager to explore the underwater world. Led by certified and experienced instructors, we cover all topics including theory, equipments, safety procedures, and underwater communication.</Subtitle>
        </Heading>
        <BoxContainer>
          {sites.map(({ title, subtitle, link }) => {

            return (
              <BoxWrapper key={title}>
                <Link href={link}>
                  <BoxContent>
                    <BoxContentTop>
                      <BoxPretitle>PADI</BoxPretitle>
                      <BoxTitle>{title}</BoxTitle>
                      <BoxSubtitle>{subtitle}</BoxSubtitle>
                    </BoxContentTop>
                    <BoxMore>
                      <div>
                        Learn More
                      </div>
                      <BoxIcon>
                        <FaAngleRight />
                      </BoxIcon>
                    </BoxMore>
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
