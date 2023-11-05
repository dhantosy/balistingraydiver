'use client'

import Container from '@/app/_components/Container'
import { Section, Content, Title, Subtitle, Wrapper, ContentTitle, BoxContainer, BoxContainerOuter, BoxContent, BoxTitle, BoxWrapper } from './styles'

const sites = [
  {
    title: 'Pulau Weh',
    image: '/assets/images/beyond-bali/diving-weh.jpg'
  },
  {
    title: 'Bandar Neira',
    image: '/assets/images/beyond-bali/diving-bandaneira.jpg'
  },
  {
    title: 'Gorontalo',
    image: '/assets/images/beyond-bali/diving-gorontalo.jpg'
  },
  {
    title: 'Wakatobi',
    image: '/assets/images/beyond-bali/diving-wakatobi.jpg'
  },
  {
    title: 'Bunaken',
    image: '/assets/images/beyond-bali/diving-bunaken.jpg'
  },
  {
    title: 'Komodo',
    image: '/assets/images/beyond-bali/diving-komodo.jpg'
  },
  {
    title: 'Alor',
    image: '/assets/images/beyond-bali/diving-alor.jpg'
  },
  {
    title: 'Ambon',
    image: '/assets/images/beyond-bali/diving-ambon.jpg'
  },
  {
    title: 'Morotai',
    image: '/assets/images/beyond-bali/diving-morotai.jpg'
  },
  {
    title: 'Raja Ampat',
    image: '/assets/images/beyond-bali/diving-rajaampat.jpg'
  },
]

export default function BeyondBali() {
  return (
    <>
      <Section id='banner'>
        <Container>
          <Content>
            <Title>Beyond Bali</Title>
            <Subtitle>Bali Stingray Diver Beyond Indo Ocean Explorer</Subtitle>
          </Content>
        </Container>
      </Section>
      <Container>
        <Wrapper>
          <ContentTitle>About Indo Ocean Explorer</ContentTitle>
          <p>we are from Travel Agent INDO OCEAN EXPLORER and BALI STINGRAY DIVERS Dive Centre in Sanur, Bali, Indonesia. Our services focus on sports travel (Diving), making Liveaboard trips, land-based or Land tour trips beyond exotic locations in Indonesia, and Diving around Bali Area. We also provide Luxury Yacht private Charter with activities: Diving Bali, Fishing, and Sailing around Bali Area.</p>
          <p>Enjoy a luxury cruise holiday in Indonesia and explore the marine ecosystem: Liveaboard and Land-based trips to exotic locations in Indonesia. Exploring Weh, Banda, Gorontalo, Wakatobi, Bunaken, Komodo, Alor, Ambon, Morotai, and Raja Ampat, the spacious Blue Manta Explorer is fully equipped to take you to some of the most beautiful, exotic, and remote diving destinations in Indonesia.</p>
          <p>We provide tailor-made journeys and meticulously arrange them based on your unique interests, idea, travel pace, accommodation preferences, and personal travel style. At Indo Ocean Explorer, we are passionate about helping travellers have incredible Indonesian experiences. Our travel specialists are ready to help you experience this amazing country to the fullest!</p>
          <p>SAFETY – OF COURSE, YOUR SAFETY AND COMFORT ARE OUR MAIN PRIORITIES. WE ALWAYS TAKE CARE TO MATCH YOUR LEVEL OF EXPERIENCE WITH THAT OF THE OTHER GUESTS IN YOUR GROUP. EACH AND EVERY ONE OF OUR DIVE BOATS IS FULLY EQUIPPED WITH A FIRST AID KIT, EMERGENCY OXYGEN AND LIFE JACKETS. OUR STAFF IS REGULARLY TRAINED ON THE USAGE OF THIS EQUIPMENT. ALL OUR GUIDES USE A DSMB TO INDICATE OUR POSITION TO MARINE TRAFFIC PRIOR TO ASCENDING WITH THE GROUP AND SAFETY IS OUR PRIMARY.</p>
          <p>Our philosophy is to offer special holidays tailored to your requirements. We do not believe one size fits all; there will always be times when you are after something a little more bespoke. A tailored experience, something designed just for you.</p>
          <p>Focusing on personalized service and bespoke itineraries, we meticulously arrange your trip to Indonesia based on your unique interests, ideal travel pace, accommodation preferences, and personal travel style. We use our expert knowledge to seek out the best that the country offers - the best places to stay, the best experiences, the best routes, and we take away the hard work by arranging it all for you. So sit and relax as we help you to experience this amazing country to the fullest!</p>
          <ContentTitle>Our Destinations</ContentTitle>
        </Wrapper>
      </Container>
      <BoxContainerOuter>
        <BoxContainer>
          {sites.map(({ title, image }) => {

            return (
              <BoxWrapper key={title} style={{ backgroundImage: `url(${image})` }}>
                <BoxContent>
                  <BoxTitle>{title}</BoxTitle>
                </BoxContent>
              </BoxWrapper>
            )
          })}
        </BoxContainer>
      </BoxContainerOuter>
    </>
  )
}
